// mobaile button
function openNav() {
  document.getElementById("myNav").style.height = "100%";
}

function closeNav() {
  document.getElementById("myNav").style.height = "0%";
}

// =====================================================================================

// ======= video play-1 =======

$("#play-video").on("click", function (e) {
  e.preventDefault();
  $("#video-overlay").addClass("open");
  $("#video-overlay").append(
    '<iframe width="" height="" src="https://www.youtube.com/embed/TxbE79-1OSI" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; " allowfullscreen></iframe>'
  );
});

$(".video-overlay, .video-overlay-close").on("click", function (e) {
  e.preventDefault();
  close_video();
});

$(document).keyup(function (e) {
  if (e.keyCode === 27) {
    close_video();
  }
});

function close_video() {
  $(".video-overlay.open").removeClass("open").find("iframe").remove();
}

// ======= video play-2 =======
$("#play-video-2").on("click", function f2(e2) {
  e2.preventDefault();
  $("#video-overlay-2").addClass("open-2");
  $("#video-overlay-2").append(
    '<iframe width="" height="" src="https://www.youtube.com/embed/TxbE79-1OSI" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; " allowfullscreen></iframe>'
  );
});

$(".video-overlay-2, .video-overlay-close-2").on("click", function f2(e2) {
  e2.preventDefault();
  close_video2();
});

$(document).keyup(function f2(e2) {
  if (e2.keyCode === 27) {
    close_video2();
  }
});

function close_video2() {
  $(".video-overlay-2.open-2").removeClass("open-2").find("iframe").remove();
}

// ======= video play-3 =======
$("#play-video-3").on("click", function (e3) {
  e3.preventDefault();
  $("#video-overlay-3").addClass("open-3");
  $("#video-overlay-3").append(
    '<iframe width="0" height="0" src="https://www.youtube.com/embed/TxbE79-1OSI" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; " allowfullscreen></iframe>'
  );
});

$(".video-overlay-3, .video-overlay-close-3").on("click", function (e3) {
  e3.preventDefault();
  close_video3();
});

$(document).keyup(function (e3) {
  if (e3.keyCode === 27) {
    close_video3();
  }
});

function close_video3() {
  $(".video-overlay-3.open-3").removeClass("open-3").find("iframe").remove();
}
