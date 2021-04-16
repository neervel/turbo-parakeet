$( document ).ready(function() {
  let modalMenu = false,
      modalSign = false;

  $(".header-menu").on('click', ()=>{
    if(!modalMenu){
      $(".modal-menu").animate({right: '0'});
      $(".header-menu-img").attr('src', 'img/close.svg')
      modalMenu = true;
    }else{
      $(".modal-menu").animate({right: '-100%'});
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
      modalSign = true;
    }
  })
  $(".modal-sign-close").on('click', ()=>{
    if (modalSign){
      $(".modal-sign").css('display', 'none');
      modalSign = false;
    }
  })

});