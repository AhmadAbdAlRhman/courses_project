import {
  Table,
  Column,
  Model,
  DataType,
  PrimaryKey,
  AutoIncrement,
  ForeignKey,
  BelongsTo,
  BelongsToMany,
  HasMany,
} from 'sequelize-typescript';
import Admin from './admin.module';
import User from './users.module';
import UserCourses from './user-courses.module';
import course_media from './courses_media.module';
@Table({
  tableName: 'Courses',
  timestamps: true,
})
class Courses extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column({
    type: DataType.INTEGER.UNSIGNED,
  })
  id!: number;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  name!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  description!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  image!: string;

  @ForeignKey(() => Admin)
  @Column({
    type: DataType.INTEGER.UNSIGNED,
    allowNull: true,
  })
  adminId!: number;

  @BelongsTo(() => Admin)
  admin!: Admin;
  @BelongsToMany(() => User, () => UserCourses)
  users!: User[];
  @HasMany(() => course_media)
  media!: Courses[];
}
export default Courses;
