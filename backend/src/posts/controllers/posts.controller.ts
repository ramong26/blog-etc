import {
    Controller,
    // Get,
    // Post, Req
} from '@nestjs/common';
// import { PostsInfo, CreatePostDto } from '../PostsInfo';

@Controller('posts')
export class PostsController {
    // @Get()
    // getPosts(): Promise<PostsInfo[]> {
    //     return Promise.resolve([
    //         {
    //             id: 1,
    //             title: 'First Post',
    //             content: 'This is the content of the first post.',
    //             imageUrl: 'https://example.com/image1.jpg',
    //             createdAt: new Date(),
    //             updatedAt: new Date(),
    //         },
    //         {
    //             id: 2,
    //             title: 'Second Post',
    //             content: 'This is the content of the second post.',
    //             imageUrl: 'https://example.com/image2.jpg',
    //             createdAt: new Date(),
    //             updatedAt: new Date(),
    //         },
    //     ]);
    // }
    // @Post()
    // async createPost(
    //     @Req() request: Request,
    //     @Body() body: CreatePostDto,
    // ): Promise<void> {
    //     await this
    // }
}
