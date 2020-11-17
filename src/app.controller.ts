import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get(':id')
  getHelloById(): string {
    return 'Hello by ID';
  }

  @Get('byDate')
  getHelloByDate(): string {
    return 'Hello by Date';
  }
}
