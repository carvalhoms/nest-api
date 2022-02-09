import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';

@Controller('users')
export class UsersController {
  @Get()
  getUsers() {
    return 'Listando todos os usuários!!!';
  }

  @Post()
  create(@Body() body) {
    return body;
  }

  @Put(':id')
  update(@Param('id') idUser: number) {
    return idUser;
  }
}
