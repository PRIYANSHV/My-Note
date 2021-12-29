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
    let addheading=document.getElementById('heading');
    let notes = localStorage.getItem('notes');
    let noteheading=localStorage.getItem('noteheading');
    let notesObj,headingObj;
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }

    if (noteheading == null) {
        headingObj = [];
    }
    else {
        headingObj = JSON.parse(noteheading);
    }
    notesObj.push(addTxt.value);
    headingObj.push(addheading.innerText);
    localStorage.setItem('notes', JSON.stringify(notesObj));
    localStorage.setItem('noteheading',JSON.stringify(headingObj));
    addTxt.value = "Write notes here";
    addheading.innerText='Title';
    // console.log(notesObj);
    showNotes();
});

function showNotes() {
    let notes = localStorage.getItem('notes');
    let noteheading=localStorage.getItem('noteheading');
    let notesObj,headingObj;
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }
    if (noteheading == null) {
        headingObj = [];
    }
    else {
        headingObj = JSON.parse(noteheading);
    }
    let html = "";
    notesObj.forEach((element, index) => {
        html += `
        <div class="noteCard my-2 mx-2 card" style="width: 18rem;">
                <div class="card-body">
                    <h5 class="card-title">${headingObj[index]}</h5>
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
    let noteheading=localStorage.getItem('noteheading');
    let notesObj,headingObj;
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }
    if (noteheading == null) {
        headingObj = [];
    }
    else {
        headingObj = JSON.parse(noteheading);
    }
    let notesnewObj=[],headingnewObj=[];
    notesObj.forEach((element, i) => {
        if (i != locat) {
            notesnewObj.push(element);
            headingnewObj.push(headingObj[i]);
        }
    })
    // localStorage.clear();
    // console.log(notesnewObj);
    if(notesnewObj.length!=0)
    {
        localStorage.setItem('notes', JSON.stringify(notesnewObj));
        localStorage.setItem('noteheading', JSON.stringify(headingnewObj));
    }
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


//Adding editable heading
//let b=1;
function funm() {
    
        setTimeout(function() {
            let notextareas=document.getElementsByClassName('textarea');
            if(notextareas.length==1){
            heading.innerHTML=notextareas[0].value;
            }
       // console.log('bi',b);
    
          }, 100);
    
}

let heading=document.getElementById('heading');
heading.addEventListener('click',()=>{
    let notextareas=document.getElementsByClassName('textarea');
    // console.log(notextareas.length);
   
    if(notextareas.length==0)
    {
    heading.innerHTML=`<textarea id="textarea" rows="1" class="textarea">${heading.innerText}</textarea>`;
    }


    if(notextareas.length==1)
    {
    notextareas[0].addEventListener('click',()=>{
        heading.removeEventListener('mouseleave',funm);
        notextareas[0].addEventListener('blur',()=>{
            if(notextareas.length==1){
            heading.innerHTML=notextareas[0].value;
            //b=0;
            }
            //console.log('hi',b);
        
        });
    });
    // notextareas[0].addEventListener('blur',()=>{
    //     if(notextareas.length==1){
    //     heading.innerHTML=notextareas[0].value;
    //     b=0;
    //     }
    //     console.log('hi');
    
    // });
    }

    
    // heading.addEventListener('mouseleave',()=>{
    //     setTimeout(function() {
    //         if(notextareas.length==1){
    //         heading.innerHTML=notextareas[0].value;
    //         }
    //     console.log('hi');
    //       }, 100);
    // });
    
    // notextareas[0].addEventListener('onmouseout',()=>{
    //     if(notextareas.length==1)
    //     heading.innerHTML=notextareas[0].value;
    //     console.log('hi');
    // });
    
});


heading.addEventListener('mouseleave',funm);


//TO MAKE DARK MODE OF WEBSITE

let dark=document.getElementById('widt');

dark.addEventListener('click',()=>{
    if(dark.innerText.includes('Dark Mode'))
    {
    let bodi=document.getElementsByTagName('body');
    bodi[0].setAttribute('style','background-color: #131417; color: #ffffff;');
    dark.innerText='Light Mode';
    //dark.setAttribute('style','background-color: #131417;');
    let cards=document.getElementsByClassName('card-body');
    Array.from(cards).forEach(element=>{
        element.setAttribute('style','background-color: #131417;');
    });
   
    let cont=document.querySelector('.container');
    cont.setAttribute('style','background-color: #131417;');
    }
    else
    {
        
        let bodi=document.getElementsByTagName('body');
        bodi[0].setAttribute('style','background-color: #c8d8e4;color: black;');
        dark.innerText='Dark Mode';
       // dark.setAttribute('style','background-color: #52ab98;');
        let cards=document.getElementsByClassName('card-body');
        Array.from(cards).forEach(element=>{
            element.setAttribute('style','background-color: #ffffff;');
        });
   
    let cont=document.querySelector('.container');
    cont.setAttribute('style','background-color: #8aeec0;');

    }
});

