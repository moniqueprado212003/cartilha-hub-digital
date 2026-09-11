const categoryCards =
    document.querySelectorAll(".category-card");

const categoriesSection =
    document.getElementById("categorias");

const topicPages =
    document.querySelectorAll(".topic-page");

const backButtons =
    document.querySelectorAll(".back-button");


function openTopic(category) {

    const topicPage =
        document.getElementById(
            `topic-${category}`
        );


    if (!topicPage) {

        console.log(
            "Conteúdo ainda não disponível:",
            category
        );

        return;

    }


    categoriesSection.style.display =
        "none";


    topicPages.forEach((page) => {

        page.style.display =
            "none";

    });


    topicPage.style.display =
        "block";


    topicPage.scrollIntoView({
    behavior: "smooth",
    block: "start"
});

}


function showCategories() {

    topicPages.forEach((page) => {

        page.style.display =
            "none";

    });


    categoriesSection.style.display =
        "block";


    categoriesSection.scrollIntoView({

        behavior: "smooth"

    });

}


categoryCards.forEach((card) => {

    card.addEventListener(
        "click",
        () => {

            const category =
                card.dataset.category;

            openTopic(category);

        }
    );

});


backButtons.forEach((button) => {

    button.addEventListener(
        "click",
        showCategories
    );

});
/* =========================================
   MENU MOBILE
========================================= */

const mobileMenuButton =
    document.getElementById(
        "mobileMenuButton"
    );

const mainNavigation =
    document.querySelector(
        "header nav"
    );


if (mobileMenuButton && mainNavigation) {

    mobileMenuButton.addEventListener(
        "click",
        () => {

            const menuIsOpen =
                mainNavigation.classList.toggle(
                    "mobile-open"
                );

            mobileMenuButton.classList.toggle(
                "active",
                menuIsOpen
            );

            mobileMenuButton.setAttribute(
                "aria-expanded",
                menuIsOpen
            );

        }
    );


    mainNavigation
        .querySelectorAll("a")
        .forEach((link) => {

            link.addEventListener(
                "click",
                () => {

                    mainNavigation.classList.remove(
                        "mobile-open"
                    );

                    mobileMenuButton.classList.remove(
                        "active"
                    );

                    mobileMenuButton.setAttribute(
                        "aria-expanded",
                        "false"
                    );

                }
            );

        });

}
/* =========================================
   BOTÕES PARA VOLTAR ÀS CATEGORIAS
========================================= */

const categoryLinks =
    document.querySelectorAll(
        ".go-to-categories"
    );

categoryLinks.forEach((link) => {

    link.addEventListener(
        "click",
        (event) => {

            event.preventDefault();

            showCategories();

        }
    );

});
/* =========================================
   ANIMAÇÃO DOS CARDS AO ENTRAR NA TELA
========================================= */

const animatedCards =
    document.querySelectorAll(
        ".category-card"
    );

if (
    "IntersectionObserver"
    in window
) {

    const cardObserver =
        new IntersectionObserver(
            (entries, observer) => {

                entries.forEach((entry) => {

                    if (entry.isIntersecting) {

                        entry.target.classList.add(
                            "card-visible"
                        );

                        observer.unobserve(
                            entry.target
                        );

                    }

                });

            },
            {
                threshold: 0.15
            }
        );

    animatedCards.forEach((card) => {
        cardObserver.observe(card);
    });

} else {

    animatedCards.forEach((card) => {
        card.classList.add(
            "card-visible"
        );
    });

}