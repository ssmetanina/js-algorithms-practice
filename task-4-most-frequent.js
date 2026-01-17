/**
 * Task 4 — Find Most Frequent Value
 *
 * Написать функцию, которая находит
 * самое часто встречающееся значение в массиве.
 *
 * Пример:
 * input:
 * ["a", "b", "a", "c", "b", "a"]
 *
 * output:
 * "a"
 */

function findMostFrequent(arr) {
    let newObj = {}
    for (const item of arr) {
        if (!Object.hasOwn(newObj, item)) {
            newObj[item] = 1
        } else {
            newObj[item] += 1
        }
    }
    let maxValue = 0;
    let maxKey = null;

    for (const objArr of Object.entries(newObj)) {
        if (objArr[1] > maxValue) {
            maxValue = objArr[1]
            maxKey = objArr[0]
        }
    }

    return maxKey;
}

// Пример использования
console.log(
    findMostFrequent(["a", "b", "a", "c", "b", "a"])
);
// → "a"