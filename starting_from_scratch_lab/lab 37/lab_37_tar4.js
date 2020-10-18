const cards = [
  { value: "A", visible: false, found: false },
  { value: "A", visible: false, found: false },
  { value: "B", visible: false, found: false },
  { value: "B", visible: false, found: false },
  { value: "C", visible: false, found: false },
  { value: "C", visible: false, found: false },
];

//#1
//play(cards, 1);
//#2
//play(cards, 2);

//#3
//play(cards, 1);
//play(cards, 0);



function play(cards, cardNumber) {
  cards[cardNumber].visible = true;
  const filteredCards = cards.filter((card) => card.visible && !card.found);
  const hasCouple = filteredCards.length == 2;

  if (hasCouple) {
    const areTheSame = filteredCards[0].value === filteredCards[1].value;
    // find indexes
    let coupleIndexes = cards
      .map((card, index) =>
        card.value === filteredCards[0].value ? index : -1
      )
      .filter((index) => index !== -1);
    if (areTheSame) {
      // paint found true
      coupleIndexes.forEach((index) => {
        cards[index].found = true;
      });
    } else {
      // paint visible false
      coupleIndexes.push(cardNumber);
      coupleIndexes.forEach((index) => {
        cards[index].visible = false;
      });
    }
  }
  console.log(cards);
}
