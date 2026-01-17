/**
 * Task 3 — Merge And Sum Objects
 *
 * Даны два объекта, где:
 * - ключи — категории
 * - значения — числа
 *
 * Нужно объединить оба объекта в один,
 * суммируя значения одинаковых ключей.
 *
 * Пример:
 * input:
 * obj1 = { apples: 10, bananas: 5 }
 * obj2 = { bananas: 3, oranges: 7 }
 *
 * output:
 * {
 *   apples: 10,
 *   bananas: 8,
 *   oranges: 7
 * }
 */


function mergeAndSum(obj1, obj2) {
    let newObj = {}
    function checkObj(obj) {
        for (let item of Object.keys(obj)) {
        if (!newObj[item]) {
            newObj[item] = obj[item]
        } else {
            newObj[item] += obj[item]
        }
    }
    }

    checkObj(obj1)
    checkObj(obj2)

    return newObj
}

// Пример использования
console.log(
    mergeAndSum(
  { apples: 10, bananas: 5 },
  { bananas: 3, oranges: 7 }
)
)
// => { apples: 10, bananas: 8, oranges: 7 }