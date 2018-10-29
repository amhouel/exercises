// Extracting object keys

extractKeyValues = (obj, str) => {
    //const objKeys = Object.keys(obj);
    let arr = [];

    for (let key in obj){
        if (key.substr(0, str.length) === str) {
            arr.push(obj[key]);
        }
    }

    // for (let i=0; i < objKeys.length; i++) {
    //     if (objKeys[i].includes(str)) {
    //         arr.push(obj.objKeys[i]);
    //     }
    // }
    return arr;
}

const ingredients = extractKeyValues(apiData, 'ingredient');

console.log(ingredients);