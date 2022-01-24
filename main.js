/*Частина header*/
$(document).ready(function(){

  $('.fa-bars').click(function(){
    $(this).toggleClass('fa-times');
    $('nav').toggleClass('nav-toggle');
  });

  $(window).on('scroll load',function(){
    $('.fa-bars').removeClass('fa-times');
    $('nav').removeClass('nav-toggle');
  });
  
/*Анімація проект(робочі години,нагороди,клієнти,проекти)*/
  $('.count').each(function() {
    var $this = $(this),
        countTo = $this.attr('data-count');
    $({ countNum: $this.text()}).animate({
      countNum: countTo
    },
    {
      duration: 5000,
      step: function() {
        $this.text(Math.floor(this.countNum));
      },
      complete: function() {
        $this.text(this.countNum + '+');
      }
    });
  });
  
/*Натискання на картинок у Наші проекти*/
 $('.project').magnificPopup({
    delegate:'a',
    type:'image',
    gallery:{
      enabled:true
    }
  });

});

/*Відкриття віконечка у "Дізнатися більше" Про нас та у Наші проекти*/
function togglePopup(){
	document.getElementById("popup-1").classList.toggle("active");
}

function togglePopup2(){
	document.getElementById("popup-2").classList.toggle("active");
}
/*Відгуки*/
var swiper = new Swiper(".review-slider", {
    spaceBetween: 20,
    loop:true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    breakpoints: {
        640: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
    },
});

/*Контакти*/

function validate(){
  var name = document.getElementById("name").value;
  var phone = document.getElementById("phone").value;
  var email = document.getElementById("email").value;
  var message = document.getElementById("message").value;
  var error_message = document.getElementById("error_message");
  
  error_message.style.padding = "10px";
  
  var text;
  if(name.length < 5){
    text = "Будь ласка, введіть дійсне ім'я";
    error_message.innerHTML = text;
    return false;
  }
  if(isNaN(phone) || phone.length != 10){
    text = "Будь ласка, введіть дійсний номер телефону";
    error_message.innerHTML = text;
    return false;
  }
  if(email.indexOf("@") == -1 || email.length < 6){
    text = "Будь ласка, введіть дійсну адресу електронної пошти";
    error_message.innerHTML = text;
    return false;
  }
  if(message.length >= 50){
    text = "Будь ласка, введіть мінімум 50 символів у 'Повідомлення'";
    error_message.innerHTML = text;
    return false;
  }
  alert("Форма успішно заповнена!");
  return true;
}

/*Магазин*/
const slider1 = document.querySelector("#glide_1");
if (slider1) {
  new Glide(slider1, {
    type: "carousel",
    startAt: 0,
    autoplay: 3000,
    gap: 0,
    hoverpause: true,
    perView: 1,
    animationDuration: 800,
    animationTimingFunc: "linear",
  }).mount();
}
