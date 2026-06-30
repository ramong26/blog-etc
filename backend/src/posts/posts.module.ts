import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostsController } from './controllers/posts.controller';
import { Post } from './entities/posts.entities';
import { PostsService } from './services/posts.service';

@Module({
    imports: [TypeOrmModule.forFeature([Post])],
    controllers: [PostsController],
    providers: [PostsService],
})
export class PostsModule {}
