const cards = document.querySelectorAll('.card__info');
cards.forEach(function (card) {
      card.addEventListener('click', function () {
          card.classList.toggle("show");
      });
 });


//  a savoir

$(window).load(function() {
    $('.post-module').hover(function() {
      $(this).find('.description').stop().animate({
        height: "toggle",
        opacity: "toggle"
      }, 300);
    });
  });


  function onClick(element) {
    document.getElementById("img01").src = element.src;
    document.getElementById("modal01").style.display = "block";
  }



$(document).ready(function () {
  var zindex = 10;

  $("div.card").click(function (e) {
    e.preventDefault();

    var isShowing = false;

    if ($(this).hasClass("show")) {
      isShowing = true;
    }

    if ($("div.cards").hasClass("showing")) {
      // a card is already in view
      $("div.card.show").
      removeClass("show");

      if (isShowing) {
        // this card was showing - reset the grid
        $("div.cards").
        removeClass("showing");
      } else {
        // this card isn't showing - get in with it
        $(this).
        css({ zIndex: zindex }).
        addClass("show");

      }

      zindex++;

    } else {
      // no cards in view
      $("div.cards").
      addClass("showing");
      $(this).
      css({ zIndex: zindex }).
      addClass("show");

      zindex++;
    }

  });
});




  
  