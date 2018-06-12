// ==UserScript==
// @name         fxstreet auto click
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://www.fxstreet.com/news/latest?q=&hPP=15&idx=FxsIndexPro&p=0
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    //document.querySelector(".fxs_bgHeader").remove();
    //document.querySelector("#fxs_home > div:nth-child(1)").remove();
    //document.querySelector("div[id^='brokersspreads_'] > section").remove();

    var timerVar = setInterval (function() {DoMeEverySecond (); }, 3000);

    function DoMeEverySecond ()
    {
        //--- Your code here.
        console.clear();
        console.log("Script is running...");
        var elementToBeClicked = document.querySelector("div[id^='fxs_search_alert_advancedsearchmanager_']");
        if (elementToBeClicked !== undefined)
        {
            elementToBeClicked.click();
        }
    }
    // Your code here...
})();