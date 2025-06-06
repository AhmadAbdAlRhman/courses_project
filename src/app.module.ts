import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import User from './models/users.module';
import Admin from './models/admin.module';
import Courses from './models/courses.module';
import UserCourses from './models/user-courses.module';
import course_media from './models/courses_media.module';
@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'mysql',
      host: 'localhost',
      port: 3000, // Default MySQL port is 3306
      username: 'root',
      password: 'Ahmad45@2000',
      database: 'taha',
      models: [User, Admin, Courses, UserCourses, course_media],
      autoLoadModels: true,
      synchronize: true,
    }),
    SequelizeModule.forFeature([
      User,
      Admin,
      Courses,
      UserCourses,
      course_media,
    ]), // This is needed to use the model in services
  ],
})
export class AppModule {}
