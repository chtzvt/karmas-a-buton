/* Karma's a Button version 1.2 [https://chrome.google.com/webstore/detail/karmas-a-button/fjcocdgkmiobfdjkcgicnkccjmbpajdd]
 * (c) 2014 Charlton Trezevant.
*/


document.addEventListener('DOMContentLoaded', function() {
    var upvoteall = document.getElementById('up');
        upvoteall.addEventListener('click', function() {
           chrome.tabs.executeScript(null, { file: "jquery.js" }, function() {
             chrome.tabs.executeScript(null, {code:"$('.up').not('.downmod').click();"});
             chrome.tabs.executeScript(null, {code:"$('.up').not('.pushed').click();"});
             //Reddit upvote: $('.up').not('.downmod').click();
             //Imgur upvote: $('.up').not('.pushed').click();
      });
   });
});


document.addEventListener('DOMContentLoaded', function() {
    var downvoteall = document.getElementById('down');
       downvoteall.addEventListener('click', function() {
           chrome.tabs.executeScript(null, { file: "jquery.js" }, function() {
             chrome.tabs.executeScript(null, {code:"$('.arrow').not('.upmod').click();"});
             chrome.tabs.executeScript(null, {code:"$('.down').not('.pushed').click();"});
             //Reddit downvote: $('.arrow').not('.upmod').click();
             //Imgur downvote: $('.down').not('.pushed').click();
      });
   });
});
