/************ CAROUSEL ************/
$(document).ready(function(){
    $('.carousel__inner').slick({
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: `<button type="button" class="slick-prev"><img src="icons/arrow_left.png"></button>`,
        nextArrow: `<button type="button" class="slick-next"><img src="icons/arrow_right.png"></button>`,
        variableWidth: true,
        centerMode: true,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    dots: true,
                    dotsClass: "slick-dots",
                    arrows: false,
                    variableWidth: true

                }
            },
            {
                breakpoint: 767,
                settings: {
                    dots: true,
                    dotsClass: "slick-dots",
                    arrows: false,

                }
            }
        ]
      });
  });

/************** TABS **************/
const tabs = document.querySelectorAll(".catalog__tab");
const tabsWrapper = document.querySelector(".catalog__tabs");
const catalogContents = document.querySelectorAll(".catalog__content");


function removeActiveClass(arr, activeClass) {
    arr.forEach((item) => {
        item.classList.remove(activeClass);
    });
}



tabsWrapper.addEventListener("click" , e => {
    let tab;
    if (e.target.tagName === "DIV") {
        removeActiveClass(tabs, "catalog__tab_active");
        tab = e.target.parentElement;
    } else if (e.target.classList.contains("catalog__tab")) {
        removeActiveClass(tabs, "catalog__tab_active");
        tab = e.target;
    }
    tab.classList.add("catalog__tab_active");

    function addActiveClassByDataAttribute(arr, attributeValue, activeClass) {
        arr.forEach((item) => {
            if(item.dataset.purpose == attributeValue) {
                item.classList.add(activeClass);
            }
        });
    }

    switch (tab.dataset.purpose) {
        case "fitness":
            removeActiveClass(catalogContents, "catalog__content_active");
            addActiveClassByDataAttribute(catalogContents, "fitness", "catalog__content_active")
            break;

        case "running":
            removeActiveClass(catalogContents, "catalog__content_active");
            addActiveClassByDataAttribute(catalogContents, "running", "catalog__content_active")
            break;

        case "triathlon":
            removeActiveClass(catalogContents, "catalog__content_active");
            addActiveClassByDataAttribute(catalogContents, "triathlon", "catalog__content_active")
            break;
    }
});



const cardsLinksMore = document.querySelectorAll(".catalog-item__link");
const cardsLinksBack = document.querySelectorAll(".catalog-item__back");


cardsLinksMore.forEach(item => {
    item.addEventListener("click", (e) => {
        e.preventDefault();
        item.parentElement.classList.toggle("catalog-item__content_active");
        item.parentElement.parentElement.querySelector(".catalog-item__list").classList.toggle("catalog-item__list_active");
    }); 
});

cardsLinksBack.forEach(item => {
    item.addEventListener("click", (e) => {
        e.preventDefault();
        item.parentElement.classList.toggle("catalog-item__list_active");
        item.parentElement.parentElement.querySelector(".catalog-item__content").classList.toggle("catalog-item__content_active");
    }); 
});


