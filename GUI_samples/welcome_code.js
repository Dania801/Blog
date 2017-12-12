$(document).ready(function(){
  $("#search-panel").hide();

  // Add smooth scrolling
  $(".navbar a, footer a[href='#myPage'], footer a[href='#home'], nav a, #add-btn, #footer").on('click', function(event) {
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
  // close sidebar smoothly
  $("#sidebar-x").on("click", function(){
    $("#sidebar-x").hide(500);
    $("#mySidebar").slideUp(500);
    $("#myOverlay").hide();
  });
  // show sidebar
  $("#sidebar-btn").on("click", function(){
    document.getElementById("mySidebar").style.display = "block";
    $("#sidebar-x").show(500);
    document.getElementById("myOverlay").style.display = "block";
  });
  // show search panel
  $("#search-btn").on("click",function(){
    $("#search-panel").slideToggle(1000);
  });
  // animate elements when scrolling
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
