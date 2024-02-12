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

const Police_Department = sequelize.define('Police_Department', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    Police_Department_name: {type: DataTypes.STRING, unique: true, allowNull: false},
    Police_Department_code: {type: DataTypes.INTEGER, unique: true, allowNull: false}
})

const Department = sequelize.define('Department', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    Department_name: {type: DataTypes.STRING, unique: true, allowNull: false},
    Short_Department_name: {type: DataTypes.STRING, unique: true, allowNull: false}
})

const Course = sequelize.define('Course', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    Exam_date: {type: DataTypes.DATE, allowNull: false},
    Exam_result: {type: DataTypes.INTEGER, allowNull: false}
})

const Status = sequelize.define('Status', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    Status: {type: DataTypes.STRING, allowNull: false}
})

const Student = sequelize.define('Student', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true}
})

const Theme_training = sequelize.define('Theme_training', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    Them_name: {type: DataTypes.STRING, unique: true, allowNull: false}
})

const Position = sequelize.define('Position', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    Position_name: {type: DataTypes.STRING, allowNull: false}
})

const Tutor = sequelize.define('Tutor', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
})

const Division = sequelize.define('Division', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    Division_name: {type: DataTypes.STRING, allowNull: false}
})

const Teacher = sequelize.define('Teacher', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
})

const Teacher_type = sequelize.define('Teacher_type', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
})

const Member_category = sequelize.define('Member_category', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    Member_category_name: {type: DataTypes.STRING, unique: true, allowNull: false}
})

const Comission = sequelize.define('Comission', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    Comission_name: {type: DataTypes.STRING, unique: true, allowNull: false}
})

const Comission_member = sequelize.define('Comission_member', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
})

Police_Department.hasMany(Employer)
Employer.belongsTo(Police_Department)

Department.hasMany(Employer)
Employer.belongsTo(Department)

Employer.hasMany(Course)
Course.belongsTo(Employer)

Status.hasMany(Employer)
Employer.belongsTo(Status)

Student.hasMany(Employer)
Employer.belongsTo(Student)

Theme_training.hasMany(Course)
Course.belongsTo(Theme_training)

Theme_training.hasMany(Student)
Student.belongsTo(Theme_training)

Position.hasMany(Employer)
Employer.belongsTo(Position)

Employer.hasMany(Tutor)
Tutor.belongsTo(Employer)

Division.hasMany(Tutor)
Tutor.belongsTo(Division)

Division.hasMany(Comission_member)
Comission_member.belongsTo(Division)

Division.hasMany(Employer)
Employer.belongsTo(Division)

Employer.hasMany(Comission_member)
Comission_member.belongsTo(Employer)

Member_category.hasMany(Comission_member)
Comission_member.belongsTo(Member_category)

Comission.hasMany(Comission_member)
Comission_member.belongsTo(Comission)

Employer.hasMany(Teacher)
Teacher.belongsTo(Employer)

Teacher.hasMany(Theme_training)
Theme_training.belongsTo(Teacher)

Teacher_type.hasMany(Teacher)
Teacher.belongsTo(Teacher_type)

module.exports = {
    Employer,
    Police_Department,
    Department,
    Course,
    Status,
    Student,
    Theme_training,
    Position,
    Tutor,
    Division,
    Comission_member,
    Comission, 
    Member_category, 
    Teacher,
    Teacher_type
}