import Sequelize, { Model } from 'sequelize';

class Meetup extends Model {
  static init(sequelize) {
    super.init(
      {
        description: Sequelize.STRING,
        title: Sequelize.STRING,
        place: Sequelize.DATE,
        date: Sequelize.DATE,
      },
      { sequelize }
    );

    return this;
  }

  static associate(models) {
    this.belongsTo(models.User, { foreignKey: 'user_id', as: 'user' });
    this.belongsTo(models.User, { foreignKey: 'file_id', as: 'file' });
  }
}

export default Meetup;
