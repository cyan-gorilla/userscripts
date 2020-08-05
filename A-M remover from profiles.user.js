// ==UserScript==
// @name         US_AdultContentRemover
// @description  A tool to remove M and A submissions from NewGrounds profiles
// @author       cyangorilla
// @namespace    https://www.newgrounds.com/
// @include      https://*.newgrounds.com/*
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://www.tampermonkey.net/index.php?version=4.10&ext=dhdg&updated=true
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    window.addEventListener("load", removeAdultContent);
    window.addEventListener("scroll", removeAdultContent);
    function removeAdultContent(){
        console.log("removing dirty stuff");
        getRatedArray("m").forEach(removeTile);
        getRatedArray("a").forEach(removeTile);
        function getRatedArray(rating){
            return Array.prototype.slice.call(document.getElementsByClassName("rated-" + rating));
        }
        function removeTile(item, index){
            item.parentElement.parentElement.style.display = "none";
        }
    }
})();