import Masonry from 'masonry-layout'

const elem = document.querySelector('.gl');
const msnry = new Masonry(elem, {
    itemSelector: '.c'
});