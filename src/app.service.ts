import { Injectable } from '@nestjs/common';
import WhriteFile from './util/write-json-file'

@Injectable()
export class AppService {
  async writeProducts() {
    return await WhriteFile.setProduct()
  }
}
