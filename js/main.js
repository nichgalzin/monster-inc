/*------------------------------------*\
  Functions
\*------------------------------------*/

/* Function to handle screensize */

function handleScreenSizeChange () {
    /* Banner DOM access */

    const banner = document.getElementById('banner');
    const descriptionBox = document.getElementById('description-box');
    const sectionHeader = document.getElementById('about');

    /* Conditions for banner borders */

    if (window.innerWidth < 800) {
        descriptionBox.classList.remove('backwards-c-border');
        descriptionBox.classList.add('u-border');
    } else {
        descriptionBox.classList.remove('u-border');
        descriptionBox.classList.add('backwards-c-border');
    }
}

   
handleScreenSizeChange();


/*------------------------------------*\
  Event handlers
\*------------------------------------*/

window.addEventListener('resize', handleScreenSizeChange);