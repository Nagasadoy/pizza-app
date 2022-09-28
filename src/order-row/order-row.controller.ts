import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { OrderRowService } from './order-row.service';
import { CreateOrderRowDto } from './dto/create-order-row.dto';
import { UpdateOrderRowDto } from './dto/update-order-row.dto';

@Controller('order-row')
export class OrderRowController {
  constructor(private readonly orderRowService: OrderRowService) {}

  @Post()
  create(@Body() createOrderRowDto: CreateOrderRowDto) {
    return this.orderRowService.create(createOrderRowDto);
  }

  @Get()
  findAll() {
    return this.orderRowService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.orderRowService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateOrderRowDto: UpdateOrderRowDto) {
    return this.orderRowService.update(+id, updateOrderRowDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.orderRowService.remove(+id);
  }
}
