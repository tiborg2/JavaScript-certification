function bouncer(arr) {
    for (let i=0; i<arr.length;i++){
        if ( arr[i] == null || arr[i] === 0 || arr[i] === "") {
            arr[i] = false;
        }
    }
    let temp = [];
    for (let i=0; i<arr.length;i++){
        if (arr[i] != false){
            temp.push(arr[i]);
        } 
    }
    let rez = [];
    for (i=0; i<temp.length;i++){
        if (Number.isInteger(temp[i]) || typeof(temp[i]) === "string"){
            rez.push(temp[i])
        } 
    }
    return rez;
}
console.log(bouncer([false, null, 0, NaN, undefined, "", 1, 'a', ',']))
console.log(bouncer([7, "ate", "", false, 9]))

console.log(arr)
console.log(temp)
console.log(rez)

//false, null, 0, "", undefined, and NaN