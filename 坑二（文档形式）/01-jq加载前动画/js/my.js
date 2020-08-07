/**
 * Created by Administrator on 2018/5/31.
 */
$(function() {
    var a = $(window).height();
    console.log(a)
    $('.top').css('height', a + 'px');
    var url = window.location.href;
    $.ajax({
        type: "get",
        url: url,

        beforeSend: function(XMLHttpRequest) { //加载前
            console.log(a);
            // $('.top').css('display','block');
            //ShowLoading();

        },

        success: function(data, textStatus) { //加载完成后--请求成功
            $('.top').hide();
            //do something

        },

        complete: function(XMLHttpRequest, textStatus) { //ajax全部加载完成后的回调函数

            //HideLoading();

        },

        error: function() { //加载错误时--请求失败

            //请求出错处理

        }

    });








});