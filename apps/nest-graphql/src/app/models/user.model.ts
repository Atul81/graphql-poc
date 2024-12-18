import { Field, InputType, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class UserModel {
  @Field((type) => Int)
  id: string;
  @Field({ nullable: true })
  firstName?: string;
  @Field({ nullable: true })
  lastName?: string;
  @Field({ nullable: true })
  email?: string;
  @Field({ nullable: true })
  active?: boolean;
  @Field((type) => Int, { nullable: true })
  age?: number;

  constructor(id:string, firstName: string, lastName: string, email: string, age: number, active: boolean) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.age = age;
    this.active = active;
  }
}
