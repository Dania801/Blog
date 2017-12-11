$(document).ready(function(){
  $("#search-panel").hide();

  // Add smooth scrolling to all links in navbar + footer link
  $(".navbar a, footer a[href='#myPage'], footer a[href='#home'], nav a").on('click', function(event) {
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();
      // Store hash
      var hash = this.hash;
      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (900) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 900, function(){
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    }
  });

  $("#search-btn").on("click",function(){
    $("#search-panel").toggle(1000);
  });

  $(window).scroll(function() {
    $(".slideanim").each(function(){
      var pos = $(this).offset().top;

      var winTop = $(window).scrollTop();
        if (pos < winTop + 600) {
          $(this).addClass("slide");
        }
    });
  });
})

function showLogin(){
  document.getElementById('login').style.display='block'
}

function closeLogin(){
  document.getElementById('login').style.display='none';
}

function showPic(pic){
  document.getElementById('pic_container').src = pic;
  document.getElementById('picture').style.display='block';
}
