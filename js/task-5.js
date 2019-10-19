"use strict";

const getUserWithEmail = (users, email) =>
  users.find(user => user.email === email);

console.log(getUserWithEmail(users, "shereeanthony@kog.com"));
// {объект пользователя Sheree Anthony}
console.log(getUserWithEmail(users, "elmahead@omatom.com"));
// {объект пользователя Elma

// Получить пользоваля (не массив) по email (поле email, он уникальный).