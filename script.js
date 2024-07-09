
gsap.to('#box1', {
    x: "280",
    duration: 2,
    // delay: 1,
    rotate: 360,
    backgroundColor: "blue",
    borderRadius: "50%",
    // scale: 1.5,
    repeat: -1,
    yoyo: true
})

gsap.from('#box12', {
    x: 280,
    duration: 2,
    // delay: 1,
    rotate: 360,
    backgroundColor: "blue",
    borderRadius: "50%",
    // scale: 1.5,
    repeat: -1,
    yoyo: true
})



gsap.from("name", {
    color: "red",
    // delay: 1,
    duration: 1,
    opacity: 0,
    // x: 30,
    y: 30,
    stagger: 1,

})


// timeline


// var t = gsap.timeline();

// t.from("#name", {
//     y: -20,
//     opacity: 0,
//     // duration: 1,
//     delay: 0.5
// });

// t.from("h4", {
//     y: -20,
//     opacity: 0,
//     duration: 1,
//     delay: 0.5,
//     stagger: 0.3
// })

// t.from("#title", {
//     y: 20,
//     opacity: 0,
//     duration: 1,
//     scale: 0.2,
// })

// // scrollTrigger

gsap.from("#page1 #box", {
    scale: 0,
    delay: 0.5,
    duration: 1,
    rotate: 360,
})



gsap.from("#page2 h1", {
    opacity: 0,
    duration: 2,
    x: 500,
    scrollTrigger: {
        trigger: "#page2 h1",
        // markers: true,
        start: "top 50%"
    }
})


gsap.from("#page2 h2", {
    opacity: 0,
    duration: 2,
    x: -500,
    scrollTrigger: {
        trigger: "#page2 h2",
        // markers: true,
        start: "top 50%"
    }
})

gsap.from("#page3 #box", {
    scale: 0,
    opacity: 0,
    duration: 1,
    rotate: 720,
    scrollTrigger: {
        trigger: "#page3 #box",
        // markers: true,
        start: "top 60%",
        end: "top 30%",
        scrub: 2,
        // pin: true
    }
})

gsap.to("#page31 h1", {
    transform: "translateX(-200%)",
    scrollTrigger: {
        trigger: "#page31 ",
        markers: true,
        start: "top 0%",
        // end: "top -100%",
        pin: true,
        scrub: 1
    }
})
