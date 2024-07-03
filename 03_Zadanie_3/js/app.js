function  biggestSumOfTwoElements(array) {
    if (array.length === 1) {
        return array[0];
    }

    if (array.length === 0) {
        return false;
    }

    array.sort(function (a, b) {
        return b - a;
    });

    return array[0] + array[1];
}

console.log(biggestSumOfTwoElements([1,3,4,9,11]));