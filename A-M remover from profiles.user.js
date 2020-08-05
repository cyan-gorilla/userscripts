// ==UserScript==
// @name         US_AdultContentRemover
// @description  A tool to remove M and A submissions from NewGrounds profiles
// @author       cyangorilla
// @namespace    https://www.newgrounds.com/
// @include      https://*.newgrounds.com/*
// @version      0.2
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
	let initialRemoval = setTimeout(removeAdultContent,0)

	const userGallery = document.getElementsByClassName("userbody-guts")[0];
	const observerCfg = { childList: true, subtree: true }

	const cleanGallery = function(mutationsList, observer){
        if(adultContentIsFound){
            removeAdultContent();
        }
	};

	const observer = new MutationObserver(cleanGallery);
	observer.observe(userGallery, observerCfg);

	function adultContentIsFound(){
		return (getRatedArray("m").forEach(removeTile).length > 0) ||
		       (getRatedArray("a").forEach(removeTile).length > 0);
	}
    function getRatedArray(rating){
			return Array.prototype.slice.call(document.getElementsByClassName("rated-" + rating));
    }
    function removeTile(item, index){
			item.parentElement.parentElement.style.display = "none";
    }
	function removeAdultContent(){
		console.log("NG Userscript: Removing adult content.");
		getRatedArray("m").forEach(removeTile);
		getRatedArray("a").forEach(removeTile);
    }

})();