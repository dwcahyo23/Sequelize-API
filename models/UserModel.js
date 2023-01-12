import { Sequelize } from 'sequelize';
import db from '../config/db.js';

const { DataTypes } = Sequelize;

const UserModel = db.define('User', {
  uuid: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  name: DataTypes.STRING(50),
  data: {
    type: DataTypes.JSON,
    // set(data) {
    //   this.setDataValue(JSON.stringify(data));
    // },
    get() {
      const rawValue = this.getDataValue('data');
      return JSON.parse(rawValue);
    },
  },
});

export default UserModel;
