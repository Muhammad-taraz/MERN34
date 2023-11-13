const array = [5,12,4,11];
function customSome (array, callback){
    const newArray = [];
    for (let i=0; i<array.length; i++){
        const result = callback (array[i]);
    }
    return newArray;
}
const isEven = (item) => {
    return item % 2 == 0;
}
const result = customSome (array, isEven);
console.log(result); 