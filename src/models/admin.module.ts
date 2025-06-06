import {
  Table,
  Column,
  Model,
  DataType,
  PrimaryKey,
  AutoIncrement,
  Unique,
  HasMany,
} from 'sequelize-typescript';
import Courses from './courses.module';
@Table({
  tableName: 'Admin',
  timestamps: true,
})
class Admin extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column({
    type: DataType.INTEGER.UNSIGNED,
  })
  id!: number;

  @Unique
  @Column({
    type: DataType.STRING(128),
    allowNull: false,
  })
  user_name!: string;

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
  @HasMany(() => Courses)
  courses!: Courses[];
}

export default Admin;
