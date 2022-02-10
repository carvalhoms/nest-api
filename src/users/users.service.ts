import { BadRequestException, Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  list() {
    return 'Listando todos os usuários com users.service';
  }

  save(data: any) {
    if (!data.name) {
      throw new BadRequestException('Informe o nome do usuário');
    }

    return 'Dados salvos com sucesso';
  }

  get(id: number) {
    return `Visualizando o usuário ${id}`;
  }

  remove(id: number) {
    return `Exclui o usuário com id ${id}`;
  }
}
