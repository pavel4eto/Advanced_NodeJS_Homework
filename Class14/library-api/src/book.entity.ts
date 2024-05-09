import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Author } from './author.entity';

@Entity()
export class Book {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  genre: string;

  @ManyToOne(() => Author, (author) => author.books)
  author: Author;

  @Column()
  publisher: string;

  @Column()
  isbn: number;
}