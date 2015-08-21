$(document).ready(function() {
  //鼠标经过自动展开下拉菜单
  $('ul.dropdown-menu').hide();
  $('li.dropdown').hover(
    function() {
      $('ul.dropdown-menu').show()
    },
    function() {
      $('ul.dropdown-menu').hide();
    })

  $('li.menu').hover(
    function() {
      $(this).css({
        'color': 'white',
        'background-color': 'black'
      })
    },
    function() {
      $(this).css({
        'color': 'black',
        'background-color': 'white'
      })
    })

  //鼠标经过改编数值透明度
  $('div.span1').hover(
    function() {
      $(this).css({
        'opacity': '1'
      })
    },
    function() {
      $(this).css({
        'opacity': '0.7'
      })
    })

  //鼠标经过回到顶部小图标时改变图片样式
  $('div.back_top_img').hover(
    function() {
      $(this).css({
        'background': 'url(../images/back_top_onfocus.png)'
      })
    },
    function() {
      $(this).css({
        'background': 'url(../images/back_top.png)'
      })
    })

  //鼠标点击显示城市切换框
  /*$('button.shift_city').hover(
    function(){
      $('div.cities').show();
    },function(){
      $('div.cities').hide();
    })*/
  $('button.shift_city').click(
    function() {
      $('div.cities').animate({scrollTop:0},10);
      $('div.cities').show();
    })
  $('button.shift_city').hover(
    function() {

    },
    function() {
      $('div.cities').hide();
    })

  $('div.cities').hover(
    function() {
      $('div.cities').show();
    },
    function() {
      $('div.cities').hide();
    })

})