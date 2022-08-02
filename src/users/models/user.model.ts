import { ObjectType, HideField } from '@nestjs/graphql';
import { Post } from 'src/posts/models/post.model';
import { BaseModel } from 'src/common/models/base.model';

@ObjectType()
export class User extends BaseModel {
  email: string;
  firstname?: string;
  lastname?: string;
  role: number;
  posts: Post[];
  @HideField()
  password: string;
}
