import { Injectable } from '@nestjs/common';
import { NewUserArgsModel } from './models/new-user-args.model';

@Injectable()
export class AppService {
  getData(): { message: string } {
    return { message: 'Hello API' };
  }

  createUser(userModel: NewUserArgsModel): { message: string } {
    console.log(userModel);
    return { message: 'Request received' };
  }
}
