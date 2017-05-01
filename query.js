$(document).ready(function() {

// ---------DOGGY-----------------
$(".doggy").hover(function () {
  $(".doggy").slideUp(1000)
});

$(".doggy").hover(function () {
  $(".doggy").slideDown(3000)
});


// ---------DANIELA-----------------
var reverse = function () {
    $(".block11").animate({
      height: "100%"
    }, 1000, getBig
  )};
  var getBig = function () {
    $(".block11").animate({
      height: "0%"
    },1000)
  };
setInterval(reverse, 1000)

// ----------binarycode--------------
$(".binarycode").hover(function () {
  $(".binarycode").fadeToggle(5000);
});


// ----------SKATES--------------

  var skatesSlide = function () {
      $(".skates").slideToggle(
      {
        complete: function (){
            $(".skates").slideToggle()
        }
      }
    )};

  setInterval(skatesSlide, 1000)

  // ----------MY FACE--------------
  var reverse1 = function () {
      $(".block22").animate({
        height: "0%"
      }, 1000, getBig1
    )};
    var getBig1 = function () {
      $(".block22").animate({
        height: "100%"
      },1000)
    };
  setInterval(reverse1, 1000)

  // ----------Facing Right--------------

var faceRight = function () {

    $(".block33").fadeToggle(
      {
        complete: function (){
            $(".block33").fadeToggle(3000)
        }
      }
      )};

setInterval(faceRight, 2000)


});
