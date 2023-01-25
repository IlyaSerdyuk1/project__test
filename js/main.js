const animItems = document.querySelectorAll('.__anim-items');

if (animItems.length > 0) {
    window.addEventListener('scroll', () => {
        setTimeout(() => {
            animOnScroll();
        }, 300);
    });

    function animOnScroll() {
        for (let index = 0; index < animItems.length; index++) {
            const animItem = animItems[index];
            const animItemHeight = animItem.offsetHeight;
            const animItemOffset = offset(animItem).top;
            const animStart = 4;


            let animItemPoint = window.innerHeight - animItemHeight / animStart;
            if (animItemHeight > window.innerHeight) {
                animItemPoint = window.innerHeight - window.innerHeight / animStart;
            }
            if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < animItemOffset + animItemHeight) {
                animItem.classList.add('__active');
            } else {
                if (!animItem.classList.contains('anime-no-repeat')){
                    animItem.classList.remove('__active');
                }

            }
        }
    }

    function offset(el) {
        const rect = el.getBoundingClientRect(),
            scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
            scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        return {top: rect.top + scrollTop, left: rect.left + scrollLeft}
    }


}