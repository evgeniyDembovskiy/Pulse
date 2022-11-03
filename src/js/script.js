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

/************** MODAL **************/
const modalConsultationButtons = document.querySelectorAll("[data-modal=consultation]");
const modalOverlay = document.querySelector(".overlay");
const modalConsultation = document.querySelector("#consultation");
const modalOrder = document.querySelector("#order");
const modalOrderButtons = document.querySelectorAll(".button_mini");
const catalogItemDescriptions = document.querySelectorAll(".catalog-item__subtitle");

function showModal(modal) {
    modalOverlay.style.visibility = "visible";
    modalOverlay.style.opacity = 1;
    modal.style.display = "block";
    modal.style.opacity = 1;

    modal.querySelector(".modal__close").addEventListener("click", () => hideModal(modal));
    modalOverlay.addEventListener("click", e => {
        if (e.target.classList.contains("overlay")) {
            hideModal(modal);
        }
    });
}

function hideModal(modal) {
    modalOverlay.style.opacity = 0;        
    modalOverlay.style.visibility = "hidden";
    modal.style.display = "none";  
}

modalConsultationButtons.forEach(item => {
    item.addEventListener("click", () => showModal(modalConsultation));
});

modalOrderButtons.forEach((item, i) => {
    item.addEventListener("click", () => {
        modalOrder.querySelector(".modal__descr").innerHTML = catalogItemDescriptions[i].innerHTML;
        showModal(modalOrder)
    });
    
});


function validateForms(form) {
    $(form).validate({
        rules: {
            name: "required",
            phone: "required",
            email: {
                required: true,
                email: true
            }
        }, 
        messages: {
            name: "Пожалуйста, введите свое имя",
            phone: "Пожалуйста, введите свой номер телефона",
            email: {
              required: "Пожалуйста, введите свой e-mail",
              email: "Неправильно введен адрес почты"
            }
          }
    });
}

validateForms("#consultation form");
validateForms("#order form");
validateForms("#consultation-form");


$("input[name=phone]").mask("+7 (999) 999-99-99");