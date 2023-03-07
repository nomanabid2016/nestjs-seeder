import { Module } from '@nestjs/common';
import { CommandModule } from 'nestjs-command';
import { SeedsService } from './seed.service';
import { UserModule } from '../user/user.module';
import { RoleModule } from '../role/role.module';

@Module({
  imports: [CommandModule, UserModule, RoleModule],
  providers: [SeedsService],
})
export class SeedsModule {}
