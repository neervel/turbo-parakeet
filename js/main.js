$( document ).ready(function() {
  let modalMenu = false,
      modalSign = false;

  $(".header-menu").on('click', ()=>{
    if(!modalMenu){
      $(".modal-menu").css('display', 'block');
      $(".modal-menu").animate({right: '0'});
      $(".header-menu-img").attr('src', 'img/close.svg')
      modalMenu = true;
    }else{
      $(".modal-menu").animate({right: '-100%'});
      $(".modal-menu").css('display', 'none');
      $(".header-menu-img").attr('src', 'img/menu.svg')
      modalMenu = false;
    }
  })


  $('ul.modal-sign-nav').on('click', 'li:not(.active)', function() {
    $(this)
      .addClass('active').siblings().removeClass('active')
      .closest('div.modal-sign-block').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
  });


  $(".hero-btn__signup").on('click', ()=>{
    if(!modalSign){
      $(".modal-sign").css('display', 'flex');
      $(".modal-login").removeClass('active');
      $(".modal-sign-log").removeClass('active');
      $(".modal-signUp").addClass('active')
      $(".modal-sign-up").addClass('active')
      $("body").css('overflow', 'hidden');
      modalSign = true;
    }
  })
  $(".hero-btn__login").on('click', ()=>{
    if(!modalSign){
      $(".modal-sign").css('display', 'flex');
      $(".modal-signUp").removeClass('active')
      $(".modal-sign-up").removeClass('active')
      $(".modal-login").addClass('active');
      $(".modal-sign-log").addClass('active');
      $("body").css('overflow', 'hidden');
      modalSign = true;
    }
  })
  $(".modal-sign-close").on('click', ()=>{
    if (modalSign){
      $(".modal-sign").css('display', 'none');
      modalSign = false;
      $("body").css('overflow', 'visible');
    }
  })

  $(".modal-sign-up-form").validate({
    rules: {
        cfmPassword: { 
          equalTo: "#signup-pass",
          minlength: 6,
          maxlength: 10
      }
    }

});

});