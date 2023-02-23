'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const btnScrollTo = document.querySelector('.btn--scroll-to')
const section1 = document.querySelector('#section--1')
const tabs = document.querySelectorAll('.operations__tab')
const tabsContainer = document.querySelector('.operations__tab-container')
const tabsContent = document.querySelectorAll('.operations__content')
const nav = document.querySelector('.nav')

///////////////////////////////////////
// Modal window

const openModal = function (e) {
  modal.classList.toggle('hidden');
  overlay.classList.toggle('hidden');
};

const closeModal = function (e) {
  modal.classList.toggle('hidden');
  overlay.classList.toggle('hidden');
};

for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', openModal);



document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});


//btn scroll to

btnScrollTo.addEventListener('click', function (e) {
  const s1coords = section1.getBoundingClientRect();
  console.log(s1coords);

  console.log(e.target.getBoundingClientRect());

  console.log('Current Scroll (X/Y)', window.pageXOffset, window.pageYOffset);

  console.log('height/width viewport', document.documentElement.clientHeight, document.documentElement.clientWidth);

  // //scrolling
  // window.scrollTo(
  //   s1coords.left + window.pageXOffset,
  //   s1coords.top + window.pageYOffset
  // );

  // window.scrollTo({
  //   left: s1coords.left + window.pageXOffset,
  //   top: s1coords.top + window.pageYOffset,
  //   behavior: 'smooth',
  // })

  section1.scrollIntoView({ behavior: "smooth" })
});

/////////////////////////////////
//page navigation

// document.querySelectorAll('.nav__link').forEach (function(el) {
//   el.addEventListener('click',function(e) {
//     e.preventDefault()
//     const id = this.getAttribute('href');
//     console.log(id);
//     document.querySelector(id).scrollIntoView({behavior: 'smooth'})
//   })
// })

//1.add eventlister to common parent elements
//2. determined what element originated the event
document.querySelector('.nav__links').addEventListener('click', function (e) {
  e.preventDefault();

  //Matching strategy
  if (e.target.classList.contains('nav__link')) {
    const id = e.target.getAttribute('href');
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  }
})


// tabs.forEach(t => t.addEventListener('click', () => console.log('Tab')));

tabsContainer.addEventListener('click', function (e) {
  const clicked = e.target.closest('.operations__tab')

  //Guard Clause
  if (!clicked) return;


  //remove active class
  tabs.forEach(t => t.classList.remove('operations__tab--active'));
  tabsContent.forEach(c => c.classList.remove('operations__content--active'))

  //Active class
  clicked.classList.add('operations__tab--active')
  document.querySelector(`.operations__content--${clicked.dataset.tab}`).classList.add('operations__content--active')
})

//make fade animation
//refactor function
const handleOver = function (e) {
  if (e.target.classList.contains('nav__link')) {
    const link = e.target;
    const siblings = link.closest('.nav').querySelectorAll('.nav__link');
    const logo = link.closest('.nav').querySelector('img');

    siblings.forEach(el => {
      if (el !== link) el.style.opacity = this;
    });
    logo.style.opacity = this;
  };
}

//Passing an argument to handeler
nav.addEventListener('mouseover', handleOver.bind(0.5))
nav.addEventListener('mouseout', handleOver.bind(1))




// //Sticky event
// const initialCoords = section1.getBoundingClientRect()
// console.log(initialCoords);


// window.addEventListener('scroll', function () {
//   console.log(window.scrollY);

//   if (window.scrollY > initialCoords.top) nav.classList.add('sticky')
//   else nav.classList.remove('sticky')

// })


const header = document.querySelector('.header');
const navHeight = nav.getBoundingClientRect().height
console.log(navHeight);

const stickyNav = function (entries) {
  const [entry] = entries;
  console.log(entry);

  if (!entry.isIntersecting) nav.classList.add('sticky');
  else nav.classList.remove('sticky');
}


