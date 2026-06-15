// import { Entity, Column } from 'typeorm';
// import { Expose } from 'class-transformer';
// import { MaxLength } from 'class-validator';

// @Entity()
// export class Post {
//     @Expose()
//     id: number;

//     @Expose()
//     @Column()
//     // @IsNotEmptyString() <- lib 폴더에 생성해야 함
//     @MaxLength(255)
//     title: string;

//     @Expose()
//     @Column()
//     content: string;

//     @Expose()
//     @Column()
//     tags?: string[];

//     @Expose()
//     @Column()
//     imageUrl?: string;

//     @Expose()
//     @Column()
//     createdAt: Date;

//     @Expose()
//     @Column()
//     updatedAt: Date;
// }
