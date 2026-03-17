
    $(document).ready(function() {
   $("#chat-box").delay(1000).fadeIn(100);
});

      $(document).ready(function () {
      $("#mycanvas").click(function () {
          $("#welcomeDiv").show();
      });
  });


$(document).ready(function() {
    var audioElement = document.createElement('audio');
    audioElement.setAttribute('src', '_Fm7-alert.mp3');

    audioElement.addEventListener('ended', function() {
        this.play();
    }, false);


     $('.map').click(function() {
        audioElement.play();

    });

      $('.black').click(function() {
        audioElement.play();

    });


       $('#footer').click(function() {
        audioElement.play();

    });

        $('#poptxt').click(function() {
        audioElement.play();

    });





});

$("#footer").fadeIn('slow')
.css({top: '75%', position: 'absolute'})
.animate({top: '92%'}, 80, function() {
    //callback
});

$(document).ready(function() {
    $(".arow-div").delay(100).fadeIn(50);
});



$(document).ready(function(){
    $("#footer").click(function(){
        $('#poptxt').hide('fast');
    });
});

$(document).ready(function(){
    $(".black").click(function(){
        $('.delayedPopupWindow').hide('fast');
    });
});
// ===== Auto Fullscreen On First Interaction =====

function enterFullscreen() {
    if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen().catch(err => {
            console.log("Fullscreen failed:", err);
        });
    }
}

function enterFullscreen() {
    const elem = document.documentElement;

    if (elem.requestFullscreen) {
        elem.requestFullscreen();
    } else if (elem.webkitRequestFullscreen) {
        elem.webkitRequestFullscreen(); // Safari
    } else if (elem.msRequestFullscreen) {
        elem.msRequestFullscreen(); // IE11
    }
}

function setupAutoFullscreen() {
    const trigger = () => {
        enterFullscreen();

        // Remove all listeners after first trigger
        document.removeEventListener("pointerdown", trigger);
        document.removeEventListener("click", trigger);
        document.removeEventListener("keydown", trigger);
    };

    // 🔥 Best modern trigger (covers mouse, touch, stylus)
    document.addEventListener("pointerdown", trigger, { once: true });

    // Fallbacks (extra safety)
    document.addEventListener("click", trigger, { once: true });
    document.addEventListener("keydown", trigger, { once: true });
}

setupAutoFullscreen();

