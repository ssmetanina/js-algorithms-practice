/**
 * Task 5 — Transform Users To Map
 *
 * Есть массив пользователей.
 * Нужно преобразовать его в структуру данных, где:
 * - ключ — id пользователя
 * - значение — объект без id,
 *   но с дополнительным полем isAdult
 *
 * isAdult:
 * - true, если age >= 18
 * - false, если age < 18
 *
 * Пример:
 * input:
 * [
 *   { id: 1, name: "Anna", age: 22 },
 *   { id: 2, name: "Ivan", age: 16 }
 * ]
 *
 * output:
 * Map {
 *   1 => { name: "Anna", age: 22, isAdult: true },
 *   2 => { name: "Ivan", age: 16, isAdult: false }
 * }
 */

function transformUsers(users) {
  const newUsers = new Map()
  for (item of users) {
    let { id, name, age } = item;
    let isAdult = age >= 18
    newUsers.set(id, {name, age, isAdult})
  }
  return newUsers
}

// Пример использования

const users = [
  { id: 1, name: "Anna", age: 22 },
  { id: 2, name: "Ivan", age: 16 }
];

console.log(transformUsers(users))
// => Map(2) {
//   1 => { name: 'Anna', age: 22, isAdult: true },
//   2 => { name: 'Ivan', age: 16, isAdult: false }
// }

// Возможно использование не Map, а обычного объекта