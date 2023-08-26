$(document).ready(function () {
  $(".home .open").click(function () {
    $(".navbar").fadeIn(1000);

    $(".home .open").css({
      left: "12%",
    })


  });




  $(".home .clothes").click(function () {
    $(".navbar").fadeOut(1000);
        $(".home .open").css({
          left: "0%",
        });

  });

  $(".singers h2").click(function () {
    $(".singers p").not($(this).next()).slideUp(500);
    $(this).next().slideToggle(500);
  });
});

let countDounDate = new Date("Aug 30, 2023 17:59:59").getTime();

let counter = setInterval(() => {
  let dateNow = new Date().getTime();
  let dateDiff = countDounDate - dateNow;
  let days = Math.floor(dateDiff / (1000 * 60 * 60 * 24));
  let hours = Math.floor((dateDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let menit = Math.floor((dateDiff % (1000 * 60 * 60)) / (1000 * 60));
  let second = Math.floor((dateDiff % (1000 * 60)) / 1000);

  $(".dayes").html(days);
  $(".hours").html(hours);
  $(".minit").html(menit);
  $(".seconds").html(second);

  if (dateDiff == 0) {
    clearInterval(counter);
  }
}, 1000);

$(document).ready(function () {
  const textInput = $("#textInput");
  const charCount = $("#charCount");

  textInput.on("input", function () {
    const inputText = textInput.val();
    const charLength = inputText.length;

    if (charLength > 100) {
      textInput.addClass("error");
      charCount.text("Character count exceeds the limit (100)");
    } else {
      textInput.removeClass("error");
      charCount.text(`Remaining characters: ${100 - charLength}`);
    }
  });
});
