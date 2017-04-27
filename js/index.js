(function () {
    (function () {
        var icur = 0;
        var now = 0;
        var otimer = null;
        $('.nav_c2 .slider_item').eq(0).css({
            'opacity':1,
            'zIndex':1
        });
        var timer = setInterval(function () {
            $('.nav_c2 .slider_next').click();
        },3000);

        //自动
        $('.nav_c2 .slider').mouseover(function () {
            $('.nav_c2 .slider_next').show();
            $('.nav_c2 .slider_prev').show();
            clearInterval(timer);
        }).mouseout(function () {
            $('.nav_c2 .slider_next').hide();
            $('.nav_c2 .slider_prev').hide();
            timer = setInterval(function () {
                $('.nav_c2 .slider_next').click();
            },3000);
        });
        //手动
        $('.nav_c2 .slider_prev').click(function () {
            now = icur -1;
            if(now<0){
                now = 7;
            }
            clearInterval(otimer);
            fadeIn(now);
        });
        $('.nav_c2 .slider_next').click(function () {
            now = icur + 1;
            now %= 8;
            clearInterval(otimer);
            fadeIn(now);
        });
        $('.nav_c2 .slider_indicator .slider_indicator_btn').mouseover(function () {
            clearInterval(otimer);
            fadeIn($(this).index());
        });
        function fadeIn(inow) {
            if(icur == inow ){
                return;
            }
            otimer = setTimeout(function () {
                $('.nav_c2 .slider_item').eq(icur).animate({
                    'opacity':0,
                    'zIndex':0
                },400,'swing');
                $('.nav_c2 .slider_indicator .slider_indicator_btn').eq(icur).removeClass('slider-selected');
                icur = inow;
                $('.nav_c2 .slider_item').eq(icur).animate({
                    'opacity':1,
                    'zIndex':1
                },400,'swing');
                $('.nav_c2 .slider_indicator .slider_indicator_btn').eq(icur).addClass('slider-selected')
            },300)


        }
    })();

    function getTimes() {
        var endTime=new Date("2017/5/13 11:00:00");
        var nowTime=new Date();
        var getT=endTime.getTime()-nowTime.getTime();
        if (getT > 0) {
            var year=Math.floor(getT/(1000*60*60*24*365));
            var yushu=getT%(1000*60*60*24*365);
            var day=Math.floor(yushu/(1000*60*60*24));
            yushu=getT%(1000*60*60*24);
            var hour=Math.floor(yushu/(1000*60*60));
            yushu=yushu%(1000*60*60);
            var mi=Math.floor(yushu/(1000*60));
            yushu=yushu%(1000*60);
            var s=Math.floor(yushu/1000);
        }
        if (mi <= 9) mi = '0' + mi;
        if (s <= 9) s = '0' + s;
        $(".cd_hour").html(hour)
        $(".cd_minute").html(mi)
        $(".cd_second").html(s)
    }
    getTimes();
    window.setInterval(getTimes,1000);


})();