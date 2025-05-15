// const scroll = new LocomotiveScroll({
//     el: document.querySelector('#main'),
//     smooth: true
// });


// const scroll = new LocomotiveScroll({
//     el: document.querySelector('#main'),
//     smooth: true
// });

// // Handle anchor links with Locomotive Scroll
// document.querySelectorAll('a[href^="#"]').forEach(anchor => {
//     anchor.addEventListener('click', function(e) {
//         e.preventDefault();
        
//         const targetId = this.getAttribute('href');
//         if (targetId === '#') return;
        
//         const targetElement = document.querySelector(targetId);
//         if (targetElement) {
//             scroll.scrollTo(targetElement);
//         }
//     });
// });


// Reset hash on load
document.addEventListener('DOMContentLoaded', function() {
  if (window.location.hash) {
    history.replaceState(null, null, ' ');
  }

  // Initialize Locomotive Scroll
  const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
    // lerp: 0.05,
    // multiplier: 1.2,
    // resetNativeScroll: true
  });

  // Handle anchor clicks
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        scroll.scrollTo(targetElement);
        history.pushState(null, null, targetId);
      }
    });
  });
});


function page4Animation() {
    var elemC = document.querySelector("#elem-container")
    var fixed = document.querySelector("#fixed-image")
    elemC.addEventListener("mouseenter", function () {
        fixed.style.display = "block"
    })
    elemC.addEventListener("mouseleave", function () {
        fixed.style.display = "none"
    })

    var elems = document.querySelectorAll("#elem")
    elems.forEach(function (e) {
        e.addEventListener("mouseenter", function () {
            var image = e.getAttribute("data-image")
            fixed.style.backgroundImage = `url(${image})`
        })
    })
}
  


function swipperAnimation() {
     var swiper = new Swiper(".mySwiper", {
      slidesPerView: "auto",
      centeredSlides: true,
      spaceBetween: 100,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });
}
function menuAnimation() {

    let menu = document.querySelector("nav h3")
    let fullscr = document.querySelector("#full-scr")
    let navimg = document.querySelector("nav img")
    let flag = 0
    menu.addEventListener("click", function () {
    if (flag == 0) {fullscr.style.top= 0
        navimg.style.opacity = 0
        flag = 1
    }
        else {
            fullscr.style.top= "-100%"
            navimg.style.opacity = 1
            flag = 0

    }
    })
}

function loaderAnimation() {
    var loader = document.querySelector("#loader")
    setTimeout(function () {
        loader.style.top = "-100%"
    }, 4200)
}

page4Animation();
swipperAnimation();
menuAnimation();
loaderAnimation()


document.querySelectorAll('.skill').forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-5px)';
        });
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0)';
        });
    });


function closeFullScreenMenu() {
    const fullScreenMenu = document.querySelector('#full-scr');
    const navImg = document.querySelector('nav img');
    const hamburgerIcon = document.querySelector('.hamburger-btn i');
    
    fullScreenMenu.style.top = '-100%';
    
    if (navImg) navImg.style.opacity = '1';
    
    if (hamburgerIcon) {
        hamburgerIcon.classList.replace('fa-times', 'fa-bars');
    }
}


document.querySelectorAll('#full-div1 .mobile-nav h4').forEach(button => {
    button.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.querySelector('a').getAttribute('href');
        
        
        closeFullScreenMenu();
        
        setTimeout(() => {
            document.querySelector(targetId).scrollIntoView({
                behavior: 'smooth'
            });
        }, 300); 
    });
});






