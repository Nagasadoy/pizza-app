import { Test, TestingModule } from '@nestjs/testing';
import { OrderRowController } from './order-row.controller';
import { OrderRowService } from './order-row.service';

describe('OrderRowController', () => {
  let controller: OrderRowController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OrderRowController],
      providers: [OrderRowService],
    }).compile();

    controller = module.get<OrderRowController>(OrderRowController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
