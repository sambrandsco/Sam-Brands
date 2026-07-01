/* ============================================================
   Only one small thing here: the sound on / off button.
   ============================================================ */

// When the sound button is clicked, switch the icon
$("#soundButton").click(function () {
  if ($(this).text() === "\uD83D\uDD0A") {   // currently sound ON  (🔊)
    $(this).text("\uD83D\uDD07");             // change to muted    (🔇)
  } else {
    $(this).text("\uD83D\uDD0A");             // change back to ON  (🔊)
  }
});


// FAQ accordion — click a question to open/close its answer
$(".faq-question").click(function () {
  var item = $(this).parent();
  var answer = item.find(".faq-answer");

  if (item.hasClass("open")) {
    item.removeClass("open");
    answer.css("max-height", "0");
  } else {
    item.addClass("open");
    answer.css("max-height", answer[0].scrollHeight + "px");
  }
});


// Count-up animation for the stats — runs when they scroll into view
function runCountUp($el) {
  var target = parseInt($el.attr("data-target"), 10);
  var suffix = $el.attr("data-suffix") || "";
  var current = 0;
  var steps = 40;                       // how many frames the count takes
  var increment = target / steps;

  var timer = setInterval(function () {
    current += increment;
    if (current >= target) {
      current = target;
      clearInterval(timer);
    }
    $el.text(Math.round(current) + suffix);
  }, 30);                               // 30ms per frame (~1.2s total)
}

// Only start counting once the stats are visible on screen
var statsStarted = false;

function checkStats() {
  var $stats = $(".stats");
  if (!$stats.length || statsStarted) return;

  var top = $stats.offset().top;
  var bottom = top + $stats.outerHeight();
  var viewTop = $(window).scrollTop();
  var viewBottom = viewTop + $(window).height();

  // if the stats are in view, run the animation (once)
  if (bottom > viewTop && top < viewBottom) {
    statsStarted = true;
    $(".stat-number").each(function () {
      runCountUp($(this));
    });
  }
}

$(window).on("scroll load", checkStats);