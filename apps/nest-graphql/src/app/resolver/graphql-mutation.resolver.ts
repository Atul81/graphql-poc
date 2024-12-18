import { Args, Mutation, ResolveField, Resolver } from '@nestjs/graphql';
import { UserModel } from '../models/user.model';
import { AppService } from '../app.service';
import { NewUserArgsModel } from '../models/new-user-args.model';

@Resolver(() => UserModel)
export class GraphqlMutationResolver {
  constructor(private appService: AppService) {}

  @Mutation(() => UserModel, { nullable: true })
  async createUser(@Args() userModel: NewUserArgsModel): Promise<UserModel> {
    this.appService.createUser(userModel);
    return new UserModel(
      '1',
      userModel.firstName,
      userModel.lastName,
      userModel.email,
      userModel.age,
      userModel.active
    );
  }
}
