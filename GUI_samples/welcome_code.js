$(document).ready(() => {
  $("#article").hide();
  $("#search-panel").hide();
  $("#first-article").hide();
  $("#first-article").show(1500);
  $("#second-article").hide();
  $("#second-article").show(1500);
  $("#third-article").hide();
  $("#third-article").show(1500);

  // Add smooth scrolling
  $(".navbar a, footer a[href='#myPage'], footer a[href='#home'], nav a, #add-btn, #footer, #article, #pic-stand, #add-pic").on("click", function (event) {
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();
      // Store hash
      let hash = this.hash;
      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (900) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 900, () => {
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    }
  });
  // close sidebar smoothly
  $("#sidebar-x").on("click", () => {
    $("#sidebar-x").hide(500);
    $("#mySidebar").slideUp(500);
    $("#myOverlay").hide();
  });
  // show sidebar
  $("#sidebar-btn").on("click", () => {
    document.getElementById("mySidebar").style.display = "block";
    $("#sidebar-x").show(500);
    document.getElementById("myOverlay").style.display = "block";
  });
  // show search panel
  $("#search-btn").on("click", () => {
    $("#search-panel").slideToggle(1000);
  });
  // animate elements when scrolling
  $(window).scroll(() =>  {
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
  $("#login").show() ;
}
function closeLogin(){
  $("#login").hide(500) ;
}
function showPic(pic){
  document.getElementById('pic_container').src = pic;
  $("#picture").show() ;
}
function showArticle(pic){
  document.getElementById('article-pic').src = pic;
  $("#article").show() ;
  $("#article-tag").show() ;
  $("#article-x").show();
}
function closeArticle(){
  $("#article-x").slideUp(500) ;
  $("#article-tag").slideUp(500) ;
  $("#article").slideUp(500) ;
}
