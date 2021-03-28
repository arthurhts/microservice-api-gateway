import { ApiProperty } from '@nestjs/swagger';
import { IUser } from '../interfaces/user.interface';

export class UserDto implements IUser {
  @ApiProperty()
  id: number;

  @ApiProperty()
  name: string;

  @ApiProperty()
  email: string;

  @ApiProperty()
  phone: string;

  @ApiProperty()
  password: string;
}
