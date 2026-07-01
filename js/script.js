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
