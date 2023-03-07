import { Command } from 'nestjs-command';
import { Injectable } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { usersData, rolesData, permissionsData } from './seedData';
import { RoleService } from '../role/role.service';

@Injectable()
export class SeedsService {
  constructor(
    private readonly usersService: UserService,
    private readonly rolesService: RoleService,
  ) {}

  async seedData(dataArray, service, method = 'create') {
    await Promise.all(
      await dataArray.map(async (data) => {
        await service[method](data as any);
      }),
    );
  }

  @Command({ command: 'seed:users', describe: 'create a user' })
  async seedUsers() {
    await this.seedData(usersData, this.usersService);
  }

  @Command({ command: 'seed:roles', describe: 'create roles' })
  async seedRoles() {
    await this.seedData(rolesData, this.rolesService);
  }

  @Command({ command: 'seed:permissions', describe: 'create permissions' })
  async seedPermissions() {
    await this.seedData(permissionsData, this.rolesService, 'createPermission');
  }

  @Command({ command: 'seed:all', describe: 'Seed all data' })
  async seedAll() {
    await this.seedData(usersData, this.usersService);
    await this.seedData(rolesData, this.rolesService);
    await this.seedData(permissionsData, this.rolesService, 'createPermission');
  }
}
