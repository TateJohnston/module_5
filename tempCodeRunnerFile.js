const head = [1, 2, 3, 4, 5];
var reverseList = function (head) {
  const reverseHead = [];
  for (let i = head.length; i > 0; i--) {
    reverseHead.push(i);
  }
  return reverseHead;
};
console.log(reverseList(head));
