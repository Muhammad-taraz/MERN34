const array = [5,12,4,11];
function customEvery (array, callback){
    let newArray = 0;
    for (let i=0; i<array.length; i++){
        let result = callback (array[i]);
        if (result) {
            newArray+=1;
        }
    }
    if (array.length==newArray){
        return true;
    }
    else {
        return false;
    }
}
const isEven = (item) => {
    return item % 2 == 0;
}
const result = customEvery(array, isEven);
console.log(result); 