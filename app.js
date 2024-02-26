var reveals = document.querySelectorAll(".reveal");
var windowheight = window.innerHeight;
let logo = document.querySelector(".logo-pic");
var spin = 0;
let home = document.getElementById("home");
let about = document.getElementById("about");
let skills = document.getElementById("skills");
let projects = document.getElementById("projects");
let contact = document.getElementById("contact");
const links = document.getElementsByClassName("nav-link");
let arraylink = [...links];
var btt = document.querySelector(".back-to-top");
let sidebutton = document.querySelector(".side-but");
let sidebar = document.querySelector(".sidebar");
let sidelist = document.querySelector(".sidebar-list");
let closebtn = document.querySelector(".close");

window.addEventListener("scroll", loader);

function loader() {
  for (var i = 0; i < reveals.length; i++) {
    var revealstop = reveals[i].getBoundingClientRect().top;
    var revealpoint = 150;

    if (revealstop < windowheight - revealpoint) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", () => {
  logo.style = `transform: rotate(${(spin += 3)}deg)`;
});

function positionfinder() {
  let sections = [home, about, skills, projects, contact];
  sections.map((section) => {
    if (section.getBoundingClientRect().top < 500) {
      var secname = section.id;
      navlink(secname);
    }
    btthidder();
  });
}

positionfinder();

function navlink(name) {
  arraylink.map((link) => {
    if (link.innerHTML.includes(name)) {
      link.style = "color : #f64c72 ; font-weight:800;";
    } else {
      link.style = "color : white";
    }
  });
}

window.addEventListener("scroll", positionfinder);

function btthidder() {
  if (about.getBoundingClientRect().top < 0) {
    btt.style = " visibility: visible";
  } else {
    btt.style = " visibility: hidden";
  }
}

sidebutton.addEventListener("click", () => {
  sidelist.style.display = "block";
  sidebar.style.width = "50%";
  closesidebar();
});

closebtn.addEventListener("click", closehandler);

function closehandler() {
  sidelist.style.display = "none";
  sidebar.style.width = "0";
}

function closesidebar() {
  if (sidebar.style.width == "50%") {
    document.addEventListener("click", (e) => {
      if (e.target.parentElement.parentElement.id == 'sidebar' || e.target.id == "sidebar" || e.target.id == 'open' ) {
        null ;
      }else{
        closehandler();
      }
    });
  }else{
    console.log('erroe');
  }
}

