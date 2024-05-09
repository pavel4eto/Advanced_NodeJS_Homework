import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Author } from './author.entity';
import { AuthorRepository } from './author.repository';

@Injectable()
export class AuthorService {
  constructor(
    @InjectRepository(AuthorRepository)
    private authorRepository: AuthorRepository,
  ) {}

  async create(author: Author): Promise<Author> {
    return this.authorRepository.save(author);
  }

  async findAll(): Promise<Author[]> {
    return this.authorRepository.find();
  }

  async findOne(id: number): Promise<Author> {
    return this.authorRepository.findOne(id);
  }

  async update(id: number, author: Author): Promise<Author> {
    return this.authorRepository.update(id, author).then(() =>
      this.findOne(id),
    );
  }

  async delete(id: number): Promise<void> {
    await this.authorRepository.delete(id);
  }
}