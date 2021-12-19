console.log("Welcome to notes app");
showNotes();

//If user write in text area and press add note button then adding his note to local storage
let addhover=document.getElementById('addTxt');
addhover.addEventListener('click',()=>{
    addhover.value="";
});


let addBtn = document.getElementById('addBtn');
addBtn.addEventListener("click", function (e) {
    let addTxt = document.getElementById('addTxt');
    let notes = localStorage.getItem('notes');
    let notesObj;
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }
    notesObj.push(addTxt.value);
    localStorage.setItem('notes', JSON.stringify(notesObj));
    addTxt.value = "Write notes here";
    // console.log(notesObj);
    showNotes();
});

function showNotes() {
    let notes = localStorage.getItem('notes');
    let notesObj;
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }
    let html = "";
    notesObj.forEach((element, index) => {
        html += `
        <div class="noteCard my-2 mx-2 card" style="width: 18rem;">
                <div class="card-body">
                    <h5 class="card-title">Note ${index + 1}</h5>
                    <p class="card-text">${element}</p>
                    <button class="btn btn-primary" id="${index}" onclick="deleteNote(this.id)">Delete Note</button>
                </div>
        </div>`;
    });
    let notesElm = document.getElementById('notes');
    if (notesObj.length != 0) {
        notesElm.innerHTML = html;
    }
    else
    {
        notesElm.innerHTML = "";
    }
}


function deleteNote(locat) {

    let notes = localStorage.getItem('notes');
    let notesObj;
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }
    let notesnewObj=[];
    notesObj.forEach((element, i) => {
        if (i != locat) {
            notesnewObj.push(element);
        }
    })
    // localStorage.clear();
    // console.log(notesnewObj);
    if(notesnewObj.length!=0)
    localStorage.setItem('notes', JSON.stringify(notesnewObj));
    else
    localStorage.clear();
    showNotes();
}



let search=document.getElementById('searchTxt');
search.addEventListener("input",function (){
    let inputVal=search.value;
    //if(inputVal==null)
    let noteCards=document.getElementsByClassName('noteCard');
    Array.from(noteCards).forEach(function (element) {
        let cardTxt=element.getElementsByTagName('p')[0];
        if(!(cardTxt.innerText.includes(inputVal)))
        {
            element.style.display='none';
        }
        else{
            element.style.display='block';
        }
    });
});
