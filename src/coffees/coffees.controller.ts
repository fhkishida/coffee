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
import { CoffeesService } from './coffees.service';
import { CreateCoffeeDto } from './dto/create-coffee.dto/create-coffee.dto';
import { UpdateCoffeeDto } from './dto/create-coffee.dto/update-coffee.dto';

@Controller('coffees')
export class CoffeesController {
  constructor(private readonly coffeesService: CoffeesService) {}
  @Get('flavors')
  findAllFlavors() {
    return 'this is all flavors';
  }

  @Get()
  findAll(@Query() paginationQuery) {
    // const { limit, offset } = paginationQuery;
    return this.coffeesService.findAll();
    // return `This is all the coffees. Limit = ${limit}, Offset ${offset}`;
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    //   findOne(@Param() params) { se usar params dessa forma, retorna todos os parametros que vierem
    return this.coffeesService.findOne(id);
    // return `this is the coffee that correspond to id ${id}`;
    // return `this is the coffee that correspond to id ${params.id}`; para usar os parametros, chamamos como objeto
  }

  @Post()
  create(@Body() createCoffeeDto: CreateCoffeeDto) {
    console.log(createCoffeeDto instanceof CreateCoffeeDto);
    return this.coffeesService.create(createCoffeeDto);
    // return body;
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCoffeeDto: UpdateCoffeeDto) {
    return this.coffeesService.update(id, updateCoffeeDto);
    // return `This action updates #${id} coffee`;
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.coffeesService.remove(id);
    // return `removes #${id} coffee`;
  }
}
