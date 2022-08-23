import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateContactDto } from './dto/create-contact.dto';
import { UpdateContactDto } from './dto/update-contact.dto';
import { Contact } from './entities/contact.entity';

@Injectable()
export class ContactService {
  constructor(
    @InjectModel(Contact) readonly contactRepository: typeof Contact,
  ) {}

  async create(createContactDto: CreateContactDto) {
    return await this.contactRepository.create(createContactDto);
  }

  async findAll() {
    return await this.contactRepository.findAll();
  }

  async findOne(id: number) {
    return await this.contactRepository.findOne({ where: { id } });
  }

  async update(id: number, UpdateContactDto: UpdateContactDto) {
    return `This action updates a #${id} user`;
  }

  async remove(id: number) {
    return await this.contactRepository.destroy({ where: { id } });
  }
}
