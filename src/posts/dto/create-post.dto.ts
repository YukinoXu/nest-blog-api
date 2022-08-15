import { ApiProperty } from '@nestjs/swagger';

export class CreatePostDto {
  @ApiProperty({
    description: 'The title of the post',
    example: 'Title of post 1',
  })
  title: string;
  @ApiProperty({
    description: 'The content of the post',
    example: 'Content of post 1',
  })
  content: string;
}
