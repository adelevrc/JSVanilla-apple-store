//pin the firstapge

const tlIntro = gsap.timeline({
    scrollTrigger:{
        trigger: '.first-page',
        markers: {starColor: 'purple', endColor: 'purple'},

        start:'0%',
        end:"100%",
        pin:true,
        pinSpacing:false,
    }
})

//highlight page 2
const tlH = gsap.timeline({
    scrollTrigger: {
        trigger: '.second-page',
        markers: {starColor: 'blue', endColor: 'blue'},
        scrub: true,
        start: '-10O%',
        end: '40%'
    }
})

tlH.fromTo(
    '.highlight',
    {color: 'rgba(255,255,255,0.4)'},
    {color: 'rgba(255,255,255,1)', stagger:1})

//highlight page 2
const tlHRemove = gsap.timeline({
    scrollTrigger: {
        trigger: '.second-page',
        markers: {starColor: 'pink', endColor: 'pink'},
        scrub: true,
        start: '0%',
        end: '100%'
    }
})

tlHRemove.to(
    '.highlight',
    {color: 'rgba(255,255,255,0.4)', stagger:1})