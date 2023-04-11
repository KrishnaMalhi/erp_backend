import { Injectable } from '@nestjs/common';

@Injectable()
export class ErpSolutionService {
  getHello(): string {
    return 'Hello World!';
  }
}
