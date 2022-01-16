export default (sequelize, DataTypes) => {
  const tableInfo = sequelize.define(
    'tables',
    {
      idx: {
        type: DataTypes.STRING,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
      },
      data: {
        type: DataTypes.STRING,
      },
    },
    {
      timestamps: false,
    }
  );
  return tableInfo;
};
