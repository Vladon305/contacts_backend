import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from './user/entities/user.entity';
import { ContactModule } from './contact/contact.module';
import { AuthModule } from './auth/auth.module';
import { Contact } from './contact/entities/contact.entity';
import { JwtService } from '@nestjs/jwt';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
    }),
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: process.env.POSTGRES_HOST,
      port: Number(process.env.POSTGRES_PORT),
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DB,
      synchronize: true,
      models: [User, Contact],
      autoLoadModels: true,
    }),
    ContactModule,
    AuthModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
