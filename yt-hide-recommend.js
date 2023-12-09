// ==UserScript==
// @name        Hide recommendations on Youtube
// @namespace   Violentmonkey Scripts
// @match       https://www.youtube.com/*
// @grant       none
// @version     1.0
// @author      Diego Sandoval
// @description Hides home page recommendations and sidebar recommendations on Youtube
// @require https://cdn.jsdelivr.net/npm/@violentmonkey/dom@2
// ==/UserScript==

const disconnect = VM.observe(document.body, () => {
  // Find the target node
  const node = document.querySelector('.ytd-two-column-browse-results-renderer');
  const node2 = document.querySelector('#secondary-inner');

  if (node2){
    node2.style.visibility="hidden";
  }

  if (node) {
    node.style.visibility="hidden";
  }

  if (node1 || node2 ) return true;

});

// You can also disconnect the observer explicitly when it's not used any more
//disconnect();

