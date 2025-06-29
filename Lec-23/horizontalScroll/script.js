const ITEM_WIDTH = 200;
const MAX_WIDTH = 7 * ITEM_WIDTH;
const MIN_WIDTH = 0;

let scrollPos = 0;

const leftBtn = document.querySelectorAll('button')[0];
const rightBtn = document.querySelectorAll('button')[1];
const container = document.querySelector('.container');
const contentBox = document.querySelector('.content-box');

function handleScroll(scrollAmount){
    const conatinerRight = container.getBoundingClientRect().right;
    const contentBoxRight = contentBox.getBoundingClientRect().right;

    if(contentBoxRight > conatinerRight){
        scrollPos += scrollAmount;
    }

    container.scrollLeft = scrollPos;
    console.log(scrollPos)
}


rightBtn.onclick = () => {
    const conatinerRight = container.getBoundingClientRect().right;
    const contentBoxRight = contentBox.getBoundingClientRect().right;

    if(contentBoxRight > conatinerRight)
        scrollPos += ITEM_WIDTH;

    container.scrollLeft = scrollPos;
}

leftBtn.onclick = () => {
    const conatinerLeft = container.getBoundingClientRect().left;
    const contentBoxLeft = contentBox.getBoundingClientRect().left;

    console.log(conatinerLeft)
    console.log(contentBoxLeft)

    if(contentBoxLeft < conatinerLeft)
        scrollPos -= ITEM_WIDTH;

    container.scrollLeft = scrollPos;
    // handleScroll(ITEM_WIDTH);
}