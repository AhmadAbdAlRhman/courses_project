import {
  Table,
  Column,
  Model,
  DataType,
  PrimaryKey,
  AutoIncrement,
  Unique,
} from 'sequelize-typescript';

@Table({
  tableName: 'users',
  timestamps: true,
})
class User extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column({
    type: DataType.INTEGER.UNSIGNED,
  })
  id!: number;

  @Column({
    type: DataType.STRING(128),
    allowNull: false,
  })
  first_name!: string;

  @Column({
    type: DataType.STRING(128),
    allowNull: false,
  })
  second_name!: string;

  @Unique
  @Column({
    type: DataType.STRING(128),
    allowNull: false,
  })
  email!: string;

  @Unique
  @Column({
    type: DataType.STRING(128),
    allowNull: false,
  })
  password!: string;
}

export default User;
