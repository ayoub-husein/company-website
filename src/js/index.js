import '@laylazi/bootstrap-rtl/dist/css/bootstrap-rtl.min.css'
import '@laylazi/bootstrap-rtl/dist/js/bootstrap.min'
import 'jquery/dist/jquery.min'
import 'popper.js/dist/popper.min'
import '../sass/style.scss'
import '@fortawesome/fontawesome-free/js/all.min'


$(function() {
    $('.thambnail-2').hover(function(){
        $(this).find('.project-category').hide();
        $(this).find('.caption2').slideDown(250);
    },
    function(){
        $(this).find('.caption2').slideUp(250);
        $(this).find('.project-category').show();
    }
    );

    let modalId = $('#image-gallery');

    loadGallery(true, 'a.thumbnail');

    //This function disables buttons when needed
    function disableButtons(counter_max, counter_current) {
      $('#show-previous-image, #show-next-image')
        .show();
      if (counter_max === counter_current) {
        $('#show-next-image')
          .hide();
      } else if (counter_current === 1) {
        $('#show-previous-image')
          .hide();
      }
    }
    function loadGallery(setIDs, setClickAttr) {
      let current_image,
        selector,
        counter = 0;

      $('#show-next-image, #show-previous-image')
        .click(function () {
          if ($(this)
            .attr('id') === 'show-previous-image') {
            current_image--;
          } else {
            current_image++;
          }

          selector = $('[data-image-id="' + current_image + '"]');
          updateGallery(selector);
        });

      function updateGallery(selector) {
        let $sel = selector;
        current_image = $sel.data('image-id');
        $('#image-gallery-title')
          .text($sel.data('title'));
        $('#image-gallery-image')
          .attr('src', $sel.data('image'));
        disableButtons(counter, $sel.data('image-id'));
      }

      if (setIDs == true) {
        $('[data-image-id]')
          .each(function () {
            counter++;
            $(this)
              .attr('data-image-id', counter);
          });
      }
      $(setClickAttr)
        .on('click', function () {
          updateGallery($(this));
        });
    }
});

var date = new Date();
var year = date.getFullYear();
document.getElementById("date").innerHTML = year;