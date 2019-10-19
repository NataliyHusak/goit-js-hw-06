"use strict";

import users from "./users.js";

const getUsersWithEyeColor = (users, eyeColor) =>
  users.filter(user => user.eyeColor === eyeColor);

console.log(getUsersWithEyeColor(users, "blue"));
// [объект Moore Hensley, объект Sharlene Bush, объект Carey Barr]
// Получить массив объектов пользователей по цвету глаз (поле eyeColor).
