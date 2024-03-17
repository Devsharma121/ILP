   
   let navLinks = document.querySelectorAll("nav a");
let sections = document.querySelectorAll('section');

window.addEventListener('scroll', () => {
  let currentSection = null;

  sections.forEach(section => {
    const top = section.offsetTop;
    const height = section.offsetHeight;

    if (window.scrollY >= top - 100 && window.scrollY < top + height - 100) {
      currentSection = section;
    }
  });

  if (currentSection) {
    const id = currentSection.getAttribute('id');
    
    navLinks.forEach(link => {
      link.classList.remove('active');
      let targetLink = document.querySelector('nav a[href*=' + id + ']');
      if (targetLink) {
        targetLink.classList.add('active');
      }
    });
  }
});
  // let navLink = document.querySelectorAll("nav a");
  // let sections = document.querySelectorAll('section');
  
  // window.onscroll = () => {
  //   sections.forEach(section => {
  //     let top = window.scrollY;
      
  //     let offset = section.offsetTop - 100;
  //     let height = section.offsetHeight;
  //     let id = section.getAttribute('id');
  
  //     if (top > offset && top < offset + height) {
  //       navLink.forEach(link => {
  //         link.classList.remove('active');
  //         if (link.getAttribute('href') === `#${id}`) {
  //           link.classList.add('active');
  //         }
  //       });
  //     }
  //   });
  // };
  
   
   // Sticky Navbar
   $(window).scroll(function () {
    if ($(this).scrollTop() > 30) {
        $('.navbar').addClass('is-sticky ');
    } else {
        $('.navbar').removeClass('is-sticky');
    }
});

// slick Js
// $('.slide').slick({
//   dots: true,
//   infinite: true,
//   speed: 300,
//   loop:true,
//   // autoplay:true,
//   slidesToShow: 4,
//   slidesToScroll: 1,
//   // prevArrow:'<span class="prev_arrow"><i class ="fas fa fa-angle-left"></i></span>',
//   // nextArrow:'<span class="next_arrow"><i class ="fas fa fa-angle-right"></i></span>',
//   responsive: [
//     {
//       breakpoint: 1024,
//       settings: {
//         slidesToShow: 3,
//         slidesToScroll: 3,
//         infinite: true,
//         dots: true
//       }
//     },
//     {
//       breakpoint: 600,
//       settings: {
//         slidesToShow: 2,
//         slidesToScroll: 2
//       }
//     },
//     {
//       breakpoint: 480,
//       settings: {
//         slidesToShow: 1,
//         slidesToScroll: 1
//       }
//     }
//     // You can unslick at a given breakpoint now by adding:
//     // settings: "unslick"
//     // instead of a settings object
//   ]
// });

$('.slideshow').slick({
    dots: true,
    infinite: true,
    speed: 300,
    loop:true,
    slidesToShow: 5,
    slidesToScroll: 4,
    prevArrow:'<span class="prev_arrow"><i class ="fas fa fa-angle-left"></i></span>',
    nextArrow:'<span class="next_arrow"><i class ="fas fa fa-angle-right"></i></span>',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });
  $('.serviceslideshow').slick({
    dots: true,
    infinite: true,
    speed: 300,
    loop:true,
    slidesToShow: 4,
    slidesToScroll: 4,
    prevArrow:'<span class="prev_arrow"><i class ="fas fa fa-angle-left"></i></span>',
    nextArrow:'<span class="next_arrow"><i class ="fas fa fa-angle-right"></i></span>',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });

  $('.slideshow-2').slick({
    dots: true,
    infinite: true,
    speed: 300,
    loop:true,
    slidesToShow: 4,
    autoPlay:true,
    slidesToScroll: 4,
    prevArrow:'<span class="prev_arrow"><i class ="fas fa fa-angle-left"></i></span>',
    nextArrow:'<span class="next_arrow"><i class ="fas fa fa-angle-right"></i></span>',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });
  $('.clientslideshow').slick({
    dots: true,
    infinite: true,
    speed: 300,
    loop:true,
    slidesToShow: 5,
    autoplay:true,
    slidesToScroll: 1,
    // prevArrow:'<span class="prev_arrow"><i class ="fas fa fa-angle-left"></i></span>',
    // nextArrow:'<span class="next_arrow"><i class ="fas fa fa-angle-right"></i></span>',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });
//   typing animation js
var typed = new Typed('#company', {
    strings: ['OP<span class="textprimary">T</span>IMI<span class="textprimary">S</span>TIX MEDIA'],
    typeSpeed: 150,
    backSpeed: 150,
    loop:false
  });

  // scroll to top 
  function ScrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }
  