const headerObserver = new IntersectionObserver(
  stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px`,
});
headerObserver.observe(header);

/////////////////////////////////
/*
//// Lecture ////
console.log(document.documentElement);
console.log(document.head);
console.log(document.body);

//selecting elements
const header = document.querySelector('.header');
const allSections = document.querySelectorAll('.section');
console.log(allSections);

document.getElementById('section--1');
const allButtons = document.getElementsByTagName('button');
console.log(allButtons);

console.log(document.getElementsByClassName('btn'))

const message = document.createElement('div');
message.classList.add('cookie-message')
// message.textContent = 'We use cookies for improved functionality and analytics.'
message.innerHTML =
  'We use cookied for improved functionality and analytics. <button class="btn btn--close-cookie">Got it!</button>';

// header.prepend(message)
header.append(message)
// header.append(message.cloneNode(true))
// header.before(message)
// header.after(message)


//Delete Elements
document.querySelector('.btn--close-cookie').addEventListener('click', function () {
  // message.remove();
  message.parentElement.removeChild(message)
})


//styles
message.style.backgroundColor = "#37383d"
message.style.width = "120%"

console.log(message.style.backgroundColor);
console.log(getComputedStyle(message).height);

message.style.height = Number.parseFloat
  (getComputedStyle(message).height, 10) + 30 + 'px'

document.documentElement.style.setProperty('--color-primary', 'red')

const logo = document.querySelector('.nav__logo')
console.log(logo.alt);
console.log(logo.src);
console.log(logo.className);
console.log(logo.getAttribute('designer'));
logo.alt = 'Beautiful minimalist logo';

logo.setAttribute('Company', 'Bankist')
logo.getAttribute('src')
console.log(logo.getAttribute('src'));


const link = document.querySelector('.nav__link--btn');
console.log(link.href);
console.log(link.getAttribute('href'));

//Data attributes
console.log(logo.dataset.versionNumber);

//class

logo.classList.add('c', 'j')
logo.classList.remove('c', 'j')
logo.classList.toggle('c', 'j')
logo.classList.contains('c', 'j')


//DONT'T USE
logo.className = 'jonas'

*/

// const btnScrollTo = document.querySelector('.btn--scroll-to')
// const section1 = document.querySelector('#section--1')

// btnScrollTo.addEventListener('click', function (e) {
//   const s1coords = section1.getBoundingClientRect();
//   console.log(s1coords);

//   console.log(e.target.getBoundingClientRect());

//   console.log('Current Scroll (X/Y)', window.pageXOffset, window.pageYOffset);

//   console.log('height/width viewport', document.documentElement.clientHeight, document.documentElement.clientWidth);

//   // //scrolling
//   // window.scrollTo(
//   //   s1coords.left + window.pageXOffset,
//   //   s1coords.top + window.pageYOffset
//   // );

//   // window.scrollTo({
//   //   left: s1coords.left + window.pageXOffset,
//   //   top: s1coords.top + window.pageYOffset,
//   //   behavior: 'smooth',
//   // })

//   section1.scrollIntoView({ behavior: "smooth" })
// })

// const h1 = document.querySelector('h1')
// const alertH1 = function (e) {
//   alert('addEventlistener : Great you are reading the heading :)')

// }

// h1.addEventListener('mouseenter', alertH1)

// setTimeout(() => h1.removeEventListener('mouseenter', alertH1), 3000)

// // h1.onmouseenter = function (e) {
// //   alert('onmouseenter : Great you are reading the heading :)')
// // }

// //rgb (255,255,255)

// const randomInt = (min, max) => Math.floor(Math.random() * (max - min + 1) + min)

// const randomColor = () => `rgb(${randomInt(0, 255)},${randomInt(0, 255)},${randomInt(0, 255)})`
// console.log(randomColor(0, 255));


// document.querySelector('.nav__link').addEventListener('click', function (e) {
//   this.style.backgroundColor = randomColor();
//   console.log('Link', e.target, e.currentTarget);
//   console.log(this === e.currentTarget);

//   //stop propagation
//   // e.stopPropagation()
// })

// document.querySelector('.nav__links').addEventListener('click', function (e) {
//   this.style.backgroundColor = randomColor();
//   console.log('Container', e.target, e.currentTarget);
// })

// document.querySelector('.nav').addEventListener('click', function (e) {
//   this.style.backgroundColor = randomColor();
//   console.log('Nav', e.target, e.currentTarget);
// })

// const h1 = document.querySelector('h1');

// // going downward :child
// console.log(h1.querySelectorAll('.highlight'));
// console.log(h1.childNodes);
// console.log(h1.children);
// h1.firstElementChild.style.color = 'white'
// h1.lastElementChild.style.color = 'yellow'

// //going upward: parent
// console.log(h1.parentNode);
// console.log(h1.parentElement);

// h1.closest('.header').style.background = 'var(--color-primary-darker)'
// h1.closest('h1').style.background = 'var(--color-secondary-darker)'

// //going sideway: sibling
// console.log(h1.previousElementSibling);
// console.log(h1.nextElementSibling);

// console.log(h1.previousSibling);
// console.log(h1.nextSibling);


// console.log(h1.parentElement.children);
// [...h1.parentElement.children].forEach(function (el) {
//   if (el !== h1) el.style.transform = 'scale(0.5)'
// })

// const obsCallback = function (entries, oberver) {
//   entries.forEach(entry => {
//     console.log(entry);
//   })
// }

// const obsOption = {
//   root: null,
//   threshold: [0, 0.2],
// }

// const observer = new IntersectionObserver(obsCallback, obsOption)
// observer.observe(section1)

