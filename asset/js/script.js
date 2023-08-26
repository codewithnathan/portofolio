/*=============== FILTERS TABS ===============*/
const tabs = document.querySelectorAll('[data-target]'),
        tabContents = document.querySelectorAll('[data-content]')

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const target = document.querySelector(tab.dataset.target)
        
        tabContents.forEach(tc => {
            tc.classList.remove('filters__active')
        })
        target.classList.add('filters__active')

        tabs.forEach(t => {
            t.classList.remove('filter-tab-active')
        })
        tab.classList.add('filter-tab-active')
    })
})

/*=============== DARK LIGHT THEME ===============*/
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'ri-sun-line'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'ri-moon-line' : 'ri-sun-line'

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'ri-moon-line' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})

/*=============== SHOW MODAL ===============*/
const showModal = (openButton, modalContent) =>{
    const openBtn = document.getElementById(openButton),
    modalContainer = document.getElementById(modalContent)
    
    if(openBtn && modalContainer){
        openBtn.addEventListener('click', ()=>{
            modalContainer.classList.add('show-modal')
        })
    }
}
showModal('open-modal-one', 'modal-container-one')
showModal('open-modal-two','modal-container-two')

/*=============== CLOSE MODAL ===============*/
const closeBtn = document.querySelectorAll('.close-modal')

function closeModal(){
    const modalContainerOne = document.getElementById('modal-container-one')
    const modalContainerTwo = document.getElementById('modal-container-two')
    modalContainerOne.classList.remove('show-modal')
    modalContainerTwo.classList.remove('show-modal')
}
closeBtn.forEach(c => c.addEventListener('click', closeModal))

/*=============== SWIPER ===============*/
// Get the DOM elements for the image carousel
const wrapperOne = document.querySelector(".wrapperOne"),
  carouselOne = document.querySelector(".carouselOne"),
  imagesOne = document.querySelectorAll("img#slideOne"),
  buttonsOne = document.querySelectorAll(".buttonOne");

let imageIndexOne = 1,
  intervalIdOne;

// Define function to start automatic image slider
const autoSlideOne = () => {
  // Start the slideshow by calling slideImage() every 2 seconds
  intervalIdOne = setInterval(() => slideImageOne(++imageIndexOne), 2000);
};
// Call autoSlide function on page load
autoSlideOne();

// A function that updates the carousel display to show the specified image
const slideImageOne = () => {
  // Calculate the updated image index
  imageIndexOne = imageIndexOne === imagesOne.length ? 0 : imageIndexOne < 0 ? imagesOne.length - 1 : imageIndexOne;
  // Update the carousel display to show the specified image
  carouselOne.style.transform = `translate(-${imageIndexOne * 100}%)`;
};

// A function that updates the carousel display to show the next or previous image
const updateClickOne = (e) => {
  // Stop the automatic slideshow
  clearInterval(intervalIdOne);
  // Calculate the updated image index based on the button clicked
  imageIndexOne += e.target.id === "next" ? 1 : -1;
  slideImageOne(imageIndexOne);
  // Restart the automatic slideshow
  autoSlideOne();
};

// Add event listeners to the navigation buttons
buttonsOne.forEach((button) => button.addEventListener("click", updateClickOne));

// Add mouseover event listener to wrapper element to stop auto sliding
wrapperOne.addEventListener("mouseover", () => clearInterval(intervalIdOne));
// Add mouseleave event listener to wrapper element to start auto sliding again
wrapperOne.addEventListener("mouseleave", autoSlideOne);

/*=============== SWIPER ===============*/
// Get the DOM elements for the image carousel
const wrapperTwo = document.querySelector(".wrapperTwo"),
  carouselTwo = document.querySelector(".carouselTwo"),
  imagesTwo = document.querySelectorAll("img#slideTwo"),
  buttonsTwo = document.querySelectorAll(".buttonTwo");

let imageIndexTwo = 1,
  intervalIdTwo;

// Define function to start automatic image slider
const autoSlideTwo = () => {
  // Start the slideshow by calling slideImage() every 2 seconds
  intervalIdTwo = setInterval(() => slideImageTwo(++imageIndexTwo), 2000);
};
// Call autoSlide function on page load
autoSlideTwo();

// A function that updates the carousel display to show the specified image
const slideImageTwo = () => {
  // Calculate the updated image index
  imageIndexTwo = imageIndexTwo === imagesTwo.length ? 0 : imageIndexTwo < 0 ? imagesTwo.length - 1 : imageIndexTwo;
  // Update the carousel display to show the specified image
  carouselTwo.style.transform = `translate(-${imageIndexTwo * 100}%)`;
};

// A function that updates the carousel display to show the next or previous image
const updateClickTwo = (e) => {
  // Stop the automatic slideshow
  clearInterval(intervalIdTwo);
  // Calculate the updated image index based on the button clicked
  imageIndexTwo += e.target.id === "next" ? 1 : -1;
  slideImageTwo(imageIndexTwo);
  // Restart the automatic slideshow
  autoSlideTwo();
};

// Add event listeners to the navigation buttons
buttonsTwo.forEach((button) => button.addEventListener("click", updateClickTwo));

// Add mouseover event listener to wrapper element to stop auto sliding
wrapperTwo.addEventListener("mouseover", () => clearInterval(intervalIdTwo));
// Add mouseleave event listener to wrapper element to start auto sliding again
wrapperTwo.addEventListener("mouseleave", autoSlideTwo);

/*=============== SCROLL REVEAL ANIMATION ===============*/

const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400
})

sr.reveal('.profile__border')
sr.reveal('.profile__name', {delay: 500})
sr.reveal('.profile__profession', {delay: 600})
sr.reveal('.profile__social', {delay: 700})
sr.reveal('.profile__info-group', {interval: 100, delay: 700})
sr.reveal('.profile__buttons', {delay: 800})
sr.reveal('.filters__content', {delay: 900})
sr.reveal('.filters', {delay: 1000})