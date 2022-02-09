import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  list() {
    return 'Listando todos os usuários com users.service';
  }
}
