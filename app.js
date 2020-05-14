#!/usr/bin/env node

const puppeteer = require("puppeteer");

const USAGE_STR = "usage: screenshot-maker [URL] [-o OUTPUT_FILE]\n\n  Optional flags:\n  -o|--output [OUTPUT_FILE]\tSpecify output file - defaults to 'screenshot.png'";

const FlagType = Object.freeze({
    OUTPUT: 1
});

var flag = 0;
var inputURL;
var outputFile = "screenshot.png";

process.argv.slice(2).forEach((arg) => {
    if (arg === "-o" || arg === "--output") {
        flag = FlagType.OUTPUT;
        return;
    } else if (arg === "-h" || arg === "--help") {
        displayUsage(false);
        process.exit(0);
    }
    switch (flag) {
        case FlagType.OUTPUT:
            outputFile = arg;
            break;
        default:
            inputURL = arg;
            break;
    }
    flag = 0;
});

function displayUsage(error) {
    if (error) {
        console.error(USAGE_STR);
    } else {
        console.info(USAGE_STR);
    }
}

function hasHTTP(url) {
    return url.search(/https?:\/\//g) >= 0;
}

if (!inputURL) {
    displayUsage(true);
    process.exit(1);
}

if (!hasHTTP(inputURL)) {
    inputURL = "https://" + inputURL;
}

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    await page.setViewport({
        width: 1280,
        height: 720
    });
    await page.goto(inputURL, { waitUntil: "networkidle0", timeout: 240000 });
    await page.waitFor(5000);
    await page.screenshot({ path: outputFile, type: "png" });

    browser.close();
})();
