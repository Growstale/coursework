$(document).ready(function() {
    $('.year1').click(function(){
        $('.year1').addClass('active');
        $('.year2').removeClass('active');
        $('.festivals').html('<div class="cart"><img src="../image/festival/1.jpg"><div class="zagolovok">FESTIVAL D’AVIGNON</div><div class="inform">Ежегодный фестиваль искусств</div><button>Подробнее</button></div><div class="cart"><img src="../image/festival/2.jpg"><div class="zagolovok">WIENER FESTWOCHEN</div><div class="inform">Культурный фестиваль родом из Вены</div><button>Подробнее</button></div><div class="cart"><img src="../image/festival/3.jpg"><div class="zagolovok">GENTSE FEESTEN</div><div class="inform">Музыкальный и театральный фестиваль</div><button>Подробнее</button></div><div class="cart"><img src="../image/festival/4.jpg"><div class="zagolovok">TEATRO A CORTE</div><div class="inform">Театральный фестиваль</div><button>Подробнее</button></div><div class="cart"><img src="../image/festival/5.jpg"><div class="zagolovok">EDINBURGH INTERNATIONAL FESTIVAL</div><div class="inform">Фестиваль  искусств</div><button>Подробнее</button></div>')
    })
    $('.year2').click(function(){
        $('.year2').addClass('active');
        $('.year1').removeClass('active');
        $('.festivals').html('<div class="cart"><img src="../image/festival/6.jpg"><div class="zagolovok">FESTIVAL D’AIX-EN-PROVENCE</div><div class="inform">Ежегодный фестиваль</div><button>Подробнее</button></div><div class="cart"><img src="../image/festival/7.jpg"><div class="zagolovok">ARENA DI VERONA</div><div class="inform">Культурный фестиваль родом из Вены</div><button>Подробнее</button></div><div class="cart"><img src="../image/festival/8.jpg"><div class="zagolovok">MUNICH OPERA FESTIVAL</div><div class="inform">Музыкальный и театральный фестиваль</div><button>Подробнее</button></div><div class="cart"><img src="../image/festival/9.jpg"><div class="zagolovok">SALZBURGER FESTSPIELE</div><div class="inform">Театральный фестиваль</div><button>Подробнее</button></div>')
    })
})