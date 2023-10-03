const {Op, Sequelize, where} = require('sequelize');
const days = require('dayjs');
const models = require('../../models');
const dayjs = require("dayjs");
const { categoryExpensesModel } = models();

module.exports = {
    findAllCategoryExpense: async (where) => {
        return categoryExpensesModel.findAll({
            where: { ...where }
        })
    },
    createOrUpdateCategoryExpense: async (model) => {
        return new Promise( async (resolve, reject) => {
            const instanceModel = model.id ? await categoryExpensesModel.findOne(
                { where: { id: model.id }}).catch(reject): null;
            if (instanceModel) {
                model.updatedAt = dayjs().format('YYYY-MM-DD HH:mm:ss');
                categoryExpensesModel.update(model, { where: { id: instanceModel } })
                    .then(() => resolve ({...instanceModel, model}))
                    .catch((e = new Sequelize.UniqueConstraintError) => {
                        e.message = 'Email must be unique update'
                        reject(e)
                    }).catch(err => reject(err))
            } else {
                model.createdAt = dayjs().format('YYYY-MM-DD HH:mm:ss');
                categoryExpensesModel.create(model).then(result => resolve(result))
                    .catch((e = new Sequelize.UniqueConstraintError) => {
                        e.message = 'Email must be unique create'
                        reject(e)
                    }).catch(err => reject(err))
            }
        })
    },
    findCategoryExpenseById: (id) => {
        return new Promise((resolve, reject) => {
            categoryExpensesModel.findOne({
                attributes: ['id', 'name', 'type', 'createdAt', 'updatedAt', 'status'],
                where: {
                    id: id
                }
            }).then(result => resolve(result)).catch(err => reject(err));
        })
    },
    deleteCategoryExpense: async (model) => {
        return new Promise(async (resolve, reject) => {
            return categoryExpensesModel.update({
                updatedAt: dayjs().format('YYYY-MM-DD hh:mm:ss'),
                status: 0
            }, {
                where: {
                    id: model.id
                },
                raw: true
            }).then(result => {
                if ( result ) {
                    resolve(result)
                } else {
                    resolve(null)
                }
            }).catch(err => reject(err))
        })
    }
}
