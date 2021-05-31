function scrollEvent() {
  var windowH = window.innerHeight;
  document.documentElement.scrollTop =
    document.documentElement.scrollTop + windowH;
}

var sections = [];
var id = [];
sections = $("section");
for (let i = 0; i < sections.length; i++) {
  id[i] = "#" + sections[i].id;
}

var links = [];
links = $("nav > a");

console.log(sections, id.length);

$(document).ready(function () {
  $(".sidebar-link").click(function () {
    $(".sidebar-link").removeClass("active");
    $(this).addClass("active");
  });
});

let index = 0;
$(window).bind("mousewheel DOMMouseScroll", function (event) {
  var windowH = window.innerHeight;
  if (event.originalEvent.deltaY < 0) {
    document.documentElement.scrollTop =
      document.documentElement.scrollTop - windowH;
  } else {
    document.documentElement.scrollTop =
      document.documentElement.scrollTop + windowH;
  }
  rightScroll();
});

function rightScroll() {
  for (let i = 0; i < id.length; i++) {
    var windowH = window.innerHeight;
    var documentE = document.documentElement.scrollTop;
    var reel = documentE + windowH;
    var scrollTops = $(id[i]).offset();
    if (reel > scrollTops.top + 200) {
      $(".sidebar-link").removeClass("active");
      $(links[i]).addClass("active");
    }
  }
}

function tops() {
  if (index >= 0 && index <= links.length) {
    for (i = 0; i <= links.length; i++) {
      $(links[i]).removeClass("active");
      $(links[index]).addClass("active");
    }
    index--;
  }
}

function bottoms() {
  if (index >= 0 && index <= links.length) {
    for (i = 0; i <= links.length; i++) {
      $(links[i]).removeClass("active");
      $(links[index]).addClass("active");
    }
    index++;
  }
}
