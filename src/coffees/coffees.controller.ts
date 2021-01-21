import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';

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

  @Patch(':id')
  update(@Param('id') id: string, @Body() body) {
    return `This action updates ${id}`;
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return `This action deletes ${id}`;
  }
}
