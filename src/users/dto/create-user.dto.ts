import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({
    default: 'test@test.ru',
  })
  email: string;

  @ApiProperty({
    default: 'Илья Сидоренко',
  })
  fullname: string;

  @ApiProperty({
    default: '123',
  })
  password: string;
}
