import Masonry from 'masonry-layout';

window.onload = () => {
    const grid = document.querySelector('.grid');
    const masonry = new Masonry(grid, {
        // options
        itemSelector: '.item',
        gutter: 10,
        
    });
}
