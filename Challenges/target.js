function hasSubarrayWithSum(arr, target) {
    let start = 0;
    let currentSum = 0;

    for (let end = 0; end < arr.length; end++) {
        currentSum += arr[end];

        while (currentSum > target) {
            currentSum -= arr[start];
            start++;
        }

        if (currentSum === target) {
            return true;
        }
    }

    return false;
}

function runUnitTests(arr, target, expected) {
    const output = hasSubarrayWithSum(arr, target);
    console.log(`Given Array = ${JSON.stringify(arr)}, target = ${target}`);
    console.log("output = " + output);
    console.log(output === true ? "Target found" : "Target not found");
    console.log('');
}

const unitTests = [
    { arr: [4, 2, 7, 1, 9], target: 17, expected: true },    //  7 + 1 + 9 = 17 
    { arr: [1, 2, 3, 4], target: 9, expected: true },         //  2 + 3 + 4 = 9
    { arr: [1, 2, 3, 4], target: 10, expected: true },        //  1 + 2 + 3 + 4 = 10
    { arr: [1, 2, 3, 4], target: 11, expected: false },       //  No subarray with sum 11
    { arr: [0, 0, 0, 0], target: 0, expected: true },         //  0 + 0 + 0 = 0
    { arr: [0, 0, 0, 0], target: 3, expected: false },        //  No subarray with sum 3  
    { arr: [5], target: 10, expected: false },                 //  No subarray with sum 10  
   
];

unitTests.forEach((test) => {
    runUnitTests(test.arr, test.target, test.expected);
});