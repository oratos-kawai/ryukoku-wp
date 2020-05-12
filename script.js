$ (function () {



$(".content").hover(
  function() {
  $(this).find(".content-img").css("color","blue")
},
function() {
  $(this).find(".content-img").css("color","white")
})

$(".info-list-univ").hover (
  function() {
    $(".info-name-univ").css("color","white")
  },
  function() {
    $(".info-name-univ").css("color","black")
  });





$(".info-list-contact").hover (
  function() {
    $(".info-name-contact").css("color","white")
  },
  function() {
    $(".info-name-contact").css("color", "black")
  });



});
