const { Sequelize, DataTypes } = require('sequelize');

module.exports = {
    tableName: 'Question',
    tableAttributes: {
        que_id: {
            primaryKey: true,
            type: DataTypes.UUID,
            defaultValue: Sequelize.UUIDV4
        },
        que_question: {
            type: DataTypes.STRING
        },
        que_options: {
            type: DataTypes.TEXT
        },
        que_answer: {
            type: DataTypes.TEXT
        },
        que_score: {
            type: DataTypes.DOUBLE
        },
        que_picture_url: {
            type: DataTypes.STRING
        },
        que_category: {
            type: DataTypes.STRING
        }
    },
    buildAssociations: (models) => {
        models.Question.hasMany(models.Task, { foreignKey: 'que_id'} );
    }
}