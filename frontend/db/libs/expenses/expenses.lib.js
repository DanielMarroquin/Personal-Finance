const { Sequelize, where, Op} = require('sequelize');
const dayjs = require('dayjs');
const models = require('../../models');
const { expensesModel } = models();

module.exports = {
    findAllExpense: async (where) => {
        return expensesModel.findAll({
            where: { ... where }
        })
    },
    createExpenseByUser: async (model) => {
        try {
            return new Promise(async (resolve, reject) => {
                const expenseModel = model.id ? await expensesModel.findByPk(model.id) : null;
                if (expenseModel) {
                    model.updatedAt = dayjs().format('YYYY-MM-DD HH:mm:ss');
                    expenseModel.update(model)
                        .then(() => resolve({ ...expenseModel, ...model }))
                        .catch((err) => {
                            if (err instanceof Sequelize.UniqueConstraintError) {
                                err.message = 'Id must be unique update';
                            }
                            reject(err);
                        });
                } else {
                    model.createdAt = dayjs().format('YYYY-MM-DD HH:mm:ss');
                    expensesModel.create(model)
                        .then((result) => resolve(result))
                        .catch((err) => {
                            if (err instanceof Sequelize.UniqueConstraintError) {
                                err.message = 'Id must be unique create';
                            }
                            reject(err);
                        });
                }
            });
        } catch (error) {
            throw error;
        }
    },

    // createExpenseByUser: async (model) => {
    //     try {
    //         return new Promise(async (resolve, reject) => {
    //             const expenseModel = model.id ? await expensesModel.findByPk(
    //                 { where: { id: model.id }}).catch(reject): null;
    //             if ( expenseModel ) {
    //                 model.updatedAt = dayjs().format('YYYY-MM-DD HH:mm:ss');
    //                 expenseModel.update(model, { where: { id: expenseModel } })
    //                     .then(() => resolve ( { ...expenseModel, model } ))
    //                     .catch((e = new Sequelize.UniqueConstraintError) => {
    //                         e.message = 'Id must be unique update'
    //                     }).catch(err => reject(err));
    //             } else {
    //                 model.createdAt = dayjs().format('YYYY-MM-DD HH:mm:ss');
    //                 console.log(model, 'nmodelll')
    //                 expenseModel.create(model).then(result => resolve(result))
    //                     .catch((e = new Sequelize.UniqueConstraintError) => {
    //                         e.message = 'Id must be unique create'
    //                     }).catch(err => reject(err))
    //             }
    //         })
    //     } catch (error) {
    //         if (error instanceof Sequelize.UniqueConstraintError) {
    //             error.message = model.id
    //                 ? 'Id must be unique update'
    //                 : 'Id must be unique create';
    //         }
    //         throw error;
    //     }
    // },
    // findExpenseByIdUser: async (userid) => {
    //     return new Promise( (resolve, reject) => {
    //         expensesModel.findAll({
    //             attributes: ['id', 'spentDate', 'description', 'amount'],
    //             where: [
    //                 { user_id: userid, status: {[Op.in]: [1]} },
    //             ],
    //             raw: true
    //         }).then(async result => {
    //             resolve(result)
    //         }).catch(err => reject(err))
    //     } )
    // }
    findExpenseByIdUser: async (userid) => {
        try {
            return await expensesModel.findAll({
                attributes: ['id', 'spentDate', 'description', 'amount'],
                where: {
                    user_id: userid,
                    status: {[Op.in]: [1]}
                },
                raw: true
            });
        } catch (err) {
            throw err;
        }
    }

}
