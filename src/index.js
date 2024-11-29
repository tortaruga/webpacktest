import Masonry from 'masonry-layout';
import './styles.css';

window.onload = () => {
    const grid = document.querySelector('.grid');
    const masonry = new Masonry(grid, {
        // options
        itemSelector: '.item',
        gutter: 10,
        
    });
}
