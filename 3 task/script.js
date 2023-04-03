// Isograms //
let str = 'aba';
function isIsogram(str){
    let array = str.toLowerCase().split('');
    for (let i = 0; i < array.length; i++) {
        if (array.indexOf(array[i]) !== array.lastIndexOf(array[i])) {
            return false;
        }
    }
    return true;
}
console.log(isIsogram(str))