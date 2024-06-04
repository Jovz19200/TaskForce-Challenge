// function to transform a string based on its length

function transformString(str) {
    let transformedStr = str;

    // I used 15 because it is a product of 3 and 5

    if (str.length % 15 === 0) {
        transformedStr = transformedStr.split('').reverse().join('');
        //charCodeAt() function returns the Unicode of the character at the specified index 
        transformedStr = transformedStr.split('').map(char => char.charCodeAt(0)).join(' ');
    } 
    
    else if (str.length % 3 === 0) {
        transformedStr = transformedStr.split('').reverse().join('');
    } 
    
    else if (str.length % 5 === 0) {
        transformedStr = transformedStr.split('').map(char => char.charCodeAt(0)).join(' ');
    }

    return transformedStr;
}

console.log(transformString("Chocolate Chip Cookie")); // olleh
console.log(transformString("Chocolate Chips")); 