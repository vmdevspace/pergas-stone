import Masonry from 'masonry-layout'

// document.addEventListener("DOMContentLoaded", (event) => {
//     const elem = document.querySelector('.gl');

//     if (elem != null) {
//         const msnry = new Masonry(elem, {
//             itemSelector: '.c'
//         });
//     }
// });

window.onload = function () {
    const elem = document.querySelector('.gl');

    if (elem != null) {
        const msnry = new Masonry(elem, {
            itemSelector: '.c'
        });
    }
}