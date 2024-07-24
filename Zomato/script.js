gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});

// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();


let t1 = gsap.timeline();

t1.add([
  gsap.from("#loader-text1", {
    opacity: 0,
    x: -500,
    duration: 1.5,
  }),
  gsap.from("#loader-text2", {
    opacity: 0,
    x: 500,
    duration: 1.5,
  })
]);

t1.from("#loader img", {
  opacity: 0,
  y: -500,
  duration: 1,
}, "-=0.5");

t1.to("#loader", {
  delay: 1,
  top: '-100%',
  duration: 1,
});

// Scroll-triggered animation timeline
var t2 = gsap.timeline({
  scrollTrigger: {
    trigger: "#page3",
    scroller:"#main",
    start: "top 0%",
    scrub: true,
    pin: true
  }
});

t2.to("#pizza", {
  opacity: 0,
  top: "-10%",
  left: "-10%"
}, 'getApp', '-=1');

t2.to("#maggi", {
  opacity: 0,
  bottom: "-20%",
  left: "-10%"
}, 'getApp', '-=1');

t2.to("#jilebi", {
  opacity: 0,
  left: "-10%"
}, 'getApp', '-=1');

t2.to("#franch_fries", {
  opacity: 0,
  top: "-10%",
  right: "-10%"
}, 'getApp', '-=1');

t2.to("#gulab_jamun", {
  opacity: 0,
  right: "-10%"
}, 'getApp', '-=1');

t2.to("#samosa", {
  opacity: 0,
  top: "60%",
  right: "-10%"
}, 'getApp', '-=1');

t2.to("#cold_drinks", {
  opacity: 0,
  bottom: "-20%",
  right: "-10%"
}, 'getApp', '-=1');

t2.to("#p3", {
  opacity: 0,
  scale: 0
}, 'getApp', '-=1');

t2.to(".phone-sec", {
  scale: 0.9,
  bottom: "5%"
}, 'getApp');

t2.to("#burger", {
  width: '8%',
  bottom: '53%',
  left: '46%',
  rotate: 0,
  zIndex: 10
}, 'getApp');

t2.to("#chicken", {
  width: '9%',
  bottom: '23%',
  right: '45.5%',
  rotate: 0,
  zIndex: 10
}, 'getApp');

t2.to("#page3", {
  backgroundColor: '#E23744'
});

t2.to('.leftText, .rightText', {
  display: 'initial',
  delay: 0.3,
  y: 50,
  opacity: 1
});


let p4img = document.querySelector('.p4img');
let img1 = document.querySelector('#zomatoboy');
let img2 = document.querySelector('#zomatogirl');

p4img.addEventListener('mouseover',()=>{
  img1.style.transform = 'rotate(-15deg)';
  img1.style.transformOrigin = '0% 100%';
  img2.style.transform = 'rotate(3deg)';
  img2.style.transformOrigin = '0% 100%';
});

p4img.addEventListener('mouseout',()=>{
  img1.style.transform = 'rotate(0deg)';
  img1.style.transformOrigin = '0% 100%';
  img2.style.transform = 'rotate(0deg)';
  img2.style.transformOrigin = '0% 100%';
});

let amtcard = document.querySelector('#amtcard');
let bankcard = document.querySelector('.bankcard');
let bankcard1 = document.querySelector('#bankcard1');
let bankcard2 = document.querySelector('#bankcard2');
let bankcard3 = document.querySelector('#bankcard3');

const handleMouseOver = () => {
  bankcard1.style.transform = 'rotate(-1deg)';
  bankcard1.style.transformOrigin = '0% 0%';
  bankcard2.style.transform = 'rotate(-5deg)';
  bankcard2.style.transformOrigin = '0% 0%';
  bankcard3.style.transform = 'rotate(-7deg)';
  bankcard3.style.transformOrigin = '0% 0%';
};

const handleMouseOut = () => {
  bankcard1.style.transform = 'rotate(0deg)';
  bankcard1.style.transformOrigin = '0% 0%';
  bankcard2.style.transform = 'rotate(0deg)';
  bankcard2.style.transformOrigin = '0% 0%';
  bankcard3.style.transform = 'rotate(0deg)';
  bankcard3.style.transformOrigin = '0% 0%';
}

bankcard.addEventListener('mouseover',handleMouseOver);
amtcard.addEventListener('mouseover',handleMouseOver);

bankcard.addEventListener('mouseout',handleMouseOut);
amtcard.addEventListener('mouseout', handleMouseOut);

let phone2 = document.querySelector('#phone2');

phone2.addEventListener('mouseover', () => {
  phone2.style.bottom = '0%';
});

phone2.addEventListener('mouseout', () => {
  phone2.style.bottom = '-8%';
});

var t4 = gsap.timeline({
  scrollTrigger: {
    trigger: "#page5",
    scroller:"#main",
    start: "5% 0%",
    end: "5% -100%",
    scrub: true,
    pin: true
  }
});

