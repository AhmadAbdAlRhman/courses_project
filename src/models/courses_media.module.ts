import {
  Table,
  Column,
  PrimaryKey,
  AutoIncrement,
  Model,
  DataType,
  ForeignKey,
} from 'sequelize-typescript';
import Courses from './courses.module';

@Table({
  tableName: 'course_media',
  timestamps: true,
})
class course_media extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column({
    type: DataType.INTEGER.UNSIGNED,
  })
  id!: number;

  @ForeignKey(() => Courses)
  @Column({
    type: DataType.INTEGER.UNSIGNED,
    allowNull: true,
  })
  adminId!: number;

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  media_address!: string;

  @ForeignKey(() => Courses)
  @Column({
    type: DataType.INTEGER.UNSIGNED,
    allowNull: true,
  })
  course_Id!: number;
}
export default course_media;
