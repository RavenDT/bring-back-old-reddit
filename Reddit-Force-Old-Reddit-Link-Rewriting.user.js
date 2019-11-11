// ==UserScript==
// @name        Reddit - Force Old Reddit (Link Rewriting)
// @namespace   https://github.com/RavenDT/bring-back-old-reddit
// @version     0.1
// @description A Tampermonkey script to rewrite links so they direct to old.reddit.com
// @author      RavenDT
// @downloadURL https://raw.githubusercontent.com/RavenDT/bring-back-old-reddit/master/Reddit-Force-Old-Reddit-Link-Rewriting.user.js
// @require     https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js
// @include     /https?:\/\/(?:www|old)\.reddit\.com\/.*/
// @grant       none
// @run-at      document-end
// ==/UserScript==

(function() {
  "use strict";
  /* global $ */

  // Rewrite all links
  $("[href*='www.reddit.']").each(function() {
    $(this).attr("href", $(this).attr("href").replace("www.","old."));
  });
})();

