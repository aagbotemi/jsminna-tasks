//the mean of the filtered array 
const computedMean = arr => {
    let mean = arr.reduce((a, b) => a + b) / arr.length;

    return mean;
}

//the median of the filtered array 
const computedMedian = arr => {
    const middle = Math.floor(arr.length / 2),
        numb = [...arr].sort((a, b) => a - b);

    return arr.length % 2 !== 0 ? numb[middle] : (numb[middle - 1] + numb[middle]) / 2;
}

//the mode of the filtered array 
const computedMode = arr => {
    let mode = arr.reduce((acc, n, i, array) => (new Set(arr)).size === arr.length ? "No Value":
    (array.filter(v => v === acc).length >= array.filter(v => v === n).length?acc:n));
    
    return mode;
}

//filtering the array and computing it to
const compute = (arr) => {
    let filtered = [];

    arr.forEach(item => {
        if (!isNaN(item)) {
            filtered.push(item);
        } else { 
            (Array.from(item)).forEach(tem => {
                if (!isNaN(tem)) { 
                    filtered.push(Number(tem)) 
                }
            });
        }
    });

    const filteredArray = filtered.sort((a, b) => b - a);

    const mean = computedMean(filteredArray); //mean
    const mode = computedMode(filteredArray); //mode
    const median = computedMedian(filteredArray); //median

    //returning the result 
    return {
        filteredArray,
        mean,
        mode,
        median
    }
}
console.log(compute([1, '3ab', 2, 'ef4', 'g3h', 5]));