/*------------------------------------*\
  Functions
\*------------------------------------*/

/* Function to handle screensize */

function handleScreenSizeChange () {
    const banner = document.getElementById('banner');
    const descriptionBox = document.getElementById('description-box');

    if (window.innerWidth < 800) {
        descriptionBox.classList.add('u-border');
        descriptionBox.classList.remove('backwards-l-border');
    } else {
        descriptionBox.classList.remove('u-border');
        descriptionBox.classList.add('backwards-l-border');
    }
}

handleScreenSizeChange();


/*------------------------------------*\
  Event handlers
\*------------------------------------*/

window.addEventListener('resize', handleScreenSizeChange)