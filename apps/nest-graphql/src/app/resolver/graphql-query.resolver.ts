import { Query, Resolver } from '@nestjs/graphql';
import { UserModel } from '../models/user.model';

@Resolver()
export class GraphqlQueryResolver {
  @Query(() => [UserModel], { nullable: true })
  async getUsers() {
    try {
      console.log("Inside Fetching list of users");
      const users: UserModel[] = [
        {
          id: '1',
          firstName: 'Harsh',
          lastName: 'Savaliya',
          email: 'hs@omf.com',
          active: true,
          age: 35,
        },
        {
          id: '2',
          firstName: 'Harsh',
          lastName: 'Savaliya',
          age: 36,
          email: 'hs2@omf.com',
        },
      ];
      console.log(users);
      return users;
    } catch (error) {
      console.error(error);
      throw new Error('Failed to fetch users');
    }
  }
}
