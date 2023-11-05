window.addEventListener('scroll', function(){
    var nav= this.document.querySelector("nav");
   
    nav.classList.toggle('sticky',this.window.scrollY>0);
   
    
});







 // AOS
 AOS.init({
    duration: 1700,
})
