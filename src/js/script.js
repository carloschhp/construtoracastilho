$(document).ready(function () {
    $(".dropdown-item").on("click", function (e) {
        e.preventDefault();
        var target = $(this).data("target");
        $(target).fadeIn();
    });

    $('.slider').slick({
        dots: false,
        arrows: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: '<button type="button" class="slick-prev">Anterior</button>',
        nextArrow: '<button type="button" class="slick-next">Próximo</button>'
    });
});

document.addEventListener("DOMContentLoaded", function () {
    var contentItems = document.querySelectorAll('.content-item');
    for (var i = 1; i < contentItems.length; i++) {
        contentItems[i].style.display = 'none';
    }
    function showContent(contentId) {
        // Oculta todos os content-items
        var contentItems = document.querySelectorAll('.content-item');
        contentItems.forEach(function (item) {
            item.style.display = 'none';
        });

        // Exibe o content-item correspondente ao slider-item clicado
        var selectedContent = document.getElementById(contentId);
        selectedContent.style.display = 'block';

        // Rola suavemente para o conteúdo exibido
        var offsetTop = selectedContent.offsetTop;
        window.scrollTo({
            top: offsetTop,
            behavior: "smooth"
        });
    }
});