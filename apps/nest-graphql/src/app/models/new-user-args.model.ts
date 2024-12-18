import { ArgsType, Field } from '@nestjs/graphql';

@ArgsType()
export class NewUserArgsModel {
  @Field({ nullable: true })
  firstName?: string;
  @Field({ nullable: true })
  lastName?: string;
  @Field({ nullable: true })
  email?: string;
  @Field({ nullable: true })
  active?: boolean;
  @Field({ nullable: true })
  age?: number;
}
