showNotes();
let addBtn = document.getElementById("addBtn");
addBtn.addEventListener("click", function (e) {
    let addTxt = document.getElementById("addTxt");
    let addTitle=document.getElementById("titleTxt");
    let notes = localStorage.getItem("notes");
    let notestitle= localStorage.getItem("notestitle");
    if (notestitle == null) {
        notestitleObj = [];
    }
    else {
        notestitleObj = JSON.parse(notestitle);
    }
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }

    notesObj.push(addTxt.value);
    notestitleObj.push(addTitle.value);
    localStorage.setItem("notestitle", JSON.stringify(notestitleObj));
    localStorage.setItem("notes", JSON.stringify(notesObj));
    addTxt.value = "";
    titleTxt.value="";
    showNotes();
})

function showNotes() {
    let notes = localStorage.getItem("notes");
    let notestitle = localStorage.getItem("notestitle");
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }

     if (notestitle == null) {
        notestitleObj = [];
    }
    else {
        notestitleObj = JSON.parse(notestitle);
    } 
    let html = "";
    for (let index = 0; index < notestitleObj .length; index++) {
        html += `<div class="noteCard my-2 mx-2 card" style="width: 18rem;">
        <div class="card-body"><h5>${ notestitleObj[index]} ${index + 1}</h5>
        
            <p class="card-text"> ${ notesObj[index]}</p>
            <button id="${index}"onclick="deleteNote(this.id)" class="btn btn-primary">Delete Note</button>
        </div>
       </div>`;
        
    }
   /* notesObj.forEach(function (element, index) {
        html += `<div class="noteCard my-2 mx-2 card" style="width: 18rem;">
 <div class="card-body">
     <h5 class="card-title">Note ${index + 1}</h5>
     <p class="card-text"> ${element}</p>
     <button id="${index}"onclick="deleteNote(this.id)" class="btn btn-primary">Delete Note</button>
 </div>
</div>`;
    });*/
    let notesElm = document.getElementById("notes");
    if (notesObj.length != 0) {
        notesElm.innerHTML = html;
    }
    else {
        notesElm.innerHTML = `Nothing to show! Use "Add a Note" section above to add notes.`;
    }
}


function deleteNote(index) {
    let notes = localStorage.getItem("notes");
    let notestitle = localStorage.getItem("notestitle");
    if (notes == null) {
        notesObj = [];
    } else {
        notesObj = JSON.parse(notes);
    }
    if (notestitle == null) {
        notestitleObj = [];
    }
    else {
        notestitleObj = JSON.parse(notestitle);
    } 

    notesObj.splice(index, 1);
    notestitleObj.splice(index, 1);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    localStorage.setItem("notestitle", JSON.stringify(notestitleObj));
    showNotes();
}


let search = document.getElementById('searchTxt');
search.addEventListener("input", function () {

    let inputVal = search.value.toLowerCase();

    let noteCards = document.getElementsByClassName('noteCard');
 
    Array.from(noteCards).forEach(function (element) {
       let cardTxt1 = element.getElementsByTagName("p")[0].innerText;
       let cardTxt2 = element.getElementsByTagName("h5")[0].innerText;
      
        if ((cardTxt2.includes(inputVal)) ||(cardTxt1.includes(inputVal)) ) {
            element.style.display = "block";
        }
        
        else {
            element.style.display = "none";
        }

    })
})
let alertho = document.getElementById("alertho");
alertho.addEventListener("click", function (e){
    alert('Hover the mouse over "welcomes to MyNotes"');
}
);