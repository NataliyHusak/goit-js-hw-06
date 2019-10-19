"use strict";

import users from "./users";

users[{}];

const getUserNames = users.map(user => user.name);

console.log(getUserNames);
// [ 'Moore Hensley', 'Sharlene Bush', 'Ross Vazquez', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony']
// Получить массив имен всех пользователей (поле name).
