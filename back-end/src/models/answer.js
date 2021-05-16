const { Sequelize, DataTypes } = require('sequelize');

module.exports = {
    tableName: 'Answer',
    tableAttributes: {
        ans_id: {
            primaryKey: true,
            type: DataTypes.UUID,
            defaultValue: Sequelize.UUIDV4
        },
        ans_answer: {
            type: DataTypes.TEXT
        },
        ans_score: {
            type: DataTypes.DOUBLE
        },
        ans_time_to_answer: {
            type: DataTypes.DOUBLE
        },
        ans_attempts_number: {
            type: DataTypes.BIGINT
        },
        ans_recorded_audio_path: {
            type: DataTypes.STRING
        }
    },
    buildAssociations: (models) => {}
}