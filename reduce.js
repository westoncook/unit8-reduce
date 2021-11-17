
function extractValue(arr, key) {
    return arr.reduce((accum, next) =>{
        accum.push(next[key]);
        return accum;
    },[])

}

function toLowerCaseArray(str){
    const lowerCaseStr = str.toLowerCase();
    return Array.from(lowerCaseStr);
}

function vowelCount(str) {
    const arr = toLowerCaseArray(str);
    return arr.reduce((obj, next) => {
        if('aeiou'.indexOf(next) !== -1){
            obj[next] ? obj[next] += 1 : obj[next] = 1;
        }
        return obj;
    },{})
}

function addKeyAndValue(arr, key, value) {
    return arr.reduce((array, next) =>{
        next[key] = value;
        return array;
    },arr)
}

function partition(arr, callback) {
    return arr.reduce((a,b) =>{
        callback(b) ? a[0].push(b) : a[1].push(b);
        return a;
    },[[],[]])
}
