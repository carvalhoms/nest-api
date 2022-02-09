import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';

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
  update(@Param('id') idUser, @Body() bodyUpdate) {
    return {
      idUser,
      bodyUpdate,
    };
  }

  @Delete(':id')
  remove(@Param('id') id) {
    return {
      id,
      message: `Removendo usuário com id ${id}`,
    };
  }
}
