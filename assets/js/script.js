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

function test (num) {
    console.log(`The ${num} button worked!`);
}

function saveTest (id) {
    var eventInput = document.querySelector(`#event-text-${id}`);  
    eventText = eventInput.value;
    arr[id] = eventText;
    storeTest(id);
    console.log(`This is what is in the array ${arr[id]}`);
    console.log(`This is the whole array so far ${arr}`);   
}

function storeTest (id) {  
    
    console.log('The store funciton');    
    localStorage.setItem("arr", JSON.stringify(arr));


}

saveBtnEl1.on('click', function() {
    console.log(`First button click`);   
    test(1);
    saveTest(0);
    id = 0;
}) 
  
saveBtnEl2.on('click', function () {
    console.log('Second button click');
    test(2);
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

//Moment to do
//if time < 9AM || > 5PM turn grey
//else if time === current time turn red
//else turn green