let counter = 0;
let sum = 0;
$('.ticketsbutton').css('display', 'none');

$('.clickcircle').click(function(){
    if ( $(this).attr('fill') != '#B4B8B1' ) {
        counter++;
        let row = $(this).attr('data-row');
        let column =  $(this).attr('data-column');
        let price = $(this).attr('data-date');
        let num = parseInt(price, 10);
        sum += num;
        let calssname = row+'_'+column;
        $('#basketpart').append('<div class="' + calssname + '"></div>');
        $('.' + calssname).html('<div class="nameofspec">' + localStorage.getItem('name') + '</div><div>МЕСТО ' + row + ', РЯД ' + column + '</div><div>' + price + '</div><svg class="trash-button" width="6%" height="6%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M19 5L4.99998 19M5.00001 5L19 19" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>');
        $('.' + calssname).css('border', '2px #EEEAEE solid');
        $('.' + calssname).css('border-radius', '4%');
        $(this).attr('fill', '#B4B8B1');
        $('.kolich').html(`<div>Билеты: ${counter}</div>`);
        $('.kolich').html(`<div>Билеты: ${counter}<br>Цена: ${sum} BYN</div>`);
        if (counter != 0) {
            $('.kolich').css('display', 'block');
            $('.sum').css('display', 'block');
            $('.ticketsbutton').css('display', 'block');
            $('.empty').css('display', 'none');
        }
    }
});

$('#basketpart').on('click', '.trash-button', function(){
    counter--;
    let [firstPart, secondPart] = $(this).parent().attr('class').split('_');
    let firstNumber = parseInt(firstPart);
    let secondNumber = parseInt(secondPart);
    if (secondNumber < 5) {
        $('[data-row=' + firstNumber + '][data-column=' + secondNumber + ']').attr("fill", "#71F022");
    }
    else if (secondNumber > 4 && secondNumber < 9) {
        $('[data-row=' + firstNumber + '][data-column=' + secondNumber + ']').attr("fill", "#75C4F0");
    }
    else {
        $('[data-row=' + firstNumber + '][data-column=' + secondNumber + ']').attr("fill", "#FB20F2");
    }
    price = $('[data-row=' + firstNumber + '][data-column=' + secondNumber + ']').attr('data-date');
    let num = parseInt(price, 10)
    sum -= num;
    $(this).parent().remove();
    $('.kolich').html(`<div>Билеты: ${counter}<br>Цена: ${sum} BYN</div>`);
    if (counter == 0) {
        $('.kolich').css('display', 'none');
        $('.sum').css('display', 'none');
        $('.ticketsbutton').css('display', 'none');
        $('.empty').css('display', 'block');
    }
});

$('.ticketsbutton').click(function(){
    $('.formcontainer').css('display', 'block');
    const element = document.querySelector('.formcontainer');
    const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
    window.scrollTo({
      top: elementPosition,
      behavior: 'smooth'
    });
    $('.containertickets').css('pointer-events', 'none')
})

$('#deletionBtn').click(function(e) {
    e.preventDefault();
    $('.formcontainer').css('display', 'none');
    $('.containertickets').css('pointer-events', 'auto');
})