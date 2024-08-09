// Cards have names and orientations
class Card {
  constructor(name, orientation) {
    this.name = name;
    this.orientation = orientation;
  }

  getName() {
    return `${this.name}`;
  }

  getOrientation() {
    return `${this.orientation}`;
  }

  toString() {
    return `${this.orientation} ${this.name}`;
  }
}

// Decks are just arrays of cards
class Deck {
  constructor() {
    this.cards = [];
  }

  toString() {
    cards.forEach((card) => console.log(card.toString()));
  }
}

// decks and hands
let deck = [];
let discard = [];
let cardOne = null;
let cardTwo = null;
let cardThree = null;
let hand = [cardOne, cardTwo, cardThree];

// buttons
let shuffleButton;
let pastButton;
let presentButton;
let futureButton;

// positions
let buttonY;
let cardY;
let deckX;
let pastX;
let presentX;
let futureX;
let deckPosition;
let pastPosition;
let presentPosition;
let futurePosition;

//card size
let cardWidth = 275 / 2;
let cardHeight = 475 / 2;

// flags for visuals
let pastSelect = false;
let presentSelect = false;
let futureSelect = false;

function setPositions() {
  buttonY = height / 4;
  cardY = height / 3;
  deckX = 5;
  pastX = width / 4;
  presentX = width / 2;
  futureX = (3 * width) / 4;
  deckPosition = [deckX, cardY];
  pastPosition = [pastX, cardY];
  presentPosition = [presentX, cardY];
  futurePosition = [futureX, cardY];
}

function makeDeck() {
  deck = [
    new Card("0 THE FOOL", "upright"),
    new Card("I THE MAGICIAN", "upright"),
    new Card("II THE HIGH PRIESTESS", "upright"),
    new Card("III THE EMPRESS", "upright"),
    new Card("IV THE EMPEROR", "upright"),
    new Card("V THE HIEROPHANT", "upright"),
    new Card("VI THE LOVERS", "upright"),
    new Card("VII THE CHARIOT", "upright"),
    new Card("VIII STRENGTH", "upright"),
    new Card("IX THE HERMIT", "upright"),
    new Card("X WHEEL OF FORTUNE", "upright"),
    new Card("XI JUSTICE", "upright"),
    new Card("XII THE HANGED MAN", "upright"),
    new Card("XIII DEATH", "upright"),
    new Card("XIV TEMPERANCE", "upright"),
    new Card("XV THE DEVIL", "upright"),
    new Card("XVI THE TOWER", "upright"),
    new Card("XVII THE STAR", "upright"),
    new Card("XVIII THE MOON", "upright"),
    new Card("XIX THE SUN", "upright"),
    new Card("XX JUDGEMENT", "upright"),
    new Card("XXI THE WORLD", "upright"),
    new Card("ace of cups", "upright"),
    new Card("ii of cups", "upright"),
    new Card("iii of cups", "upright"),
    new Card("iv of cups", "upright"),
    new Card("v of cups", "upright"),
    new Card("vi of cups", "upright"),
    new Card("vii of cups", "upright"),
    new Card("viii of cups", "upright"),
    new Card("ix of cups", "upright"),
    new Card("x of cups", "upright"),
    new Card("page of cups", "upright"),
    new Card("knight of cups", "upright"),
    new Card("queen of cups", "upright"),
    new Card("king of cups", "upright"),
    new Card("ace of pentacles", "upright"),
    new Card("ii of pentacles", "upright"),
    new Card("iii of pentacles", "upright"),
    new Card("iv of pentacles", "upright"),
    new Card("v of pentacles", "upright"),
    new Card("vi of pentacles", "upright"),
    new Card("vii of pentacles", "upright"),
    new Card("viii of pentacles", "upright"),
    new Card("ix of pentacles", "upright"),
    new Card("x of pentacles", "upright"),
    new Card("page of pentacles", "upright"),
    new Card("knight of pentacles", "upright"),
    new Card("queen of pentacles", "upright"),
    new Card("king of pentacles", "upright"),
    new Card("ace of wands", "upright"),
    new Card("ii of wands", "upright"),
    new Card("iii of wands", "upright"),
    new Card("iv of wands", "upright"),
    new Card("v of wands", "upright"),
    new Card("vi of wands", "upright"),
    new Card("vii of wands", "upright"),
    new Card("viii of wands", "upright"),
    new Card("ix of wands", "upright"),
    new Card("x of wands", "upright"),
    new Card("page of wands", "upright"),
    new Card("knight of wands", "upright"),
    new Card("queen of wands", "upright"),
    new Card("king of wands", "upright"),
    new Card("ace of swords", "upright"),
    new Card("ii of swords", "upright"),
    new Card("iii of swords", "upright"),
    new Card("iv of swords", "upright"),
    new Card("v of swords", "upright"),
    new Card("vi of swords", "upright"),
    new Card("vii of swords", "upright"),
    new Card("viii of swords", "upright"),
    new Card("ix of swords", "upright"),
    new Card("x of swords", "upright"),
    new Card("page of swords", "upright"),
    new Card("knight of swords", "upright"),
    new Card("queen of swords", "upright"),
    new Card("king of swords", "upright"),
  ];
}

