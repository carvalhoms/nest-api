import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get()
  getUsers() {
    return this.usersService.list();
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
