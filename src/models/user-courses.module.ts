import { Table, Column, Model, ForeignKey } from 'sequelize-typescript';
import User from './users.module';
import Course from './courses.module';

@Table
export class UserCourses extends Model {
  @ForeignKey(() => User)
  @Column
  userId!: number;

  @ForeignKey(() => Course)
  @Column
  courseId!: number;
}
export default UserCourses;
