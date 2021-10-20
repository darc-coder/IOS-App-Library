const container = document.querySelector('.container');
const allBoxes = document.querySelectorAll('.box');
const pullUp = document.querySelector('#box-1');
const header = document.querySelector('header');
const cross = document.querySelector('.cross');
const bar = document.querySelector('#bar');
const barContainer = document.querySelector('.bar-container');

container.onclick = cross.onclick = () => {
    //  let find out center of bar
    let barRects = bar.getBoundingClientRect();
    let top = barRects.top - 55;
    let right = barRects.right - barRects.width / 2 + 100;

    barContainer.classList.toggle('inactive');
    container.classList.toggle('inactive');
    header.classList.toggle('inactive');

    allBoxes.forEach((box, index) => {
        // Now lets calculate the top and right movement with css variables
        let moveTop = top - box.getBoundingClientRect().top;
        let boxRight = box.getBoundingClientRect().right;

        let moveRight = boxRight - right + index * 4;

        box.style.setProperty('--top', moveTop);
        box.style.setProperty('--right', moveRight);

        // console.log(top, box.getBoundingClientRect().top, moveTop, right, boxRight, moveRight);
        box.classList.toggle('inactive');
    })
}