"use strict";

const calculateTotalBalance = users =>
  users.reduce((totalBalance, user) => totalBalance + user.balance, 0);

console.log(calculateTotalBalance(users)); // 20916

// Получить общую сумму баланса (поле balance) всех пользователей.
