"use strict";

import users from "./users.js";

const getSortedUniqueSkills = users =>
  users
    .reduce((allSkills, user) => [...allSkills, ...user.skills], [])
    .filter((user, index, arr) => arr.indexOf(user) === index)
    .sort((a, b) => a.localeCompare(b, 'en'));
console.log(getSortedUniqueSkills(users));

// Получить массив всех умений всех пользователей (поле skills),
// при этом не должно быть повторяющихся умений и они должны быть
// отсортированы в алфавитном порядке.

// [ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa','elit',
//  'ex', 'ipsum', 'irure', 'laborum', 'lorem', 'mollit', 'non',
//  'nostrud', 'nulla', 'proident', 'tempor', 'velit', 'veniam' ]
