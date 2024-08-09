"use strict";

class Deck {
    cards = new Array();

    constructor() {
        this.cards[0] = new Card(0, 0, true);
        this.cards[1] = new Card(0, 1, true);
        this.cards[2] = new Card(0, 2, true);
        this.cards[3] = new Card(0, 3, true);
        this.cards[4] = new Card(0, 4, true);
        this.cards[5] = new Card(0, 5, true);
        this.cards[6] = new Card(0, 6, true);
        this.cards[7] = new Card(0, 7, true);
        this.cards[8] = new Card(0, 8, true);
        this.cards[9] = new Card(0, 9, true);
        this.cards[10] = new Card(0, 10, true);
        this.cards[11] = new Card(0, 11, true);
        this.cards[12] = new Card(0, 12, true);
        this.cards[13] = new Card(0, 13, true);
        this.cards[14] = new Card(0, 14, true);
        this.cards[15] = new Card(0, 15, true);
        this.cards[16] = new Card(0, 16, true);
        this.cards[17] = new Card(0, 17, true);
        this.cards[18] = new Card(0, 18, true);
        this.cards[19] = new Card(0, 19, true);
        this.cards[20] = new Card(0, 20, true);
        this.cards[21] = new Card(0, 21, true);
        this.cards[22] = new Card(1, 0, true);
        this.cards[23] = new Card(1, 1, true);
        this.cards[24] = new Card(1, 2, true);
        this.cards[25] = new Card(1, 3, true);
        this.cards[26] = new Card(1, 4, true);
        this.cards[27] = new Card(1, 5, true);
        this.cards[28] = new Card(1, 6, true);
        this.cards[29] = new Card(1, 7, true);
        this.cards[30] = new Card(1, 8, true);
        this.cards[31] = new Card(1, 9, true);
        this.cards[32] = new Card(1, 10, true);
        this.cards[33] = new Card(1, 11, true);
        this.cards[34] = new Card(1, 12, true);
        this.cards[35] = new Card(1, 13, true);
        this.cards[36] = new Card(2, 0, true);
        this.cards[37] = new Card(2, 1, true);
        this.cards[38] = new Card(2, 2, true);
        this.cards[39] = new Card(2, 3, true);
        this.cards[40] = new Card(2, 4, true);
        this.cards[41] = new Card(2, 5, true);
        this.cards[42] = new Card(2, 6, true);
        this.cards[43] = new Card(2, 7, true);
        this.cards[44] = new Card(2, 8, true);
        this.cards[45] = new Card(2, 9, true);
        this.cards[46] = new Card(2, 10, true);
        this.cards[47] = new Card(2, 11, true);
        this.cards[48] = new Card(2, 12, true);
        this.cards[49] = new Card(2, 13, true);
        this.cards[50] = new Card(3, 0, true);
        this.cards[51] = new Card(3, 1, true);
        this.cards[52] = new Card(3, 2, true);
        this.cards[53] = new Card(3, 3, true);
        this.cards[54] = new Card(3, 4, true);
        this.cards[55] = new Card(3, 5, true);
        this.cards[56] = new Card(3, 6, true);
        this.cards[57] = new Card(3, 7, true);
        this.cards[58] = new Card(3, 8, true);
        this.cards[59] = new Card(3, 9, true);
        this.cards[60] = new Card(3, 10, true);
        this.cards[61] = new Card(3, 11, true);
        this.cards[62] = new Card(3, 12, true);
        this.cards[63] = new Card(3, 13, true);
        this.cards[64] = new Card(4, 0, true);
        this.cards[65] = new Card(4, 1, true);
        this.cards[66] = new Card(4, 2, true);
        this.cards[67] = new Card(4, 3, true);
        this.cards[68] = new Card(4, 4, true);
        this.cards[69] = new Card(4, 5, true);
        this.cards[70] = new Card(4, 6, true);
        this.cards[71] = new Card(4, 7, true);
        this.cards[72] = new Card(4, 8, true);
        this.cards[73] = new Card(4, 9, true);
        this.cards[74] = new Card(4, 10, true);
        this.cards[75] = new Card(4, 11, true);
        this.cards[76] = new Card(4, 12, true);
        this.cards[77] = new Card(4, 13, true);
    }
}

class Card {
    name = "";

