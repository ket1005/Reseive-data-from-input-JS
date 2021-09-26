//text
document.querySelector('.b-1').addEventListener('click', () => {
    //let data = document.querySelector('.i-1').value;
    //document.querySelector('.out-1').innerHTML += data;
    document.querySelector('.i-1').value = 123;
});

//number
document.querySelector('.b-2').addEventListener('click', () => {
    let data1 = document.querySelector('.i-2').value;  // receive not a number but string - '4'
    //let data1 = +document.querySelector('.i-2').value;  receive a number - 4
    document.querySelector('.out-2').innerHTML += data1; 
});

//color
document.querySelector('.b-3').addEventListener('click', () => {
    let data = document.querySelector('.i-3').value;
    document.querySelector('.out-3').innerHTML = data;
});
 
//data
document.querySelector('.b-4').addEventListener('click', () => {
    let data = document.querySelector('.i-4').value;  
    document.querySelector('.out-4').innerHTML = data;
});

//range
//document.querySelector('.b-5').addEventListener('click', () => {
document.querySelector('.i-5').addEventListener('input', () => {
    let data = document.querySelector('.i-5').value;
    document.querySelector('.out-5').innerHTML = data;
});

//checkbox
document.querySelector('.b-6').addEventListener('click', () => {
    //let data = document.querySelector('.i-6').value; 
    //if(document.querySelector('.i-6').checked){
    //    document.querySelector('.out-6').innerHTML = data;
    //} else{
    //    document.querySelector('.out-6').innerHTML = '';
    //}
    //document.querySelector('.out-6').innerHTML = data;
   
    if(document.querySelector('.i-6').checked){
        document.querySelector('.i-6').checked = false;
    }else{
        document.querySelector('.i-6').checked = true;
    }
});

//radio
document.querySelector('.b-7').addEventListener('click', () => {
    //let data = document.querySelector('.i-7').value;  -такой подход не выводит value, так как класс у всех одинаковый
  let radio = document.querySelectorAll('.i-7');    //получаем коллекцию элементов
    for (let i = 0; i < radio.length; i++){//перебираем данную коллекцию циклом
        if(radio[i].checked){
           data = radio[i].value;
            break;
        }
    }
        document.querySelector('.out-7').innerHTML = data;
});
 //2-й способ
//     let data = document.querySelectorAll('.i-7');
//    radio[0].checked = true;

//password
document.querySelector('.b-8').addEventListener('click', () => {
    let data8 = document.querySelector('.i-8').value;
    document.querySelector('.out-8').innerHTML = data8;
    document.querySelector('.i-8').value = 123;
});

//email
document.querySelector('.b-9').addEventListener('click', () => {
    let data8 = document.querySelector('.i-9').value;
    document.querySelector('.out-9').innerHTML = data8;
    //document.querySelector('.i-9').value = 123;
});

//select
document.querySelector('.b-10').addEventListener('click', () => {
    let data10 = document.querySelector('.s-10').value;
    document.querySelector('.out-10').innerHTML = data10;
    //document.querySelector('.s-10').value = 'winamp';
});

//textarea
document.querySelector('.b-11').addEventListener('click', () => {
    let data11 = document.querySelector('.t-11').value;
    document.querySelector('.out-11').innerHTML = data11;
    //document.querySelector('.s-10').value = 'winamp';
});

//form
document.querySelector('form').addEventListener('submit', (event) => {  //cобираем данные с формы , при нажатии на кнопку submit
    event.preventDefault(); //метод кот. предотвратит оправку формы на сервер и перезагрузку страницы
    const form = document.querySelector('form');
    console.dir(form.elements.myselect.value);
    form.reset();
    
});
