// const arr = [10, 12, 15, 21];
// for (var i = 0; i < arr.length; i++) {
//     (function print(j){
//       setTimeout(function () {
//         console.log('Index:' + j + ' element: ' + arr[j]);
//       }, 3000);
//     })(i);
// }

const arr = [10, 12, 15, 21];
for (var i = 0; i < arr.length; i++) {
    setTimeout(print.bind(null,i), 3000)
}


function print(j){
    console.log('Index:' + j + ' element: ' + arr[j]);
}
