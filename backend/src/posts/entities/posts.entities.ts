import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import { MaxLength } from 'class-validator';
import { IsNotEmptyString } from '../../libs/core/validators/is-not-empty-string.decorator';

@Entity('Posts')
export class Post {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column({ length: 255 })
    @IsNotEmptyString()
    @MaxLength(255)
    title!: string;

    @Column('text')
    @IsNotEmptyString()
    description!: string;

    @Column('text')
    @IsNotEmptyString()
    content!: string;

    @Column('text', { array: true, nullable: true })
    tags?: string[];

    @Column({ nullable: true })
    imageUrl?: string;

    @CreateDateColumn()
    createdAt!: Date;

    @UpdateDateColumn()
    updatedAt!: Date;
}
