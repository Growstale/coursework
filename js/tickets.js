$(document).ready(function() {
    $('.day1').click(function(){
        $('.day1').addClass('active');
        $('.day2').removeClass('active');
        if ( $('.time1').hasClass('active')) {
            $('#price1').fadeOut(500, function() {
                $(this).html('25').fadeIn(500);
            });
            $('#price2').fadeOut(500, function() {
                $(this).html('35').fadeIn(500);
            });
            $('#price3').fadeOut(500, function() {
                $(this).html('15').fadeIn(500);
            });
        }
        else {
            $('#price1').fadeOut(500, function() {
                $(this).html('35').fadeIn(500);
            });
            $('#price2').fadeOut(500, function() {
                $(this).html('45').fadeIn(500);
            });
            $('#price3').fadeOut(500, function() {
                $(this).html('25').fadeIn(500);
            });
        }
    })
    $('.time1').click(function(){
        $('.time1').addClass('active');
        $('.time2').removeClass('active');
        if ( $('.day1').hasClass('active')) {
            $('#price1').fadeOut(500, function() {
                $(this).html('25').fadeIn(500);
            });
            $('#price2').fadeOut(500, function() {
                $(this).html('35').fadeIn(500);
            });
            $('#price3').fadeOut(500, function() {
                $(this).html('15').fadeIn(500);
            });
        }
        else {
            $('#price1').fadeOut(500, function() {
                $(this).html('30').fadeIn(500);
            });
            $('#price2').fadeOut(500, function() {
                $(this).html('40').fadeIn(500);
            });
            $('#price3').fadeOut(500, function() {
                $(this).html('20').fadeIn(500);
            });
        }
    })
    $('.day2').click(function(){
        $('.day2').addClass('active');
        $('.day1').removeClass('active');
        if ( $('.time1').hasClass('active')) {
            $('#price1').fadeOut(500, function() {
                $(this).html('30').fadeIn(500);
            });
            $('#price2').fadeOut(500, function() {
                $(this).html('40').fadeIn(500);
            });
            $('#price3').fadeOut(500, function() {
                $(this).html('20').fadeIn(500);
            });
            }
            else {
                $('#price1').fadeOut(500, function() {
                    $(this).html('40').fadeIn(500);
                });
                $('#price2').fadeOut(500, function() {
                    $(this).html('50').fadeIn(500);
                });
                $('#price3').fadeOut(500, function() {
                    $(this).html('30').fadeIn(500);
                });
            }
    })
    $('.time2').click(function(){
        $('.time2').addClass('active');
        $('.time1').removeClass('active');
        if ( $('.day1').hasClass('active')) {
            $('#price1').fadeOut(500, function() {
                $(this).html('35').fadeIn(500);
            });
            $('#price2').fadeOut(500, function() {
                $(this).html('45').fadeIn(500);
            });
            $('#price3').fadeOut(500, function() {
                $(this).html('25').fadeIn(500);
            });
        }
        else {
            $('#price1').fadeOut(500, function() {
                $(this).html('40').fadeIn(500);
            });
            $('#price2').fadeOut(500, function() {
                $(this).html('50').fadeIn(500);
            });
            $('#price3').fadeOut(500, function() {
                $(this).html('30').fadeIn(500);
            });
        }
    })
})