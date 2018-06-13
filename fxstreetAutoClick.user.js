// ==UserScript==
// @name         fxstreet auto click
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://www.fxstreet.com/news/latest?q=&hPP=15&idx=FxsIndexPro&p=0
// @grant        none
// @run-at       document-idle
// ==/UserScript==

(function () {
    'use strict';

    // Your code here...
    console.log("Script is attached.");
    // Select the node that will be observed for mutations
    var targetNode = document.querySelector("body");
    var nodeToObserve;

    // Options for the observer (which mutations to observe)
    var config = { attributes: true, childList: true, subtree: true };

    // Callback function to execute when mutations are observed
    var callback = function (mutationsList) {
        for (var mutation of mutationsList) {
            if (mutation.type == 'childList') {
                nodeToObserve = document.querySelector("div[id^='fxs_search_alert_advancedsearchmanager_']");
                if (nodeToObserve) {
                    console.log('Observe the node by selector "div[id^=\'fxs_search_alert_advancedsearchmanager_\']"');
                    observeNode(nodeToObserve);
                    observer.disconnect();
                }
            }
        }
    };

    var callback2 = function (mutationsList) {
        for (var mutation of mutationsList) {
            if (mutation.type == 'attributes') {
                if (mutation.attributeName === 'class') {
                    console.log('The ' + mutation.attributeName + ' attribute was modified.');
                    if (nodeToObserve.getAttribute('class').indexOf('fxs_hideElements') === -1) {
                        nodeToObserve.click();
                    }

                    //document.querySelector(".fxs_bgHeader").style.display = "none";
                    //document.querySelector("#fxs_home > div:nth-child(1)").style.display = "none";
                    //document.querySelector("div[id^='brokersspreads_'] > section").style.display = "none";
                }
            }
        }
    };

    // Create an observer instance linked to the callback function
    var observer = new MutationObserver(callback);

    // Start observing the target node for configured mutations
    observer.observe(targetNode, config);

    // Later, you can stop observing
    //observer.disconnect();

    var observer2;
    function observeNode(nodeToObserve) {
        if (!observer2) {
            console.log('Create the observer2');
            observer2 = new MutationObserver(callback2);
            observer2.observe(nodeToObserve, config);
        }
    }
})();