import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
import { User } from 'src/user/entities/user.entity';
import { CreateContactDto } from '../dto/create-contact.dto';

@Table({ tableName: 'contacts' })
export class Contact extends Model<Contact, CreateContactDto> {
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @Column({
    type: DataType.STRING,
    unique: true,
    allowNull: false,
  })
  name: string;

  @Column({
    type: DataType.STRING,
    unique: true,
    allowNull: false,
  })
  phone: string;

  @ForeignKey(() => User)
  userId: number;

  @BelongsTo(() => User)
  author: User;
}
