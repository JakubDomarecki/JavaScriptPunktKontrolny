// 1 i 5
const sampleClass = document.querySelectorAll('.sample_class')
const  sampleClass2 = document.querySelector('.sample_class_3').children;
function getTag(elements) {
    const array = [];
    for (let i = 0; i < elements.length; i++){
        array.push(elements[i].tagName);
    }
    return array;
}

console.log(getTag(sampleClass));
console.log(getTag(sampleClass2));



// 2
// const  sampleId = document.getElementById('sample_id');
//
// function getClass(element) {
//     const result = [];
//     element.classList.forEach(function (el) {
//         result.push(el);
//     });
//     return result;
// }
//
// console.log(getClass(sampleId));


// 3
// const sampleClass = document.querySelectorAll('.sample_class_2');
//
// function getInnerText(elements) {
//     const array = [];
//     elements.forEach(function (el) {
//        array.push(el.innerText);
//     });
//     return array
// }
// console.log(getInnerText(sampleClass));

//4
// const links = document.querySelectorAll('a');
// function getAddress(elements) {
//     const array = [];
//     elements.forEach((el) => {
//         array.push(el.href);
//     });
//  return array
// }
// console.log(getAddress(links));

