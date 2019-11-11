// ==UserScript==
// @name        Reddit - Force Old Reddit (Redirect)
// @namespace   https://github.com/RavenDT/bring-back-old-reddit
// @version     0.1
// @description A Tampermonkey script to automatically redirect to old.reddit.com
// @author      RavenDT
// @downloadURL https://raw.githubusercontent.com/RavenDT/bring-back-old-reddit/master/Reddit-Force-Old-Reddit-Redirect.user.js
// @include     /https?:\/\/www\.reddit\.com\/.*/
// @grant       none
// @run-at      document-start
// ==/UserScript==

(function() {
  "use strict";
  /* global $ */
  
  // Redirect to old.reddit.com
  var curUrl = document.location.href;
  var newUrl = curUrl.replace("www.", "old.");
  document.location.href = newUrl;
})();

