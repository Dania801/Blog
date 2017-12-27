let favouriteCount = 0 ;
let favourites = [] ;

$(document).ready(() => {

  $("#article").hide();
  $("#search-panel").hide();
  $("#first-article").hide();
  $("#first-article").show(1500);
  $("#second-article").hide();
  $("#second-article").show(1500);
  $("#third-article").hide();
  $("#third-article").show(1500);
  $("#menu-panel").hide();

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
  // show sidebar
  $("#menu-btn").on("click", () => {
    $("#menu-panel").show() ;
    document.getElementById('#menu-panel').style.visibility='visible';
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

function openLogout(){
  $("#logout").slideDown(500);
}
function closeLogout(){
  $("#logout").slideUp(500);
}

function openSetting(){
  $("#edit-info").hide();
  $("#setting").slideDown(500);
  $("#setting-inner").slideDown(500);
}
function editSetting(){
  $("#info").hide(500);
  $("#edit-icon").hide();
  $("#edit-info").show(500);
}
function backSetting(){
  $("#edit-info").hide(500);
  $("#edit-icon").show(500);
  $("#info").show(500);
}
function closeSetting(){
  $("#setting-inner").slideUp(500);
  $("#setting").slideUp(500);
}

function showAddEvent(){
  $("#new-event").slideDown(500) ;
  $("#new-event-inner").slideDown(500) ;
}
function closeAddEvent(){
  $("#new-event-inner").slideUp(250) ;
  $("#new-event").slideUp(500) ;
}

function showEvent(){
  $("#event").slideDown(500) ;
  $("#event-inner").slideDown(500);
  $("#event-title").show() ;
  $("#event-time").show() ;
  $("#event-detail").show() ;

  $("#edit-title").hide();
  $("#edit-date").hide();
  $("#edit-detail").hide();
}
function closeEvent(){
  $("#event-inner").slideUp(350);
  $("#event").slideUp(500) ;
}
function editEvent(){
  $("#event-title").hide();
  $("#edit-title").show(500);
  $("#event-time").hide();
  $("#edit-date").show(500);
  $("#event-detail").hide();
  $("#edit-detail").show(500);
}
function backEvent(){
  $("#edit-title").slideUp(500);
  $("#edit-date").slideUp(500);
  $("#edit-detail").slideUp(500);

  $("#event-title").show(500) ;
  $("#event-time").show(500) ;
  $("#event-detail").show(500) ;
}
function ensureDelete(){
  $("#delete-event").show();
}
function closeConfirm(){
  $("#delete-event").hide(500);
}

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



function addToFavourit(e){
  let currentPic = $(e.target.parentElement).parent().children(':first-child').children().css('background-image') ;
  let picState = favourites.includes(currentPic);
  alert(favouriteCount + "\n" + picState);
  if((favouriteCount < 3) && (!picState)){
    favouriteCount++ ;
    $(e.target).css("color", "#C0392B");
    let pic = $(e.target.parentElement).parent().children(':first-child').children().css('background-image') ;
    favourites.push(pic) ;
    let third = $("#image-slide3").attr('src');
    let second = $("#image-slide2").attr('src');
    let first = $("#image-slide").attr('src');

    $("#image-slide3").attr('src', second);
    $("#image-slide2").attr('src', first);
    $("#image-slide").attr('src', second);
  }else{
    if(picState){
      favourites = favourites.filter(function(pic) {
          return pic !== currentPic
      })
      favouriteCount-- ;
      $(e.target).css("color", "black");
    }else{
      showFavouriteError();
    }
  }
}

function showFavouriteError(){
  $("#favourite-error").slideDown(500);
}

function closeFavouriteError(){
  $("#favourite-error").slideUp(500);
}
