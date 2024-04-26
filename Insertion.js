function AscInsertion(arr) {
    let i, USE, j;
    for (i = 1; i < arr.length; i++) {
        j = i - 1;
        USE = arr[i];
        while (j >= 0 && arr[j] > USE) {
            arr[j + 1] = arr[j];
            j = j - 1;
        }
        arr[j + 1] = USE;


    }
    return arr;

}

console.log(AscInsertion([20, -6, 22, 8, -2, 4]))

function DescInsertion(arr) {
    let i, USE, j;
    for (i = 1; i < arr.length; i++) {
        j = i - 1;
        USE = arr[i];
        while (j >= 0 && arr[j] < USE) {
            arr[j + 1] = arr[j];
            j = j - 1;
        }
        arr[j + 1] = USE;


    }
    return arr;

}

console.log(DescInsertion([20, -6, 22, 8, -2, 4]))