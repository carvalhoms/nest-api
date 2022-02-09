import { Controller, Get, Post } from '@nestjs/common';

@Controller('users')
export class UsersController {
  @Get()
  getUsers() {
    return 'Listando todos os usuários!!!';
  }

  @Post()
  create() {
    return 'Usuário criado com sucesso!!!';
  }
}
