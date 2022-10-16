var saveBtnEl1 = $('#btn-1');
var saveBtnEl2 = $('#btn-2');
var saveBtnEl3 = $('#btn-3');
var saveBtnEl4 = $('#btn-4');
var saveBtnEl5 = $('#btn-5');
var saveBtnEl6 = $('#btn-6');
var saveBtnEl7 = $('#btn-7');
var saveBtnEl8 = $('#btn-8');
var saveBtnEl9 = $('#btn-9');



var arr = ["a", "b", "c", "d", "e", "f", "g", "h", "i",];

function init () {
    var storedEvents = JSON.parse(localStorage.getItem("arr"));
    if (storedEvents !== null) {
        arr = storedEvents;
        console.log(`This is the saved array on page load ${arr}`);
        renderEvents();
    }
}

// function test (num) {
//     console.log(`The ${num} button worked!`);
// }

function saveTest (id) {
    var eventInput = document.querySelector(`#e${id+9}`);  
    eventText = eventInput.value;
    arr[id] = eventText;
    localStorage.setItem("arr", JSON.stringify(arr));    
    // storeTest(id);
    
    console.log(`This is what is in the array index ${arr[id]}`);
    console.log(`This is the whole array so far ${arr}`);   
    renderEvents();
}

function renderEvents () {
    console.log(`Render Events function`);
    // var inputText = document.querySelector(`#event-text-${}`);
    // inputText.value = arr[];

    for (i = 0; i < arr.length; i++) {
        var inputText = document.querySelector(`#e${i+9}`);
        inputText.value = arr[i];
    }
}

// function storeTest (id) {  
//     console.log('The store funciton');    

// }

saveBtnEl1.on('click', function() {
    console.log(`First button click`);   
    // test(1);
    saveTest(0);
    id = 0;

    // input.classList.add("future");
}) 
  
saveBtnEl2.on('click', function () {
    console.log('Second button click');
    // test(2);
    saveTest(1);
    id = 1;  
})

saveBtnEl3.on('click', function () {
    test(3);
    console.log('Third button click');
})

saveBtnEl4.on('click', function () {
    test(4);
    console.log('Fourth button click');
})

saveBtnEl5.on('click', function () {
    test(5);
    console.log('Fifth button click');
})

saveBtnEl6.on('click', function () {
    test(6);
    console.log('Sixth button click');
})

saveBtnEl7.on('click', function () {
    test(7);
    console.log('Seventh button click');
})

saveBtnEl8.on('click', function () {
    test(8);
    console.log('Eighth button click');
})

saveBtnEl9.on('click', function () {
    test(9);
    console.log('Ninth button click');
})

init ();


var input9 = document.getElementById('e9');
var input10 = document.getElementById('e10');
var input11 = document.getElementById('e11');
var input12 = document.getElementById('e12');
var input13 = document.getElementById('e13');
var input14 = document.getElementById('e14');
var input15 = document.getElementById('e15');
var input16 = document.getElementById('e16');
var input17 = document.getElementById('e17');

checkTime();

function checkTime () {
    var currentTime = moment().format("H");
    Number(currentTime);
    console.log(typeof Number(currentTime));
    console.log(currentTime);
    console.log(typeof input9.id);
    console.log(input9.id);    
    console.log(input9);
    input9 = input9.id;
    input9 = input9.substring(1);
    // console.log(input9)
//  console.log(typeof Number(subTest));

for (i = 0; i < arr.length; i++){
    var loopSelector = `input${i+9}`;
    loopSelector = loopSelector.substring(5);
    // console.log(typeof loopSelector)

    if (Number(loopSelector) < Number(currentTime))  {
        // input9.classList.add("past");
        console.log(" Past Success!")
    } else if (Number(loopSelector) > Number(checkTime) ) {
        // input9.classList.add("future");
        console.log("Future success!")
    } else {
        // input9.classList.add("present");
       console.log("Present success!")
    }
}

}




//To Do
//Fix bug in checkTime fx -->> currently wont' read the .add 


//Change all input id's to numbers corresponding to their times such as in the first timeslot
//Ensure new variable names match their fx that are called
//Change variable names in all test fxs including checkTime fx
//add checktime fx to init fx
//update all remainging timeslots and buttons to match first two test timeslots and buttons
