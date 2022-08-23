import { Module } from '@nestjs/common';
import { ContactService } from './contact.service';
import { ContactController } from './contact.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Contact } from './entities/contact.entity';
import { User } from 'src/user/entities/user.entity';

@Module({
  imports: [SequelizeModule.forFeature([Contact, User])],
  controllers: [ContactController],
  providers: [ContactService],
})
export class ContactModule {}
