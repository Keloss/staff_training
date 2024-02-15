const sequelize = require('../db')
const {DataTypes} = require('sequelize')

const Employer = sequelize.define('employer', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    Employer_Name: {type: DataTypes.STRING, allowNull: false},
    email: {type: DataTypes.STRING, unique: true},
    password: {type: DataTypes.STRING},
    role: {type: DataTypes.STRING, defaultValue: 'USER'}
    //Tub_num: {type: DataTypes.INTEGER, unique: true, allowNull: false},
    //PassP_seria: {type: DataTypes.INTEGER, allowNull: false},
    //Passp_num: {type: DataTypes.INTEGER, unique: true, allowNull: false},
    //Passp_date: {type: DataTypes.DATE, allowNull: false}  
})

const worker = sequelize.define('worker', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, allowNull: false},
    tub: {type: DataTypes.INTEGER, unique: true, allowNull: false},
})

const group = sequelize.define('group', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    group_name: {type: DataTypes.STRING, unique: true, allowNull: false}
})

const WGroup = sequelize.define('WGroup', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    workerId: {type: DataTypes.INTEGER},
    groupId: {type: DataTypes.INTEGER}
})

worker.hasMany(WGroup)
WGroup.belongsTo(worker)

group.hasMany(WGroup)
WGroup.belongsTo(group)

module.exports = {
    Employer,
    worker,
    group,
    WGroup
}