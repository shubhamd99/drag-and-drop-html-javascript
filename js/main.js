const fill = document.querySelector('.fill');
const empties = document.querySelectorAll('.empty');

// Fill Listerners
fill.addEventListener('dragstart', dragStart);
fill.addEventListener('dragend', dragEnd);

// Loop through empties and call drag events
for (const empty of empties) {
    empty.addEventListener('dragover', dragOver);
    empty.addEventListener('dragenter', dragEnter);
    empty.addEventListener('dragleave', dragLeave);
    empty.addEventListener('drop', dragDrop);
}

// Drag Functions
function dragStart() {
    console.log('start end');
    this.className += ' hold';
    // Making the class of the current element to invisible to make the drag component invisible in place
    setTimeout(() => this.className = 'invisible', 0);
}

function dragEnd() {
    console.log("drag end");
    // Making the class of the current element to invisible once drag has ended
    this.className = 'fill';
}

function dragOver(e) {
    e.preventDefault();
    console.log("drag over");
}

function dragEnter(e) {
    e.preventDefault();
    this.className += ' hovered';
}

function dragLeave() {
    this.className = 'empty';
}

function dragDrop() {
    this.className = ' empty';
    this.append(fill);
}