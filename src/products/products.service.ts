import { Injectable, NotFoundException } from '@nestjs/common';
import * as fs from 'fs';
import * as path from 'path';

@Injectable()
export class ProductsService {
  private getData() {
    const filePath = path.resolve(process.cwd(), 'data.json');
    return JSON.parse(fs.readFileSync(filePath, 'utf-8'));
  }

  findAll() {
    return this.getData().products;
  }

  findOne(id: string) {
    const product = this.getData().products.find(p => p.id === id);
    if (!product) throw new NotFoundException('Product not found');
    return product;
  }
}
