var crabBlock = document.getElementById("crabCount");
var moneyBlock = document.getElementById("moneyCount");
var spaceBlock = document.getElementById("spaceCount");
var crabCostBlock = document.getElementById("crabCost");
var crabUpgradeCostBlock = document.getElementById("crabUpgradeCost");
var spaceCostBlock = document.getElementById("spaceCost");
var consoleBlock = document.getElementById("consoleBlock");
var crabs = 1;
var crabCost = 5;
var spaceCost = 25;
var space = 10;
var spacePurchases = 0;
var money = 0;
var incomeRate = 1;
var crabBonus = false;
var crabUpgradeCost = 100;
var incomeScale = 1;
var stage = 0;


setInterval(updatePage, 1000);

function updatePage() {
  if(stage === 0) {
    addMoney(incomeRate * incomeScale);
  } else if (stage === 1) {
    addMoney(incomeRate * incomeScale);
  }
}

function consoleLog(log) {
  let newText = "<p>" + log + "</p>";
  consoleBlock.innerHTML = newText + consoleBlock.innerHTML;
}

function addMoney(amt) {
  money += amt;
  moneyBlock.innerHTML = "money: $" + money + " ($" + incomeRate * incomeScale + "/second)";
}

function upgradeCrab() {
  if(money > crabUpgradeCost - 1) {
    addMoney(-crabUpgradeCost);
    incomeScale++;
    crabUpgradeCost += Math.floor(Math.pow(1.01, crabUpgradeCost));
    crabUpgradeCostBlock.innerHTML = "($" + crabUpgradeCost + ")";
  } else {
    consoleLog("not enough money!");
  }
}

function makeCrab() {
  if(crabs < space) {
    if(money > crabCost - 1) {
      addMoney(-crabCost);
      crabs++;
      incomeRate++;
      if(crabs === 10) {
        crabBonus = true;
      }
      crabCost += Math.floor(Math.pow(1.0001, crabCost));
      crabBlock.innerHTML = "crabs: " + crabs + "/" + space;
      crabCostBlock.innerHTML = "($" + crabCost + ")";
    } else {
      consoleLog("not enough money!");
    }
  } else {
    consoleLog("not enough space!");
  }
}

function addSpace() {
  if (money > spaceCost - 1) {
    addMoney(-spaceCost);
    space++;
    spaceCost += Math.floor(Math.pow(1.0001, spaceCost));
    crabBlock.innerHTML = "crabs: " + crabs + "/" + space;
    spaceCostBlock.innerHTML = "($" + spaceCost + ")";
  } else {
    consoleLog("not enough money!");
  }
}