t4.from('#package, #indiandish, #chickencurry, #chickenbiryani, #pizzaham, #burgeronion, #rice, #eggbiryani',{
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
},'placeOrder','-=1');

t4.from('#p5',{
  scale: 0.3,
  opacity:0,
},'placeOrder');

let sections = gsap.utils.toArray('.panel');

let scrollTween = gsap.to(sections, {
  xPercent: -100 * (sections.length - 1),
  ease: "none", // <-- IMPORTANT!
  scrollTrigger: {
    trigger: "#page7",
    scroller:"#main",
    pin: true,
    scrub: 1,
    snap: 1 / (sections.length - 1),
    end: '+=3500',
  }
});

function upImg(index) {
  let ind = index + 1;
  if (index === 5) {
    ind = 1;
  }

  let t6 = gsap.timeline();

  t6.to(`#p2img${index}`, {
    x: '-=450',
    opacity: 0.5,
    scale: 0.8,
    duration: 0.5,
    zIndex:'0',
  }, 'images');

  t6.to(`#p2img${ind}`, {
    opacity: 1,
    zIndex: '5',
    duration: 0.5,
    transform: 'rotate(0deg)',
  }, 'images');

  t6.to(`#p2img${index}`, {
    top: '5%',
    left: '40%',
    scale: 1,
    zIndex: '0',
    transform: 'rotate(3deg)',
  });
}



let p211 = document.querySelector('#p211');
let p2imgs = document.querySelectorAll('#page2-s2 img');
let itemName = document.querySelector('#itemName');
let itemdesc = document.querySelector('#itemdesc');
let itemhotel = document.querySelector('#hotel');

let Names = ['','Pizza Perfection','Burger Bliss','Chicken Biryani Delight','Pani Puri Paradise','Paneer Tikka Treat'];
let desc = ['',"Indulge in the best local pizzas, from classic Margherita to gourmet options. With crispy crusts, flavorful sauces, and perfect cheese blends, each slice promises a taste experience you'll love.",
  "Savor the ultimate burger experience with our juicy, flavorful patties, fresh toppings, and perfectly toasted buns. From classic cheeseburgers to gourmet creations, each bite is a burst of deliciousness you'll crave.",
  "Experience the rich and aromatic flavors of our chicken biryani, a perfect blend of tender chicken, fragrant basmati rice, and a symphony of spices. Every bite is a journey to the heart of authentic culinary tradition.",
  "Dive into the refreshing and tangy world of pani puri, where crispy puris meet spicy, flavored water and delectable fillings. Each bite is an explosion of flavors that will tantalize your taste buds.",
  "Enjoy the mouth-watering goodness of our paneer tikka, where paneer cubes are marinated in spices and grilled to perfection. It's a delightful experience that combines smoky, spicy, and tangy flavors in every bite."
];
let hotel = ['','The Italian hub','Rainbow Cafe and Restaurant','Panjurli,Vidyagiri','Celebrity Cafe','Same Place restaraunt']

let ind = 1;
p212.addEventListener('click', () => {
  if(ind === 6){
    ind = 1;
  }
  upImg(ind);
  ind++;
  if(ind === 6){
    ind = 1;
  }
  itemName.textContent=Names[ind];
  itemdesc.textContent=desc[ind];
  itemhotel.textContent=hotel[ind];
});


let cross = document.getElementById('cross');
let menubar = document.getElementById('menubar');
let menubtn = document.getElementById('menubtn');

cross.addEventListener('click', () => {
  menubar.style.display = 'none';
  document.body.style.overflow = '';
});

menubtn.addEventListener('click', () => {
  menubar.style.display = 'block';
  document.body.style.overflow = 'hidden';
});

const degreeToRadian = angle => angle * (Math.PI / 180);

const pointOnCircle = (radius, angle = 0) => {
    const xPos = radius * Math.cos(degreeToRadian(angle));
    const yPos = radius * Math.sin(degreeToRadian(angle));
    return { x: xPos, y: yPos };
}

const circle = document.querySelector('#circular-text');
const radius = circle.clientWidth / 2;
const text = circle.innerText;
const characters = text.split('');
circle.innerText = '';

const deltaAngle = 360 / characters.length;
let currentAngle = -90;

characters.forEach((char, index) => {
    const charElement = document.createElement('span');
    charElement.innerText = char;
    circle.appendChild(charElement);
});

const updateTextPosition = () => {
    const radius = circle.clientWidth / 2;
    let currentAngle = -90;

    Array.from(circle.children).forEach((charElement, index) => {
        let { x: xPos, y: yPos } = pointOnCircle(radius - charElement.offsetWidth / 2, currentAngle);
        xPos += radius;
        yPos += radius;

        charElement.style.left = `${xPos}px`;
        charElement.style.top = `${yPos}px`;
        charElement.style.transform = `rotate(${currentAngle + 90}deg)`;

        currentAngle += deltaAngle;
    });
};

// Wait for the layout to be done before calculating positions
window.addEventListener('load', updateTextPosition);
window.addEventListener('resize', updateTextPosition);