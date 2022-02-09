import { Body, Controller, Get, Post } from '@nestjs/common';

@Controller('users')
export class UsersController {
  @Get()
  getUsers() {
    return 'Listando todos os usuários!!!';
  }

  @Post()
  create(@Body('name') name, @Body('password') pass) {
    return {
      name,
      pass,
    };
  }
}
