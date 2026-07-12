/*====================================
    СФЕРА КРАСОТЫ И ЗДОРОВЬЯ
====================================*/

const burger = document.querySelector(".burger");
const menu = document.querySelector(".menu");

// ------------------------------
// Бургер-меню
// ------------------------------

if (burger && menu) {

    burger.addEventListener("click", () => {

        menu.classList.toggle("active");

        burger.innerHTML = menu.classList.contains("active")
            ? "✕"
            : "☰";

    });

    document.querySelectorAll(".menu a").forEach(link => {

        link.addEventListener("click", () => {

            menu.classList.remove("active");
            burger.innerHTML = "☰";

        });

    });

}

// ------------------------------
// Шапка при прокрутке
// ------------------------------

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {

    if(window.scrollY > 50){

        header.style.background = "rgba(40,40,40,.97)";
        header.style.boxShadow = "0 15px 35px rgba(0,0,0,.25)";

    }else{

        header.style.background = "rgba(45,45,45,.90)";
        header.style.boxShadow = "none";

    }

});

// ------------------------------
// Плавное появление секций
// ------------------------------

const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.style.opacity="1";
            entry.target.style.transform="translateY(0)";

        }

    });

},{
    threshold:0.15
});

sections.forEach(section=>{

    section.style.opacity="0";
    section.style.transform="translateY(50px)";
    section.style.transition=".8s";

    observer.observe(section);

});

// ------------------------------
// Анимация карточек
// ------------------------------

const cards = document.querySelectorAll(".card");

cards.forEach((card,index)=>{

    card.style.transitionDelay = `${index*0.08}s`;

});

// ------------------------------
// Кнопка вверх
// ------------------------------

const topBtn = document.createElement("button");

topBtn.className = "top-btn";

topBtn.innerHTML = "↑";

document.body.appendChild(topBtn);

window.addEventListener("scroll",()=>{

    if(window.scrollY>600){

        topBtn.classList.add("show");

    }else{

        topBtn.classList.remove("show");

    }

});

topBtn.addEventListener("click",()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});

// ------------------------------
// Стили кнопки вверх
// ------------------------------

topBtn.style.position="fixed";
topBtn.style.bottom="25px";
topBtn.style.right="25px";
topBtn.style.width="55px";
topBtn.style.height="55px";
topBtn.style.borderRadius="50%";
topBtn.style.border="none";
topBtn.style.background="#D6B14A";
topBtn.style.color="#333";
topBtn.style.fontSize="22px";
topBtn.style.cursor="pointer";
topBtn.style.opacity="0";
topBtn.style.visibility="hidden";
topBtn.style.transition=".3s";
topBtn.style.boxShadow="0 15px 30px rgba(0,0,0,.3)";

topBtn.classList.remove("show");

const style=document.createElement("style");

style.innerHTML=`

.top-btn.show{

opacity:1;

visibility:visible;

}

`;

document.head.appendChild(style);

// ------------------------------
// Лайтбокс галереи
// ------------------------------

const galleryImages = document.querySelectorAll(".gallery-grid img");

const overlay = document.createElement("div");

overlay.style.position="fixed";
overlay.style.top="0";
overlay.style.left="0";
overlay.style.width="100%";
overlay.style.height="100%";
overlay.style.background="rgba(0,0,0,.85)";
overlay.style.display="none";
overlay.style.justifyContent="center";
overlay.style.alignItems="center";
overlay.style.zIndex="9999";

const img=document.createElement("img");

img.style.maxWidth="90%";
img.style.maxHeight="90%";
img.style.borderRadius="20px";

overlay.appendChild(img);

document.body.appendChild(overlay);

galleryImages.forEach(photo=>{

photo.addEventListener("click",()=>{

img.src=photo.src;

overlay.style.display="flex";

});

});

overlay.addEventListener("click",()=>{

overlay.style.display="none";

});

// ------------------------------
// Кнопки
// ------------------------------

document.querySelectorAll(".button").forEach(button=>{

button.addEventListener("mouseenter",()=>{

button.style.transform="translateY(-4px)";

});

button.addEventListener("mouseleave",()=>{

button.style.transform="translateY(0px)";

});

});

// ------------------------------
// Плавный скролл
// ------------------------------

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

anchor.addEventListener("click",function(e){

e.preventDefault();

const target=document.querySelector(this.getAttribute("href"));

if(target){

target.scrollIntoView({

behavior:"smooth"

});

}

});

});