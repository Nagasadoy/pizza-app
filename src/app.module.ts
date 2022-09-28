import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { PizzaModule } from './pizza/pizza.module';
import { IngredientModule } from './ingredient/ingredient.module';
import { OrderModule } from './order/order.module';
import { OrderRowModule } from './order-row/order-row.module';

@Module({
  imports: [UserModule, PizzaModule, IngredientModule, OrderModule, OrderRowModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
