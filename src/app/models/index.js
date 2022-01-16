//원본
// 'use strict'; es6부터는 디폴트로 설정 되어있음.
// import { createRequire } from 'module';
// import { fileURLToPath } from 'url';
import fs from 'fs';
import path from 'path';
import Sequelize from 'sequelize';
import enVariables from '../../../config/config.json';

// const require = createRequire(import.meta.url);
// const __filename = fileURLToPath(import.meta.url);
const basename = path.basename(__filename);
const __dirname = path.resolve();
const env = process.env.NODE_ENV || 'development';
const config = enVariables[env];
// const config = require('../../../config/config.json')[env];
const sequelize = new Sequelize(config.database, config.username, config.password, {
  host: config.host,
  dialect: config.dialect,
  // pool: config.development.pool,
  // operatorsAliases: false, d
});
const dir = path.join(__dirname, '/src/app/models');
const db = {};

// if (config.use_env_variable) {
//   sequelize = new Sequelize(process.env[config.use_env_variable], config);
// } else {
//   sequelize = new Sequelize(config.database, config.username, config.password, config);
// }
// const modelPath = './';
fs.readdirSync(dir)
  .filter((file) => {
    return file.indexOf('.') !== 0 && file !== basename && file.slice(-3) === '.js';
  })
  .forEach((file) => {
    const filePath = path.join(dir, file);
    // eslint-disable-next-line global-require,import/no-dynamic-require
    const model = require(filePath).default(sequelize, Sequelize.DataTypes);

    db[model.name] = model;
  });

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

export default db;
