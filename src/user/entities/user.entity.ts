import { Column, DataType, HasMany, Model, Table } from 'sequelize-typescript';
import { Contact } from 'src/contact/entities/contact.entity';
import { CreateUserDto } from '../dto/create-user.dto';

@Table({ tableName: 'users' })
export class User extends Model<User, CreateUserDto> {
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
  email: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  password: string;

  @HasMany(() => Contact)
  contacts: Contact[];
}
