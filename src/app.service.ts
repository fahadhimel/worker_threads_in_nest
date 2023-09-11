import { Injectable } from '@nestjs/common';
import { Worker } from 'worker_threads';

@Injectable()
export class AppService {
  private sum: number;
  constructor() {
    this.sum = 0;
  }
  getHello(): number {
    return this.sum;
  }

  getWorker(): any {
    const worker = new Worker('./src/worker.ts', {
      workerData: {
        message: 'hello worker',
      },
    });
    let rs = 0;
    worker.on('message', (data) => {
      console.log(data);
      rs = data;
    });

    return rs;
  }
}
