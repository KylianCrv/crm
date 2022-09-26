import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/core/models/order';
import { OrdersService } from '../../services/orders.service';

@Component({
  selector: 'app-page-list-orders',
  templateUrl: './page-list-orders.component.html',
  styleUrls: ['./page-list-orders.component.scss'],
})
export class PageListOrdersComponent implements OnInit {
  public collection!: Order[];
  public title: string;
  public headers: string[];

  constructor(private ordersService: OrdersService) {
    this.headers = [
      'Type',
      'Client',
      'Durée',
      'Tjm HT',
      'Total HT',
      'Total TTC',
      'Etat',
    ];
    this.title = 'List of orders';
    this.ordersService.collection$.subscribe((data) => {
      // console.log(data);
      this.collection = data;
    });
  }

  ngOnInit(): void {}

  public changeTitle(): void {
    this.title = 'title changed';
  }

  public total(val: number, coef: number, tva?: number): number {
    if (tva) return val * coef * (1 + tva / 100);
    return val * coef;
  }
}
