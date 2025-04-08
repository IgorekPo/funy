const faqs = document.querySelectorAll (".card__car");
faqs.forEach(faq =>{
    faq.addEventListener("click", ()=>{
        faq.classList.toggle("active");
    });
});