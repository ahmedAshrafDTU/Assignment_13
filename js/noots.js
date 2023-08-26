









//? whay bootstrap no running with jquery

//? jquery is js libriray
// $(document).ready(function () {
//     $("button.one").click(function () {
//       $("h2.one").hide(1000);
//     });

//     $("button.two").click(function () {
//       $("h2.two").show(1000);
//     });

//     $("button.three").click(function () {
//       $("h2.three").toggle(1000);
//     });

// });
// $(document).ready(function () {
//     $("button.one").click(function () {
//       $("h2.one").fadeOut(1000);
//     });

//     $("button.two").click(function () {
//       $("h2.two").fadeIn(1000);
//     });

//     $("button.three").click(function () {
//       $("h2.three").fadeToggle(1000);
//     });

// });
$(document).ready(function () {
    // $("button.one").click(function () {
    //   $("h2.one").slideUp(1000);
    // });

    // $("button.two").click(function () {
    //   $("h2.two").slideDown(1000);
    // });

    // $("button.three").click(function () {
    //   $("h2.three").slideToggle(1000);
    // });

    $("button.animate").click(function () {
        $("h2.animate").animate({
            top: "200px",
            width: "100px",
        })
    })


})