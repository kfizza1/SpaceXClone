// Heading Scroll Animation
const header = document.getElementById("header");
const headerSection = document.getElementById("header-section");
let lastScroll = window.scrollY;

window.addEventListener("scroll", ()=>{
 let currentScroll = window.scrollY;
    if(currentScroll > lastScroll){
        header.style.transform = "translateY(-100%)";
    }
    else{
        header.style.transform = "translateY(0)";
    }
})

// Section Fade Animation
const observer = new IntersectionObserver((entries)=>{
    entries.forEach(entry =>{
        if(entry.isIntersecting){
        entry.target.classList.add("visible");
};
});
});
document.querySelectorAll(".hidden").forEach(section =>{
    observer.observe(section);
})

//  Nav Side Menu

const menu = document.querySelector("#hamburger");
const navShow = document.querySelector(".show");
const sideNav = document.querySelector(".sideMenu");
const clearBtn = document.getElementById("clearBtn");

menu.addEventListener("click", ()=>{
    sideNav.style.zIndex = "0";
    navShow.style.display = "block";
})

clearBtn.addEventListener("click", ()=>{
    navShow.style.display = "none";
    sideNav.style.zIndex = "15";
})

// Hide Side Menu After Scroll

const showNav = document.querySelector(".show");
window.addEventListener("scroll", ()=>{
    lastScroll = window.scrollY;
    if(lastScroll > 2){
        showNav.style.display = "none"
    }
});

// Menu Resize With Responsiveness
const mobileNav = document.querySelector("#mobileNav");
const navBar = document.querySelector("#nav-bar");
window.addEventListener("resize", ()=>{
if(window.innerWidth < 1025){
    mobileNav.style.display = "block";
    navBar.style.display = "none"
}
})