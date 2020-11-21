import { Component, OnChanges, Input } from '@angular/core';

import { Invoice } from './invoice';
import { Customer } from './customer/customer';
import { Order } from './order/order';
import { Merchant } from './merchant/merchant';


@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.css']
})

export class InvoiceComponent implements OnChanges {
  @Input() invoice: Invoice;

  customer: Customer;
  merchant: Merchant;
  order: Order;

  hasAddressCustomer: boolean;
  hasPersonalInfo: boolean;
  hasOther: boolean;

  hasPayment: boolean;
  hasDescription: boolean;
  hasBtw: boolean;
  hasOrderInfo: boolean;

  hasAddressMerchant: boolean;
  hasBankInfo: boolean;
  hasSellersInfo: boolean;

  ngOnChanges() {
    // These are in the ngOnChanges because otherwise the methodes will be executed with every changedetection cycle
    this.hasAddressCustomer = this.invoice.checkhasAddressCustomer();
    this.hasPersonalInfo = this.invoice.checkhasPersonalInfo();
    this.hasOther = this.invoice.checkhasOther();

    this.hasPayment = this.invoice.checkHasPayment();
    this.hasDescription = this.invoice.checkHasDescription();
    this.hasBtw = this.invoice.checkHasBtw();
    this.hasOrderInfo = this.invoice.checkHasOrderInfo();

    this.hasAddressMerchant = this.invoice.checkhasAddressMerchant();
    this.hasBankInfo = this.invoice.checkHasBankInfo();
    this.hasSellersInfo = this.invoice.checkHasSellersInfo();
  }
}
