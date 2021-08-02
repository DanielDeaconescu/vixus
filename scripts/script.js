let slideIndex = 0;

function carouselImages() {
    const theSlides = document.querySelectorAll(".slides");
    const theDots = document.querySelectorAll(".dot");
    for (let i = 0; i <= theSlides.length - 1; i++) {
        theSlides[i].style.display = "none";
    }
    slideIndex++;
    if(slideIndex > theSlides.length) {
        slideIndex = 1;
    }

    for(let i = 0; i <= theDots.length - 1; i++) {
        theDots[i].className = theDots[i].className.replace("dot-active", "");
    }
    theSlides[slideIndex-1].style.display = "block";
    theDots[slideIndex - 1].className += " dot-active"
    setTimeout(carouselImages, 4000);

    
    
}

carouselImages();

const rightIcons = document.querySelectorAll('.actual-icon');
const leftContent = document.querySelectorAll('.left-text');

for (let i = 0; i <= rightIcons.length - 1; i++) {
    rightIcons[i].addEventListener('mouseenter', function(){
        leftContent[i].classList.remove('d-none');
    });
    rightIcons[i].addEventListener('mouseleave', function(){
        leftContent[i].classList.add('d-none');
    })
}

// Creating the functionalities for the FAQ Section

// const question1 = document.querySelector('.question-1');
// const questionArrow = document.querySelector('.question-1-arrow');

// question1.addEventListener('click', function() {
//     question1.classList.toggle('faq_color_class');
//     questionArrow.classList.toggle('fa-chevron-up');
// })

const allQuestions = document.querySelectorAll('.question');
console.log(allQuestions);
const allQuestionesArrow = document.querySelectorAll('.question-arrow');

for(let i = 0; i < allQuestions.length; i++) {
    allQuestions[i].addEventListener('click', function() {
        allQuestions[i].classList.toggle('faq_color_class');
        allQuestionesArrow[i].classList.toggle('fa-chevron-up');
    })
}