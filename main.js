//
// - створити функцію яка обчислює та повертає площу прямокутника висотою
function s(a,b) {
    return a*b;
}
let areaRectangle = s(2,4)
console.log(areaRectangle);

// - створити функцію яка обчислює та повертає площу кола
function c(a) {
    let p = [3.14];
    return p*(a*2)
}
let areaCircle = c(25);
console.log(areaCircle);

// - створити функцію яка обчислює та повертає площу циліндру
function cyl(r,h) {
    return 2*(r*h)
}
let areaCylinder = cyl(10, 20);
console.log(areaCylinder);

// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);
function funcRElement(){
    let min = arguments[0];
    let max = arguments[0];
    for (const funRandomElement of arguments) {
        if (funRandomElement > max) max = funRandomElement;
        if (funRandomElement < min) max = funRandomElement;
    }
    console.log("max ",max);
    return min;
}
const min = funcRElement(2,3,4,5,6,7,8);
console.log("min ",min);

// - створити функцію яка  створює блок з текстом. Текст задати через аргумент
function block(text) {
    document.write(`
    <div>
    <p>${text}</p>
</div>
    `)
}
block('hello')
// - створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
function ulLi(msg) {
    document.write(`
        <ul>
            <li>${msg}</li>
            <li>${msg}</li>
            <li>${msg}</li>
        </ul>
   ` )
}
ulLi('text')
// - створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

function newUlLi(text, number) {
    document.write(`<ul>`);
    for(let i = 0; i <number; i++){
        document.write(`<li>${text}</li>`);
    }
    document.write(`</ul>`);
}
newUlLi('wow', 5)

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

function prim(other) {
    document.write(`<ul>`);
    for (let i of other){
        document.write(`<li>${other}</li>`);
    }
    document.write(`<ul>`);
}
let type = [1, true, 'one', false, 5, 'two']
prim(type);
console.log(type);
// function prim(numbers, stings, bool) {
//     document.write(`<ul>`);
//     for(let i = 0; i <1; i++){
//         document.write(`<li>${numbers}</li>`);
//         document.write(`<li>${stings}</li>`);
//         document.write(`<li>${bool}</li>`);
//     }
//     document.write(`<ul>`);
// }
// prim(10, 'text2', true)
// prim(20, 'text3', false)
//
// function prim1(primitive) {
//     document.write(`<ul>`);
//     for(let i = 0; i <1; i++){
//         document.write(`<li>${primitive}</li>`);
//     }
//     document.write(`</ul>`);
// }
// prim1(10)
// prim1(`text`)
// prim1(false)