import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';

@Controller('coffees')
export class CoffeesController {
  @Get()
  findAll(@Query() paginationQuery): string {
    const { limit, offset } = paginationQuery;
    return `This will return all coffees. Limit ${limit} and offset ${offset}`;
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
