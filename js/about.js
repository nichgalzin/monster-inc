/*------------------------------------*\
  Functions
\*------------------------------------*/

function handleScreenSizeChange () {

    /* About DOM access */

    const aboutSection = document.querySelector('section');
    const cards = document.getElementsByClassName('card');

    /* Conditions for about section */

    if (window.innerWidth < 736) {


        aboutSection.classList.add('margin-top');

        cards[0].classList.remove('border', 'u-border');
        cards[0].classList.add('border');

        cards[1].classList.remove('backwards-l-border');
        cards[1].classList.add('h-border');

        cards[2].classList.remove('u-border', 'backwards-l-border');
        cards[2].classList.add('border');

        cards[3].classList.remove('backwards-l-border', 'u-border');
        cards[3].classList.add('h-border');

        cards[4].classList.remove('u-border', 'backwards-l-border', 'l-border');
        cards[4].classList.add('border');

        cards[5].classList.remove('backwards-l-border');
        cards[5].classList.add('u-border');

    }else if (window.innerWidth >= 736 && window.innerWidth < 1104) {

        /* Remove margin from section */
        aboutSection.classList.remove('margin-top');

        /* Fix borders for cards */

        cards[0].classList.remove('border');
        cards[0].classList.add('u-border');

        cards[1].classList.remove('h-border');
        cards[1].classList.add('backwards-l-border');

        cards[2].classList.remove('border', 'backwards-l-border');
        cards[2].classList.add('u-border');

        cards[3].classList.remove('h-border', 'u-border');
        cards[3].classList.add('backwards-l-border');

        cards[4].classList.remove('border', 'backwards-l-border', 'l-border');
        cards[4].classList.add('u-border');

        cards[5].classList.remove('u-border');
        cards[5].classList.add('backwards-l-border');

    } else if (window.innerWidth >= 1104 && window.innerWidth < 1472) {

        cards[0].classList.remove('border');
        cards[0].classList.add('u-border');

        cards[1].classList.remove('h-border');
        cards[1].classList.add('backwards-l-border');

        cards[2].classList.remove('border');
        cards[2].classList.add('backwards-l-border');

        cards[3].classList.remove('h-border', 'backwards-l-border');
        cards[3].classList.add('u-border');

        cards[4].classList.remove('border', 'u-border', 'l-border');
        cards[4].classList.add('backwards-l-border');

        cards[5].classList.remove('u-border');
        cards[5].classList.add('backwards-l-border');
       
    } else {
        cards[0].classList.remove('border');
        cards[0].classList.add('u-border');

        cards[1].classList.remove('h-border');
        cards[1].classList.add('backwards-l-border');

        cards[2].classList.remove('border', 'u-border');
        cards[2].classList.add('backwards-l-border');


        cards[3].classList.remove('h-border', 'u-border');
        cards[3].classList.add('backwards-l-border');

        cards[4].classList.remove('border', 'u-border', 'backwards-l-border');
        cards[4].classList.add('u-border');

        cards[5].classList.remove('u-border');
        cards[5].classList.add('backwards-l-border');
    }
}

handleScreenSizeChange();


/*------------------------------------*\
  Event handlers
\*------------------------------------*/

window.addEventListener('resize', handleScreenSizeChange);