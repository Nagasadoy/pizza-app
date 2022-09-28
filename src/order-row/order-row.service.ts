import { Injectable } from '@nestjs/common';
import { CreateOrderRowDto } from './dto/create-order-row.dto';
import { UpdateOrderRowDto } from './dto/update-order-row.dto';

@Injectable()
export class OrderRowService {
  create(createOrderRowDto: CreateOrderRowDto) {
    return 'This action adds a new orderRow';
  }

  findAll() {
    return `This action returns all orderRow`;
  }

  findOne(id: number) {
    return `This action returns a #${id} orderRow`;
  }

  update(id: number, updateOrderRowDto: UpdateOrderRowDto) {
    return `This action updates a #${id} orderRow`;
  }

  remove(id: number) {
    return `This action removes a #${id} orderRow`;
  }
}
