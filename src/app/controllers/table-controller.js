import Model from '../models/index';

export const getTable = async (req, res) => {
  try {
    const tableData = await Model.tables.findAll({});

    res.json({
      state: 200,
      message: 'success',
      data: tableData,
    });
  } catch (error) {
    console.log(error);
  }
};
