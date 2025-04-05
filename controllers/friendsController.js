const filterFriends = (req, res) => {
  let filterGender = req.query.gender;
  let filterLetter = req.query.letter.toLocaleLowerCase();
  let matchingFriends = [...friends];

  if (filterGender && filterLetter) {
    matchingFriends = matchingFriends.filter(
      (friend) =>
        friend.gender == filterGender &&
        friend.name.toLocaleLowerCase().startsWith(filterLetter)
    );
  }

  if (matchingFriends.length > 0) {
    res.status(200).json(matchingFriends);
  } else {
    res.status(404).json({
      error:
        "No friends matching parameters " +
        filterGender +
        " and begins with " +
        filterLetter,
    });
  }
};

const info = (req, res) => {
  const userAgent = req.headers["user-agent"];
  const acceptHeaders = req.headers["accept"];
  res.json({
    UserAgent: userAgent,
    AcceptHeader: acceptHeaders,
  });
};

const matchingId = (req, res) => {
  let friendId = parseInt(req.params.id);

  let matchingIdFriend = friends.filter((friend) => friend.id === friendId);
  if (matchingIdFriend.length > 0) {
    res.json({
      result: "Finding friend with ID " + friendId,
      friend: matchingIdFriend,
    });
  } else {
    res.status(404).json({ error: "No friend matching the ID" });
  }
};

const newFriend = (req, res) => {
  let newFriend = req.body;
  console.log(newFriend);

  if (!newFriend.name || !newFriend.gender) {
    res
      .status(500)
      .json({ error: "Friend object must contain a name and gender" });
    return;
  } else if (!newFriend.id) {
    newFriend.id = friends.length + 1;
  }

  friends.push(newFriend);
  res.status(200).json(newFriend);
};

const updateFriend = (req, res) => {
  let friendId = parseInt(req.params.id);
  let matchedIndex = friends.findIndex((friend) => friend.id === friendId);
  let originalFriend = req.body;

  if (matchedIndex !== -1) {
    friends[matchedIndex].name = originalFriend["name"];
    friends[matchedIndex].gender = originalFriend["gender"];
    res.json(friends[matchedIndex]);
  } else {
    res.status(404).json({ error: `No friend matching id ${friendId}` });
  }
};

module.exports = {
  filterFriends,
  info,
  matchingId,
  newFriend,
  updateFriend,
};
