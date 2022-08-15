import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { Post, PostDocument } from './schemas/post.schema';

@Injectable()
export class PostsService {
  constructor(@InjectModel(Post.name) private postModel: Model<PostDocument>) {}

  async index(): Promise<Post[]> {
    return await this.postModel.find();
  }

  async create(createPostDto: CreatePostDto): Promise<void> {
    await this.postModel.create(createPostDto);
  }

  async detail(id: string) {
    return await this.postModel.findById(id);
  }

  async update(id: string, updatePostDto: UpdatePostDto) {
    await this.postModel.findByIdAndUpdate(id, updatePostDto);
  }

  async remove(id: string) {
    await this.postModel.findByIdAndDelete(id);
  }
}