function makeButtons() {
  shuffleButton = createButton("reshuffle whole deck");
  shuffleButton.position(deckX, buttonY);

  pastButton = createButton("draw new past card");
  pastButton.position(pastX, buttonY);

  presentButton = createButton("draw new present card");
  presentButton.position(presentX, buttonY);

  futureButton = createButton("draw new future card");
  futureButton.position(futureX, buttonY);
}

function connectButtons() {
  shuffleButton.mousePressed(() => {
    shuffleDeck();
  });

  pastButton.mousePressed(() => {
    if (deck.length > 0) {
      drawPastCard();
    }
  });

  presentButton.mousePressed(() => {
    if (deck.length > 0) {
      drawPresentCard();
    }
  });

  futureButton.mousePressed(() => {
    if (deck.length > 0) {
      drawFutureCard();
    }
  });
}

function shuffleDeck() {
  hand = [];
  discard = [];
  makeDeck();
  deck = shuffle(deck);
}

function addHandToDeck() {
  if (hand.length > 0) {
    deck.push(hand);
    addHandToDeck();
  }
}

function addDiscardToDeck() {
  if (discard.length > 0) {
    deck.push(discard);
    addDiscardToDeck();
  }
}

function drawPastCard() {
  if (hand[0] !== null) {
    discard.push(hand[0]);
  }
  hand[0] = deck.pop();
}

function drawPresentCard() {
  if (hand[1] !== null) {
    discard.push(hand[1]);
  }
  hand[1] = deck.pop();
}

function drawFutureCard() {
  if (hand[2] !== null) {
    discard.push(hand[2]);
  }
  hand[2] = deck.pop();
}

function printHand() {
  let handString = "";

  if (hand[0] !== null) {
    handString += "(past) " + hand[0].getName() + " \n";
  } else {
    handString += "(past) XXII THE ERROR \n";
  }

  if (hand[1] !== null) {
    handString += "(present) " + hand[1].getName() + " \n";
  } else {
    handString += "(present) XXII THE ERROR \n";
  }

  if (hand[2] !== null) {
    handString += "(future) " + hand[2].getName() + " \n";
  } else {
    handString += "(future) XXII THE ERROR \n";
  }

  return handString;
}

function displayCards() {
  if (deck.length > 0) {
    rect(deckPosition[0], deckPosition[1], cardWidth, cardHeight);
    text(
      "deck",
      deckPosition[0] + cardWidth / 2,
      deckPosition[1] + cardHeight / 2
    );
  }

  if (discard.length > 0) {
    rect(
      deckPosition[0],
      deckPosition[1] + cardHeight + 10,
      cardWidth,
      cardHeight
    );
    text(
      "discard",
      deckPosition[0] + cardWidth / 2,
      deckPosition[1] + cardHeight + 10 + cardHeight / 2
    );
  }

  if (pastSelect) {
    rect(
      pastPosition[0],
      pastPosition[1] + cardHeight + 10,
      cardWidth,
      cardHeight
    );
    if (hand[0] !== undefined) {
      text(
        hand[0].toString(),
        pastPosition[0] + 5,
        pastPosition[1] + cardHeight + 10 + cardHeight / 2
      );
    }
  } else {
    rect(pastPosition[0], pastPosition[1], cardWidth, cardHeight);
    if (hand[0] !== undefined) {
      text(
        hand[0].getName(),
        pastPosition[0] + 5,
        pastPosition[1] + cardHeight / 2
      );
    }
  }

  if (presentSelect) {
    rect(
      presentPosition[0],
      presentPosition[1] + cardHeight + 10,
      cardWidth,
      cardHeight
    );
    if (hand[1] !== undefined) {
      text(
        hand[1].getName(),
        presentPosition[0] + cardWidth / 2,
        presentPosition[1] + cardHeight + 10 + cardHeight / 4
      );
    }
  } else {
    rect(presentPosition[0], presentPosition[1], cardWidth, cardHeight);
    if (hand[1] !== undefined) {
      text(
        hand[1].getName(),
        presentPosition[0] + 5,
        presentPosition[1] + cardHeight / 2
      );
    }
  }

  if (futureSelect) {
    rect(
      futurePosition[0],
      futurePosition[1] + cardHeight + 10,
      cardWidth,
      cardHeight
    );
    if (hand[2] !== undefined) {
      text(
        hand[2].getName(),
        futurePosition[0] + 5,
        futurePosition[1] + cardHeight + 10 + cardHeight / 2
      );
    }
  } else {
    rect(futurePosition[0], futurePosition[1], cardWidth, cardHeight);
    if (hand[2] !== undefined) {
      text(
        hand[2].getName(),
        futurePosition[0] + 5,
        futurePosition[1] + cardHeight / 2
      );
    }
  }
}

function setup() {
  createCanvas(800, 750);

  setPositions();
  
  makeButtons();
  connectButtons();

  // setting up major and minor decks
  makeDeck();
  shuffleDeck();
  drawPastCard();
  drawPresentCard();
  drawFutureCard();
}

function draw() {
  background(220);

  displayCards();

  // text(printHand(), width/8, 5*height/6);
}
