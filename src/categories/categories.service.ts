import { Injectable } from '@nestjs/common';
import * as fs from 'fs';
import * as path from 'path';

@Injectable()
export class CategoriesService {
  private getData() {
    const filePath = path.resolve(process.cwd(), 'data.json');
    return JSON.parse(fs.readFileSync(filePath, 'utf-8'));
  }

  findAll() {
    return this.getData().categories;
  }
}
