/**
 * Task 2 — Group By Property
 *
 * Есть массив объектов.
 * Нужно сгруппировать их по значению указанного свойства.
 *
 * Пример:
 * input:
 * [
 *   { name: "Anna", role: "admin" },
 *   { name: "Ivan", role: "user" },
 *   { name: "Olga", role: "admin" }
 * ]
 *
 * key: "role"
 *
 * output:
 * {
 *   admin: [
 *     { name: "Anna", role: "admin" },
 *     { name: "Olga", role: "admin" }
 *   ],
 *   user: [
 *     { name: "Ivan", role: "user" }
 *   ]
 * }
 */

function groupBy(arr, key) {
    let result = {}
    for (let item of arr) {
        let property = item[key]
        if (!result[property]) {
            result.property = [item]
        } else {
            result.property.push(item)
        }
    }

    return result
}

// Пример использования
const users = [
  { name: "Anna", role: "admin" },
  { name: "Ivan", role: "user" },
  { name: "Olga", role: "admin" }
];

console.log(groupBy(users, "role"))