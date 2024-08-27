$(document).ready(function() {
    // Toggle menu on click
    $('#menu').click(function() {
        $(this).toggleClass('fa-times');
        $('.navbar').toggleClass('nav-toggle');
    });
 });
 
 // Disable developer mode
 document.onkeydown = function(e) {
    // Disable F12 (Developer Tools)
    if (e.keyCode === 123) {
        return false;
    }
 
    // Disable Ctrl + Shift + I (Inspect Element)
    if (e.ctrlKey && e.shiftKey && e.keyCode === 'I'.charCodeAt(0)) {
        return false;
    }
 
    // Disable Ctrl + Shift + C (Inspect Element)
    if (e.ctrlKey && e.shiftKey && e.keyCode === 'C'.charCodeAt(0)) {
        return false;
    }
 
    // Disable Ctrl + Shift + J (Console)
    if (e.ctrlKey && e.shiftKey && e.keyCode === 'J'.charCodeAt(0)) {
        return false;
    }
 
    // Disable Ctrl + U (View Source)
    if (e.ctrlKey && e.keyCode === 'U'.charCodeAt(0)) {
        return false;
    }
 }
 