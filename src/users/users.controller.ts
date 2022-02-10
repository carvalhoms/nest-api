import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { get } from 'http';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get()
  index() {
    return this.usersService.list();
  }

  @Post()
  create(@Body() body) {
    return this.usersService.save(body);
  }

  @Get(':id')
  show(@Param('id') id) {
    this.usersService.get(id);

    return this.usersService.get(id);
  }

  @Put(':id')
  update(@Param('id') id, @Body() body) {
    this.usersService.get(id);

    return this.usersService.save(body);
  }

  @Delete(':id')
  delete(@Param('id') id) {
    this.usersService.get(id);

    return this.usersService.remove(id);
  }
}
