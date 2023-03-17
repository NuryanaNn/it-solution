window.addEventListener('scroll', function(){
    const header = document.querySelector('header');
    header.classList.toggle("sticky", window.scrollY > 0)
});



let swiper = new Swiper(".mySwiper",{
    slidesPerView:"auto",
    spaceBetween:30,
    loop:true,
    centeredSlides:true,
    autolay:{
        delay:2500,
        disabledOnInteraction:false,
    }
})