    constructor(suit, rank, upright) {
        this.suit = suit;
        this.rank = rank;
        this.upright = upright;

        if(this.suit === 0) {
            switch(this.rank) {
                case 0:
                    this.name = "0 THE FOOL";
                    break;
                case 1:
                    this.name = "I THE MAGICIAN";
                    break;
                case 2:
                    this.name = "II THE HIGH PRIESTESS";
                    break;
                case 3:
                    this.name = "III THE EMPRESS";
                    break;
                case 4:
                    this.name = "IV THE EMPEROR";
                    break;
                case 5:
                    this.name = "V THE HIEROPHANT";
                    break;
                case 6:
                    this.name = "VI THE LOVERS";
                    break;
                case 7:
                    this.name = "VII THE CHARIOT";
                    break;
                case 8:
                    this.name = "VIII STRENGTH";
                    break;
                case 9:
                    this.name = "IX THE HERMIT";
                    break;
                case 10:
                    this.name = "X WHEEL OF FORTUNE";
                    break;
                case 11:
                    this.name = "XI JUSTICE";
                    break;
                case 12:
                    this.name = "XII THE HANGED MAN";
                    break;
                case 13:
                    this.name = "XIII DEATH";
                    break;
                case 14:
                    this.name = "XIV TEMPERANCE";
                    break;
                case 15:
                    this.name = "XV THE DEVIL";
                    break;
                case 16:
                    this.name = "XVI THE TOWER";
                    break;
                case 17:
                    this.name = "XVII THE STAR";
                    break;
                case 18:
                    this.name = "XVIII THE MOON";
                    break;
                case 19:
                    this.name = "XIX THE SUN";
                    break;
                case 20:
                    this.name = "XX JUDGEMENT";
                    break;
                case 21:
                    this.name = "XXI THE WORLD";
                    break;
                default:
                    this.name = "XXX THE ERROR";
            }
        } else if(this.suit === 1) {
            switch(this.rank) {
                case 0:
                    this.name = "ace of pentacles";
                    break;
                case 1:
                    this.name = "ii of pentacles";
                    break;
                case 2:
                    this.name = "iii of pentacles";
                    break;
                case 3:
                    this.name = "iv of pentacles";
                    break;
                case 4:
                    this.name = "v of pentacles";
                    break;
                case 5:
                    this.name = "vi of pentacles";
                    break;
                case 6:
                    this.name = "vii of pentacles";
                    break;
                case 7:
                    this.name = "viii of pentacles";
                    break;
                case 8:
                    this.name = "ix of pentacles";
                    break;
                case 9:
                    this.name = "x of pentacles";
                    break;
                case 10:
                    this.name = "page of pentacles";
                    break;
                case 11:
                    this.name = "knight of pentacles";
                    break;
                case 12:
                    this.name = "queen of pentacles";
                    break;
                case 13:
                    this.name = "king of pentacles";
                    break;
                default:
                    this.name = "xxx error of pentacles";
            }
        } else if(this.suit === 2) {
            switch(this.rank) {
                case 0:
                    this.name = "ace of swords";
                    break;
                case 1:
                    this.name = "ii of swords";
                    break;
                case 2:
                    this.name = "iii of swords";
                    break;
                case 3:
                    this.name = "iv of swords";
                    break;
                case 4:
                    this.name = "v of swords";
                    break;
                case 5:
                    this.name = "vi of swords";
                    break;
                case 6:
                    this.name = "vii of swords";
                    break;
                case 7:
                    this.name = "viii of swords";
                    break;
                case 8:
                    this.name = "ix of swords";
                    break;
                case 9:
                    this.name = "x of swords";
                    break;
                case 10:
                    this.name = "page of swords";
                    break;
                case 11:
                    this.name = "knight of swords";
                    break;
                case 12:
                    this.name = "queen of swords";
                    break;
                case 13:
                    this.name = "king of swords";
                    break;
                default:
                    this.name = "xxx error of swords";
            }
        } else if(this.suit === 3) {
            switch(this.rank) {
                case 0:
                    this.name = "ace of cups";
                    break;
                case 1:
                    this.name = "ii of cups";
                    break;
                case 2:
                    this.name = "iii of cups";
                    break;
                case 3:
                    this.name = "iv of cups";
                    break;
                case 4:
                    this.name = "v of cups";
                    break;
                case 5:
                    this.name = "vi of cups";
                    break;
                case 6:
                    this.name = "vii of cups";
                    break;
                case 7:
                    this.name = "viii of cups";
                    break;
                case 8:
                    this.name = "ix of cups";
                    break;
                case 9:
                    this.name = "x of cups";
                    break;
                case 10:
                    this.name = "page of cups";
                    break;
                case 11:
                    this.name = "knight of cups";
                    break;
                case 12:
                    this.name = "queen of cups";
                    break;
                case 13:
                    this.name = "king of cups";
                    break;
                default:
                    this.name = "xxx error of cups";
            }
        } else if(this.suit === 4) {
            switch(this.rank) {
                case 0:
                    this.name = "ace of wands";
                    break;
                case 1:
                    this.name = "ii of wands";
                    break;
                case 2:
                    this.name = "iii of wands";
                    break;
                case 3:
                    this.name = "iv of wands";
                    break;
                case 4:
                    this.name = "v of wands";
                    break;
                case 5:
                    this.name = "vi of wands";
                    break;
                case 6:
                    this.name = "vii of wands";
                    break;
                case 7:
                    this.name = "viii of wands";
                    break;
                case 8:
                    this.name = "ix of wands";
                    break;
                case 9:
                    this.name = "x of wands";
                    break;
                case 10:
                    this.name = "page of wands";
                    break;
                case 11:
                    this.name = "knight of wands";
                    break;
                case 12:
                    this.name = "queen of wands";
                    break;
                case 13:
                    this.name = "king of wands";
                    break;
                default:
                    this.name = "xxx error of wands";
            }
        } else {
            this.name = "xxx error of errors";
        }
    }
}

var deck = new Deck();
var hand = new Array();
var discard = new Array();

// fisher-yates shuffle
// -- To shuffle an array a of n elements (indices 0..n-1):
// for i from 0 to n−2 do
//      j ← random integer such that i ≤ j < n
//      exchange a[i] and a[j]
function shuffleDeck() {
    if(deck instanceof Deck) {
        for(let i = 0; i < deck.cards.length-2; i++) {
            let j = getRandomInt(i, deck.cards.length);
            let swapCard = deck.cards[i];
            deck.cards[i] = deck.cards[j];
            deck.cards[j] = swapCard;
        }
    }
}

function reshuffleDeck() {
    deck.cards.push(hand);
    hand = [];
    deck.cards.push(discard);
    discard = [];
    shuffleDeck();
}

// random int function from
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
function getRandomInt(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    // The maximum is exclusive and the minimum is inclusive
    return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled);
  }

function drawCard() {
    hand.push(deck.cards.pop());
    console.log(hand);
}

shuffleDeck();