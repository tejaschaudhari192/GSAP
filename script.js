
gsap.to('#box1', {
    x: "300",
    duration: 2,
    // delay: 1,
    rotate: 360,
    backgroundColor: "blue",
    borderRadius: "50%",
    // scale: 1.5,
    repeat: -1,
    yoyo: true
})

gsap.from('#box2', {
    x: 300,
    y: 300,
    duration: 2,
    delay: 1
})



gsap.from("h1", {
    color: "red",
    // delay: 1,
    duration: 1,
    opacity: 0,
    // x: 30,
    y: 30,
    stagger: 1,

})

gsap.from('#box12', {
    x: 300,
    duration: 2,
    // delay: 1,
    rotate: 360,
    backgroundColor: "blue",
    borderRadius: "50%",
    // scale: 1.5,
    repeat: -1,
    yoyo: true
})