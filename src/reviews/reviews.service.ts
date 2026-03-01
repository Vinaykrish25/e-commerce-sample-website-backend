import { Injectable } from '@nestjs/common';
import * as fs from 'fs';
import * as path from 'path';

@Injectable()
export class ReviewsService {
  private getData() {
    const filePath = path.resolve(process.cwd(), 'data.json');
    return JSON.parse(fs.readFileSync(filePath, 'utf-8'));
  }

  findAllByProduct(productId: string) {
    return this.getData().reviews.filter(r => r.productId === productId);
  }
}
