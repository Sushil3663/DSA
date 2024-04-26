function mergeSort(arr) {

    if (arr.length < 2) {
        return arr
    }
    else {

        let m = Math.floor(arr.length / 2);
        let leftArray = arr.slice(0, m);
        let rightArray = arr.slice(m);
        function merge(leftArrays, rightArrays) {
            let temp = [];

            while (leftArrays.length && rightArrays.length) {
                if (leftArrays[0] >= rightArrays[0]) {
                    temp.push(rightArrays.shift());
                }
                else {
                    temp.push(leftArrays.shift());
                }

            }
            return [...temp, ...leftArrays, ...rightArrays]
        }

        return merge(mergeSort(leftArray), mergeSort(rightArray));


    }

}

console.log(mergeSort([-6, 20, 8, -2, 4]))