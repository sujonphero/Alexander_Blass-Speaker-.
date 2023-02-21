(function ($) {
  $.fn.CountUpCircle = function (options) {
    var self = this;

    /**
     * DEFAULT OPTIONS
     *
     * Description
     *
     * @param
     **/

    var settings = $.extend(
      {
        duration: 5000, //ms
        opacity_anim: false,
        step_divider: 1,
      },
      options
    );

    var toCount = parseInt(this.html());

    var i = 0;
    var step = settings.duration / (toCount / settings.step_divider);
    var procent_step = 1 / (toCount / settings.step_divider);
    var displayNumber = function () {
      i = i + settings.step_divider;
      self.html(i);

      if (i < toCount - settings.step_divider) {
        setTimeout(displayNumber, step);
      } else {
        setTimeout(set_endpoint, step);
      }
    };

    var set_endpoint = function () {
      self.html(toCount);
    };

    displayNumber();
  };

  var a = 0;
  $(window).scroll(function () {
    var oTop = $("#counter-box").offset().top - window.innerHeight;
    if (a == 0 && $(window).scrollTop() > oTop) {
      $(".counter").each(function () {
        var $this = $(this),
          countTo = $this.attr("data-number");
        $({
          countNum: $this.text(),
        }).animate(
          {
            countNum: countTo,
          },

          {
            duration: 3000,
            easing: "swing",
            step: function () {
              //$this.text(Math.ceil(this.countNum));
              $this.text(Math.ceil(this.countNum).toLocaleString("en"));
            },
            complete: function () {
              $this.text(Math.ceil(this.countNum).toLocaleString("en"));
              //alert('finished');
            },
          }
        );
      });
      a = 1;
    }
  });
})(jQuery);
