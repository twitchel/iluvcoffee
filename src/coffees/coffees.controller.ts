import { Controller, Get } from '@nestjs/common';

@Controller('coffees')
export class CoffeesController {
  @Get('flavours')
  findAll(): string {
    return 'This will return all coffees';
  }
}
