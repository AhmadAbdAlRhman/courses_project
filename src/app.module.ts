import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import User from './models/users.module';
@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'mysql',
      host: 'localhost',
      port: 3000, // Default MySQL port is 3306
      username: 'root',
      password: 'Ahmad45@2000',
      database: 'taha',
      models: [User],
      autoLoadModels: true,
      synchronize: true,
    }),
    SequelizeModule.forFeature([User]), // This is needed to use the model in services
  ],
})
export class AppModule {}
