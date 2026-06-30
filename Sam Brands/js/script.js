/* ============================================================
   StoryOS script
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
