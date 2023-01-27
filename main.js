var scrollButton = document.getElementById("scroll-about");
scrollButton.addEventListener("click", function() {
var element = document.getElementById("pic");
element.scrollIntoView({behavior: "smooth"});
});

var scrollButton = document.getElementById("scroll-skill");      
scrollButton.addEventListener("click", function() {
var element = document.getElementById("skill");
element.scrollIntoView({behavior: "smooth"});
}); 

var scrollButton = document.getElementById("scroll-blogs");
scrollButton.addEventListener("click", function() {
var element = document.getElementById("blog");
element.scrollIntoView({behavior: "smooth"});
});

