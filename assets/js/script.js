var saveBtnEl1 = $('#btn-1');
var saveBtnEl2 = $('#btn-2');
var saveBtnEl3 = $('#btn-3');
var saveBtnEl4 = $('#btn-4');
var saveBtnEl5 = $('#btn-5');
var saveBtnEl6 = $('#btn-6');
var saveBtnEl7 = $('#btn-7');
var saveBtnEl8 = $('#btn-8');
var saveBtnEl9 = $('#btn-9');

function test (num) {
    console.log(`The ${num} button worked!`);
}

saveBtnEl1.on('click', function() {
    test(1);
    console.log(`First button click`);
}) 
  
saveBtnEl2.on('click', function () {
    test(2);
    console.log('Second button click');
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