import Masonry from 'masonry-layout'

var elem = document.querySelector('.gl');
var msnry = new Masonry(elem, {
    itemSelector: '.c'
});