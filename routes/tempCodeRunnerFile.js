const express = require("express");
const router = express.Router();
const friends = require("../models/friends");

// TODO - #5: Move all logic out into a controller with functions for finding, filtering, info, adding and updating

router.get("/", (req, res) => {
  res.json(friends);
});

// 1. Add support to also filter by a starting 'letter' query parameter ie. /friends/filter?letter=R
router.get("/filter", (req, res) => {
  console.log(req.query);
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
});

// TODO - #2: Modify the 'info' route to only return the user-agent, content-type and accept header data
router.get("/info", (req, res) => {
  console.log(req.headers);
  const userAgent = req.headers["user-agent"];
  //   const contentType = req.header["content-type"]; - CANNOT ACCESS
  const acceptHeaders = req.headers["accept"];
  res.json({
    UserAgent: userAgent,
    // ContentType: contentType,
    AcceptHeader: acceptHeaders,
  });
});

// TODO - #3: Modify the dynamic GET route to return a single friend object matching the dynamic 'id' request parameter
router.get("/:id", (req, res) => {
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
});

// a POST request with data sent in the body of the request, representing a new friend to add to our list
router.post("/", (req, res) => {
  let newFriend = req.body; // FIRST add this line to index.js: app.use(express.json());
  console.log(newFriend); // 'body' will now be an object containing data sent via the request body

  // we can add some validation here to make sure the new friend object matches the right pattern
  if (!newFriend.name || !newFriend.gender) {
    res
      .status(500)
      .json({ error: "Friend object must contain a name and gender" });
    return;
  } else if (!newFriend.id) {
    newFriend.id = friends.length + 1; // generate an ID if one is not present
  }

  // if the new friend is valid, add them to the list and return the successfully added object
  friends.push(newFriend);
  res.status(200).json(newFriend);
});

// TODO - #4: Complete the PUT route which will update data for an existing friend
router.put("/:id", (req, res) => {
  let friendId = parseInt(req.params.id);
  let updatedFriend = req.body;
  console.log(updatedFriend);
  // Replace the old friend data for friendId with the new data from updatedFriend
  const matchedFriend = friends.filter((friend) => friend.id === friendId);
  //
  // Modify this response with the updated friend, or a 404 if not found
  res.json({
    result: "Updated friend with ID " + friendId,
    data: updatedFriend,
  });
});

module.exports = router;
