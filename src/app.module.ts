import { Module, CacheModule } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './modules/user/user.module';
import { ConfigModule } from '@nestjs/config';
import { SeedsModule } from './modules/seed/seed.module';
import { RoleModule } from './modules/role/role.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.MONGO_URL),
    UserModule,
    RoleModule,
    SeedsModule,
  ],
  providers: [],
})
export class AppModule {}
