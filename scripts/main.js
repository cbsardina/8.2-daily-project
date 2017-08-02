/*
   Implement a Blackjack hand value calculator.

   Open up the `index.html` file and your console
   to watch the assertions pass as you write your code.

   Also remember, that the parameter `hand` will be an array, so
   you'll need to parse through that first before you can start to
   write your logic.
*/
ddealt = ["2", "8", "K", "A"];

function handValue (hand) {
  let parsedHand = [];
  let aces = [];
  for (let i=0; i < hand.length; i++) {
    let card = hand[i];
    if (card === "K"
        || card === "Q"
        || card === "J") {
          card = 10;
          parsedHand.push(card);
        }
        else if (card === "A") {
          aces.push(card);
        }
        else {
          parsedHand.push(parseInt(card, 10));
        }
  }
  let numsAndFace = 0;
  for (let j=0; j < parsedHand.length; j++) {
    let smalls = parsedHand[j];
    numsAndFace = numsAndFace + smalls;
  }
  for (let k=0; k < aces.length; k++) {


  }
  console.log("hand" + parsedHand);
  console.log("aces" + aces);
  console.log(numsAndFace);
}
handValue(dealt);

  // var text = "";
  // var i = 0;
  // while (i < 10) {
  //     text += "The number is " + i;
  //     i++;
  //   }
  //   console.log(text);

// console.log(handValue(["2", "2", "8"]));

/* -----  Hints ------

1..10   ==> Worth face value (1 = 1, 4 = 4, etc)
K, Q, J ==> Worth 10
A       ==> Worth 1 or 11

*/
