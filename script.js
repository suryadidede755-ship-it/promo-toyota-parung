/* =========================================
   HERO SLIDER
========================================= */

const slides = document.querySelectorAll(".slide");

let currentSlide = 0;

function showSlide(index){

    slides.forEach(slide => {

        slide.classList.remove("active");

    });

    slides[index].classList.add("active");

}

function nextSlide(){

    currentSlide++;

    if(currentSlide >= slides.length){

        currentSlide = 0;

    }

    showSlide(currentSlide);

}

if(slides.length > 0){

    setInterval(nextSlide,5000);

}

/* =========================================
   HEADER SCROLL
========================================= */

const header = document.querySelector(".header");

window.addEventListener("scroll",()=>{

    if(window.scrollY > 80){

        header.style.background = "#ffffff";

        header.style.boxShadow = "0 10px 30px rgba(0,0,0,.08)";

    }else{

        header.style.background = "rgba(255,255,255,.82)";

        header.style.boxShadow = "none";

    }

});

/* =========================================
   BACK TO TOP
========================================= */

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll",()=>{

    if(window.scrollY > 500){

        topBtn.style.display = "flex";

        topBtn.style.alignItems = "center";

        topBtn.style.justifyContent = "center";

    }else{

        topBtn.style.display = "none";

    }

});

topBtn.addEventListener("click",()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});

/* =========================================
   MOBILE MENU
========================================= */

const menuToggle = document.querySelector(".menu-toggle");

const navbar = document.querySelector(".navbar");

menuToggle.addEventListener("click",()=>{

    navbar.classList.toggle("show");

});

/* =========================================
   CLOSE MENU AFTER CLICK
========================================= */

document.querySelectorAll(".navbar a").forEach(link=>{

    link.addEventListener("click",()=>{

        navbar.classList.remove("show");

    });

});

/* =========================================
   SCROLL ANIMATION
========================================= */

const revealItems = document.querySelectorAll(

".feature-card,.car-card,.testimonial-card,.stat-box,.about,.simulation,.faq-item"

);

function reveal(){

    revealItems.forEach(item=>{

        const windowHeight = window.innerHeight;

        const elementTop = item.getBoundingClientRect().top;

        const revealPoint = 120;

        if(elementTop < windowHeight - revealPoint){

            item.classList.add("active");

        }

    });

}

window.addEventListener("scroll",reveal);

reveal();

/* =========================================
   COUNTER
========================================= */

const counters = document.querySelectorAll(".stat-box h2");

const speed = 60;

counters.forEach(counter=>{

    const updateCounter = ()=>{

        const target = parseInt(counter.innerText);

        if(isNaN(target)) return;

        const count = +counter.getAttribute("data-count") || 0;

        const increment = Math.ceil(target / speed);

        if(count < target){

            const newCount = count + increment;

            counter.setAttribute("data-count",newCount);

            counter.innerText = newCount;

            setTimeout(updateCounter,20);

        }else{

            counter.innerText = target + "+";

        }

    };

    updateCounter();

});

/* =========================================
   BUTTON RIPPLE
========================================= */

document.querySelectorAll(".btn-primary,.btn-card,.btn-nav").forEach(button=>{

button.addEventListener("click",function(e){

const circle=document.createElement("span");

const diameter=Math.max(this.clientWidth,this.clientHeight);

const radius=diameter/2;

circle.style.width=circle.style.height=`${diameter}px`;

circle.style.left=`${e.clientX-this.getBoundingClientRect().left-radius}px`;

circle.style.top=`${e.clientY-this.getBoundingClientRect().top-radius}px`;

circle.classList.add("ripple");

const ripple=this.getElementsByClassName("ripple")[0];

if(ripple){

ripple.remove();

}

this.appendChild(circle);

});

});

/* =========================================
   LOADING FINISH
========================================= */

window.addEventListener("load",()=>{

document.body.classList.add("loaded");

});

console.log("Toyota Landing Page Loaded Successfully");
/* Menu Mobile */

.navbar.show{

display:flex;

flex-direction:column;

position:absolute;

top:80px;

left:0;

width:100%;

background:#fff;

padding:20px;

box-shadow:0 10px 25px rgba(0,0,0,.1);

}

/* Scroll Animation */

.feature-card,
.car-card,
.stat-box,
.testimonial-card,
.faq-item,
.about,
.simulation{

opacity:0;

transform:translateY(40px);

transition:.7s;

}

.feature-card.active,
.car-card.active,
.stat-box.active,
.testimonial-card.active,
.faq-item.active,
.about.active,
.simulation.active{

opacity:1;

transform:translateY(0);

}

/* Ripple */

.btn-primary,
.btn-card,
.btn-nav{

position:relative;

overflow:hidden;

}

.ripple{

position:absolute;

border-radius:50%;

background:rgba(255,255,255,.45);

transform:scale(0);

animation:ripple .6s linear;

}

@keyframes ripple{

to{

transform:scale(4);

opacity:0;

}

}
