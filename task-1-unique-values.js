/**
 * Task 1 — Unique Values
 *
 * Написать функцию, которая принимает массив чисел
 * и возвращает новый массив уникальных значений,
 * сохраняя исходный порядок элементов.
 *
 * Пример:
 * input:  [1, 2, 2, 3, 4, 4, 5]
 * output: [1, 2, 3, 4, 5]
 */


// Вариант 1 - подход через цикл
function getUniqueValues1(arr) {
    let newArr = []
    for (i = 0; i < arr.length; i++) {
        if (!(newArr.includes(arr[i]))) {
            newArr.push(arr[i]);
        }
    }

    return newArr
}

// Пример использования
getUniqueValues1([1, 2, 2, 3, 4, 4, 5])
// -> [1, 2, 3, 4, 5]


// Вариант 2 - подход через filter и findIndex

function getUniqueValues2(arr) {
    const newArr = arr.filter((el, i) => arr.findIndex(el2 => el === el2) === i);

    return newArr
}

// Пример использования
getUniqueValues2([1, 2, 2, 3, 4, 4, 5])
// => [1, 2, 3, 4, 5]
