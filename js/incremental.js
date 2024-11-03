"use strict";

var mainResource = 0.00;
var mainResourceRateOfChange = 0.00;
var manualCollectRate = 1.00;
var autoCollectors = 0;
var autoCollectorsCollectRate = 0.0001;
var autoCollectorsLevel = 0;

var mainResourceLabel = document.getElementById("mainResourceLabel");
var collectorsLabel = document.getElementById("collectorsLabel");

function manualCollect() {
    mainResource += manualCollectRate;
}

function buyCollector() {
    autoCollectors++;
}

function upgradeCollector() {
    autoCollectorsLevel++;
}

function updateResources() {
    mainResourceRateOfChange = autoCollectors * autoCollectorsCollectRate * autoCollectorsLevel;

    mainResource += mainResourceRateOfChange;
}

function updateText() {
    mainResourceLabel.innerHTML = "resource: " + mainResource.toFixed(2) + " (+" + (mainResourceRateOfChange * 10).toFixed(3) + "/sec)";
    collectorsLabel.innerHTML = autoCollectors + " collectors (lvl " + autoCollectorsLevel + ")";
}

function main() {
    updateResources();
    updateText();
}

setInterval(main, 100);