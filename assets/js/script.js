//Variables for save buttons, display date, and array that houses user input
var saveBtnEl0 = $('#btn-0');
var saveBtnEl1 = $('#btn-1');
var saveBtnEl2 = $('#btn-2');
var saveBtnEl3 = $('#btn-3');
var saveBtnEl4 = $('#btn-4');
var saveBtnEl5 = $('#btn-5');
var saveBtnEl6 = $('#btn-6');
var saveBtnEl7 = $('#btn-7');
var saveBtnEl8 = $('#btn-8');
var displayDate = moment().format('dddd MMM Do YY')
var arr = ["", "", "", "", "", "", "", "", "",];

//Init fx that displays current date and sets local storage data into array and calls renderEvents if data is present
function init () {
    document.getElementById('currentDay').innerHTML = displayDate;
    var storedEvents = JSON.parse(localStorage.getItem("arr"));
    if (storedEvents !== null) {
        arr = storedEvents;
        renderEvents();
    }
}

//Save fx that sets user input data into local storage
function saveInput (id) {
    var eventInput = document.querySelector(`#e${id+9}`);  
    eventText = eventInput.value;
    arr[id] = eventText;
    localStorage.setItem("arr", JSON.stringify(arr));     
    renderEvents();
}

//Render fx that displays array data into input fields
function renderEvents () {
    for (i = 0; i < arr.length; i++) {
        var inputText = document.querySelector(`#e${i+9}`);
        inputText.value = arr[i];
    }
}

//Button functionality to call saveInput fx
saveBtnEl0.on('click', function() { 
    saveInput(0);
    id = 0;
})   
saveBtnEl1.on('click', function () {
    saveInput(1);
    id = 1;  
})
saveBtnEl2.on('click', function () {
    saveInput(2);
    id = 2;  
})
saveBtnEl3.on('click', function () {
    saveInput(3);
    id = 3;  
})
saveBtnEl4.on('click', function () {
    saveInput(4);
    id = 4;  
})
saveBtnEl5.on('click', function () {
    saveInput(5);
    id = 5;  
})
saveBtnEl6.on('click', function () {
    saveInput(6);
    id = 6;  
})
saveBtnEl7.on('click', function () {
    saveInput(7);
    id = 7;  
})
saveBtnEl8.on('click', function () {
    saveInput(8);
    id = 8;  
})

//Fx that compares current time to timeblock and applies appropriate class styling
function checkTime () {
    const timeBlocks = document.querySelectorAll(".form-control");
    for (var i = 0; i < timeBlocks.length; i++) {
        blockId = timeBlocks[i].id
        blockId = blockId.substring(1);
        blockId = Number(blockId);
        var momentTime = moment().format("H");
        momentTime = Number(momentTime);
        if (blockId < momentTime) {
            var timeBlockEl = document.getElementById(`e${i+9}`);
            timeBlockEl.classList.add("past");
        } else if (blockId > momentTime) {
            var timeBlockEl = document.getElementById(`e${i+9}`);
            timeBlockEl.classList.add("future");
        } else {
            var timeBlockEl = document.getElementById(`e${i+9}`);
            timeBlockEl.classList.add("present");
        }
    }

}

//Calls init and checkTime fx's
init ();
checkTime();