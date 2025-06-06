import {
  Table,
  Column,
  Model,
  DataType,
  PrimaryKey,
  AutoIncrement,
  Unique,
  BelongsToMany,
} from 'sequelize-typescript';
import UserCourses from './user-courses.module';
import Course from './courses.module';
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

  @BelongsToMany(() => Course, () => UserCourses)
  courses!: Course[];
}

export default User;
