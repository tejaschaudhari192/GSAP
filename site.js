var tl = gsap.timeline();

tl.from("nav h1, nav h4, nav button", {
    y: -30,
    opacity: 0,
    duration: 0.5,
    delay: 1,
    stagger: 0.2
});

tl.from('.hero-part1 h1', {
    x: -300,
    opacity: 0,
    duration: 0.4
})

tl.from('.hero-part2 img', {
    x: 100,
    opacity: 0,
    duration: 0.4
}, '-=0.4')

tl.from('.hero-part1 p', {
    x: -100,
    opacity: 0,
    duration: 0.4
})

tl.from('.hero-part1 button', {
    opacity: 0,
    duration: 0.4
})

gsap.from('.hero-bottom img', {
    opacity: 0,
    stagger: 0.2,
    duration: 0.6,
    y: 30,
    scrollTrigger: {
        trigger: ".hero-bottom img",
        scroller: 'body',
        start: "top 80%"
    }
})


var tl2 = gsap.timeline({
    scrollTrigger: {
        trigger: '#services',
        scroller: 'body',
        start: "top 50%",
        end: "top -50%",
        scrub: 2
    }
});

tl2.from('#services h3', {
    opacity: 0,
    y: 30
}, 'head')
tl2.from('#services p', {
    opacity: 0,
    y: 30
}, 'head')

tl2.from(".service.service-light.row1", {
    opacity: 0,
    duration: 1,
    x: -300
}, 'row1')

tl2.from(".service.service-dark.row1", {
    opacity: 0,
    duration: 1,
    x: 300
}, 'row1')

tl2.from(".service.service-light.row2", {
    opacity: 0,
    duration: 1,
    x: 300
}, 'row2')

tl2.from(".service.service-dark.row2", {
    opacity: 0,
    duration: 1,
    x: -300
}, 'row2')


var cta_tl = gsap.timeline({
    scrollTrigger: {
        trigger: '#cta-section',
        scroller: 'body',
        start: "top 50%",
        end: "top -50%"
    }
})

cta_tl.from("#cta-section .cta-left h2", {
    x: -100,
    opacity: 0,
    duration: 0.6
}, 'cta')

cta_tl.from("#cta-section .cta-right img", {
    x: 100,
    opacity: 0,
    duration: 0.6
}, 'cta')
cta_tl.from("#cta-section .cta-left p", {
    x: -50,
    opacity: 0,
    duration: 0.6
})
cta_tl.from("#cta-section .cta-left button", {
    opacity: 0,
    duration: 0.6
})

gsap.from('#case-study .services h3', {
    opacity: 0,
    x: -50,
    scrollTrigger: {
        scroller: 'body',
        trigger: '#case-study .services h3',
        start: "top 50%",
        end: "top -50%"
    }
})

gsap.from('#case-study .services p', {
    opacity: 0,
    x: 50,
    duration: 0.5,
    scrollTrigger: {
        trigger: '#case-study .services h3',
        scroller: 'body',
        start: "top 50%",
        end: "top 0%"
    }
})

gsap.from('#case-study .services p', {
    opacity: 0,
    x: 50,
    duration: 0.5,
    scrollTrigger: {
        trigger: '#case-study .services h3',
        scroller: 'body',
        start: "top 50%",
        end: "top 0%",
        // scrub: 2
    }
})