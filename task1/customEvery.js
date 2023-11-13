const array = [5,12,4,11];
function customEvery (array, callback){
    const newArray = [];
    for (let i=0; i<array.length; i++){
        const result = callback (array[i]);
    }
    return newArray;
}
const isEven = (item) => {
    return item % 2 == 0;
}
const result = customEvery(array, isEven);
console.log(result); 