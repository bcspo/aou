$(function () {
    $('.slide_product').slick({
        slidesToShow: 3,
        arrows: false,
        dots: true,
    });

    $('#bgndVideo').YTPlayer({
        videoURL: 'https://www.youtube.com/watch?v=4cWyLPidWcA',
        containment: '.main_movie',
        showControls: false,
        playOnlyIfVisible: true,
    });


    let sw = true;

    $('.main_movie .switch').on('click', function () {
        $(this).toggleClass('on');
        if (sw) {
            $('#bgndVideo').YTPPause();
        } else {
            $('#bgndVideo').YTPPlay();
        }
        sw = !sw;
    });

    $('.to_top').on('click', function () {
        $('html,body').animate({ scrollTop: 0 }, 600)
    });

    $(window).on('scroll', function () {
        let sct = $(window).scrollTop();
        console.log(sct);
        if (sct > 800) {
            $('.to_top').addClass('on')
        } else {
            $('.to_top').removeClass('on')
        }
    });

    $(document).ready(function () {
        // 팝업창에 주어진 이름을 변수로 던져 저장된 쿠키가 있는지 확인 
        var popup1 = getCookie('popup1');

        // 변수가 없을경우 팝업 출력 
        if (!popup1) {
            popUpAction('popup1');
        }
    });

    // 쿠키 가져오기 
    function getCookie(name) {
        var nameOfCookie = name + "=";
        var x = 0;
        while (x <= document.cookie.length) {
            var y = (x + nameOfCookie.length);

            if (document.cookie.substring(x, y) == nameOfCookie) {
                if ((endOfCookie = document.cookie.indexOf(";", y)) == -1)
                    endOfCookie = document.cookie.length;
                return unescape(document.cookie.substring(y, endOfCookie));
            }

            x = document.cookie.indexOf(" ", x) + 1;

            if (x == 0) break;
        }

        return "";
    } // 24시간 기준 쿠키 설정하기 

    // expiredays 후의 클릭한 시간까지 쿠키 설정 
    function setCookie24(name, value, expiredays) {
        var todayDate = new Date();

        todayDate.setDate(todayDate.getDate() + expiredays);

        document.cookie = name + "=" + escape(value) + "; path=/; expires=" + todayDate.toGMTString() + ";";
    }

    // 00:00 시 기준 쿠키 설정하기 // expiredays 의 새벽 00:00:00 까지 쿠키 설정 
    function setCookie00(name, value, expiredays) {
        var todayDate = new Date(); todayDate = new Date(parseInt(todayDate.getTime() / 86400000) * 86400000 + 54000000);

        if (todayDate > new Date()) {
            expiredays = expiredays - 1;
        }

        todayDate.setDate(todayDate.getDate() + expiredays);

        document.cookie = name + "=" + escape(value) + "; path=/; expires=" + todayDate.toGMTString() + ";";
    }

    // 팝업출력
    function popUpAction(name) {
        // name으로 해당 팝업창 열기 
        $("div[name=" + name + "]").fadeIn();
    }

    // 닫기버튼 클릭 이벤트 
    $('.btn_close').click(function () {
        $(this).parent('.main_notice_pop').fadeOut();

        // 오늘하루 보지않기 체크 확인 
        if ($("input:checkbox[name=today_close1]").is(":checked") == true) {
            setCookie00('popup1', "done", 1);
        }

        // name으로 해당 팝업창 닫기 
        $(this).parent("div[name=" + name + "]").fadeOut();
    })

    $(document).ready(function () {
        // 팝업창에 주어진 이름을 변수로 던져 저장된 쿠키가 있는지 확인 
        var popup1_s = getCookie('popup1_s');

        // 변수가 없을경우 팝업 출력 
        if (!popup1_s) {
            popUpAction('popup1_s');
        }
    });

    // 쿠키 가져오기 
    function getCookie(name) {
        var nameOfCookie = name + "=";
        var x = 0;
        while (x <= document.cookie.length) {
            var y = (x + nameOfCookie.length);

            if (document.cookie.substring(x, y) == nameOfCookie) {
                if ((endOfCookie = document.cookie.indexOf(";", y)) == -1)
                    endOfCookie = document.cookie.length;
                return unescape(document.cookie.substring(y, endOfCookie));
            }

            x = document.cookie.indexOf(" ", x) + 1;

            if (x == 0) break;
        }

        return "";
    } // 24시간 기준 쿠키 설정하기 

    // expiredays 후의 클릭한 시간까지 쿠키 설정 
    function setCookie24(name, value, expiredays) {
        var todayDate = new Date();

        todayDate.setDate(todayDate.getDate() + expiredays);

        document.cookie = name + "=" + escape(value) + "; path=/; expires=" + todayDate.toGMTString() + ";";
    }

    // 00:00 시 기준 쿠키 설정하기 // expiredays 의 새벽 00:00:00 까지 쿠키 설정 
    function setCookie00(name, value, expiredays) {
        var todayDate = new Date(); todayDate = new Date(parseInt(todayDate.getTime() / 86400000) * 86400000 + 54000000);

        if (todayDate > new Date()) {
            expiredays = expiredays - 1;
        }

        todayDate.setDate(todayDate.getDate() + expiredays);

        document.cookie = name + "=" + escape(value) + "; path=/; expires=" + todayDate.toGMTString() + ";";
    }

    // 팝업출력
    function popUpAction(name) {
        // name으로 해당 팝업창 열기 
        $("div[name=" + name + "]").fadeIn();
    }

    // 닫기버튼 클릭 이벤트 
    $('.btn_close_s').click(function () {
        $(this).parent('.main_notice_pop_s').fadeOut();

        // 오늘하루 보지않기 체크 확인 
        if ($("input:checkbox[name=today_close1_s]").is(":checked") == true) {
            setCookie00('popup1_s', "done", 1);
        }

        // name으로 해당 팝업창 닫기 
        $(this).parent("div[name=" + name + "]").fadeOut();
    });


})
