import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { PostsService } from './posts.service';

@Controller('posts')
@ApiTags('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @Get()
  async index() {
    return await this.postsService.index();
  }

  @Post()
  @ApiOperation({ summary: 'Create posts' })
  async create(@Body() createPostDto: CreatePostDto) {
    await this.postsService.create(createPostDto);
    return {
      success: true,
    };
  }

  @Get(':id')
  @ApiOperation({ summary: 'Detail of the post' })
  detail(@Param('id') id: string) {
    return this.postsService.detail(id);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Edit the post' })
  async update(@Param('id') id: string, @Body() updatePostDto: UpdatePostDto) {
    await this.postsService.update(id, updatePostDto);
    return {
      success: true,
    };
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete the post' })
  async remove(@Param('id') id: string) {
    await this.postsService.remove(id);
    return {
      success: true,
    };
  }
}
