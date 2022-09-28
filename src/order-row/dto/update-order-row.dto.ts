import { PartialType } from '@nestjs/mapped-types';
import { CreateOrderRowDto } from './create-order-row.dto';

export class UpdateOrderRowDto extends PartialType(CreateOrderRowDto) {}
