const { categoryExpenseLib, savingsLib, usersLib, expensesLib,  } = require('../index')

// usersLib.findUserByUserName('dmarroquin').then(console.log)
usersLib.createOrUpdateUser({
    id: 4,
    fullName: 'Daniel Marroquin',
    email: 'ejemplo@pruebas.com',
    userName: 'demarroquin',
    password: 'Danibrus111',
    createdAt: '2023-09-25',
    avatar: 'link.com.ec',
    status: 1
}).then(console.log)
// usersLib.findUserById(2).then(console.log)
// expensesLib.findAllExpense().then(console.log)
// expensesLib.createExpenseByUser({
//     id: 11,
//     spentDate: '2023-09-25 22:53:39',
//     description: 'Ejemplo actualizar',
//     amount: 23.79,
//     necessarySpent: 0,
//     userId: 2,
//     categoryId: 3,
//     createdAt: '2023-09-25 22:53:39',
//     status: 1
// }).then(console.log)
// expensesLib.findExpenseByIdUser(3).then(console.log)
// savingsLib.findSavingByIdUser(2).then(console.log)
// savingsLib.findAllSavings().then(console.log)
// categoryExpenseLib.findAllCategoryExpense().then(console.log)
// categoryExpenseLib.findCategoryExpenseById(2).then(console.log)
