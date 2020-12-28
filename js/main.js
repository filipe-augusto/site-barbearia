$(function () {
  $('a[href*=#]:not([href=#])').click(function () {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});


function abreJanela(){
  window.open("painel.html","_blank");	
}

$("#btn-confirm").click(function(){
  var email = $("#inputemail").val();
  var senha =$("#inputsenha").val();
  if(email=="a" &&  senha=="a"){
    alert("Entrando no painel administrativo!")
   abreJanela();

  }else{
    alert("email: a \n senha: a")
  }


});