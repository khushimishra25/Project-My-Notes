// FUNCTION FOR GENERATING UNIQUE KEY
function generateKey() {
    return Math.random().toString(36).substr(2) + Date.now().toString(36);
}


// FUNCTION FOR ADDING DATA WITH COLOR IN LOCAL STORAGE
function createNote(color, c) {

    let title = String(document.getElementById(`title-${c}`).value);
    let desc = String(document.getElementById(`desc-${c}`).value);
    let clr = String(color);
    let data = JSON.stringify([title, desc, clr]);
    localStorage.setItem(generateKey(), data);
    document.getElementById(`title-${c}`).value = '';
    document.getElementById(`desc-${c}`).value = '';
    displayNotes()
}


// FUNCTION FOR REMOVIN A DATA USING KEY FROM LOCAL STORAGE
function removeNote(key) {
    localStorage.removeItem(key);
    displayNotes();
}


// FUNCTION FOR VIEWING SINGLE NOTE IN A BOOTSTRAP MODAL
function viewNote(key) {
    let data = JSON.parse(localStorage.getItem(key));
    document.getElementById('staticBackdropLabel').innerHTML = data[0];
    document.getElementById('notes-description').innerHTML = data[1];
}

// FUNCTION FOR DISPLAYING ALL LOCALSTORAGE DATA
function displayNotes() {
    var d = ''
    for (let i = 0; i < localStorage.length; i++) {
        let data = JSON.parse(localStorage.getItem(localStorage.key(i)));
        d = d + `
        <li class="card-c" style="background-color: ${data[2]};">
        <div class="card-title">${data[0]}</div>
        <div class="card-desc">${data[1].slice(0, 55)}......</div>
        <div class="btns">
            <button onclick="viewNote('${localStorage.key(i)}')" class="view" data-bs-toggle="modal" data-bs-target="#staticBackdrop"><i class="fa-regular fa-eye fa-lg"></i></button>
            <button onclick="removeNote('${localStorage.key(i)}')" class="delete"><i class="fa-solid fa-trash fa-lg"></i></button>
        </div>
        </li>
        `;
    }
    document.getElementById('data').innerHTML = d;
}


// FUNCTION CALL
displayNotes()


// COLAPSING CREATING BUTTON ON CLICK
document.querySelector('.r').onclick = () => {
    document.getElementById('create').click()
}
document.querySelector('.b').onclick = () => {
    document.getElementById('create').click()
}
document.querySelector('.g').onclick = () => {
    document.getElementById('create').click()
}
document.querySelector('.y').onclick = () => {
    document.getElementById('create').click()
}



// BUTTON ANIMATION
document.getElementById('create').onclick = () => {
    document.querySelector('.create').classList.toggle('create-click')
    if (document.querySelector('.r').style.bottom == '130px') {
        document.querySelector('.r').style.bottom = '70px';
    } else {
        document.querySelector('.r').style.bottom = '130px';
    }
    if (document.querySelector('.y').style.bottom == '170px') {
        document.querySelector('.y').style.bottom = '70px';
    } else {
        document.querySelector('.y').style.bottom = '170px';
    }

    if (document.querySelector('.b').style.bottom == '210px') {
        document.querySelector('.b').style.bottom = '70px';
    } else {
        document.querySelector('.b').style.bottom = '210px';
    }

    if (document.querySelector('.g').style.bottom == '250px') {
        document.querySelector('.g').style.bottom = '70px';
    } else {
        document.querySelector('.g').style.bottom = '250px';
    }
}