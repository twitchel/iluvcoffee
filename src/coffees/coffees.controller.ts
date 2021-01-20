import { Body, Controller, Get, Param, Post } from '@nestjs/common';

@Controller('coffees')
export class CoffeesController {
  @Get()
  findAll(): string {
    return 'This will return all coffees';
  }

  @Get(':id')
  findOne(@Param('id') id: string): string {
    return `This action returns #${id} coffee`;
  }

  @Post()
  create(@Body() body): string {
    return body;
  }
}
