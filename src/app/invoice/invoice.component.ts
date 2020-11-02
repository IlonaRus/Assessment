import { Component, OnChanges, Input } from '@angular/core';

import { InvoiceResponse } from './invoice-response';
import { Customer } from './customer/customer';
import { Order } from './order/order';
import { Merchant } from './merchant/merchant';


@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.css']
})

export class InvoiceComponent implements OnChanges {
  @Input() invoice: InvoiceResponse;

  customer: Customer;
  merchant: Merchant;
  order: Order;

  hasAdresCustomer: boolean;
  hasPersoonsGegevens: boolean;
  hasOverige: boolean;

  hasBetaling: boolean;
  hasOmschrijving: boolean;
  hasBtw: boolean;
  hasOrderInfo: boolean;

  hasAdresMerchant: boolean;
  hasBankInfo: boolean;
  hasVerkopersInfo: boolean;

  ngOnChanges() {
    this.setCustomer()
    this.setOrder()
    this.setMerchant()
  }

// Customer
  private setCustomer() {
    const customer = {
      address: this.invoice.customer_address,
      bank_account_number: this.invoice.customer_bank_account_number,
      bank_account_number_bic: this.invoice.customer_bank_account_number_bic,
      city: this.invoice.customer_city,
      coc_number: this.invoice.customer_coc_number,
      country: this.invoice.customer_country,
      email: this.invoice.customer_email,
      house_number: this.invoice.customer_house_number,
      municipality: this.invoice.customer_municipality,
      name: this.invoice.customer_name,
      number: this.invoice.customer_number,
      phone: this.invoice.customer_phone,
      province: this.invoice.customer_province,
      reference: this.invoice.customer_reference,
      street_name: this.invoice.customer_street_name,
      vat_number: this.invoice.customer_street_name,
      website: this.invoice.customer_website,
      zipcode: this.invoice.customer_zipcode
      // For later:
      // address: {
      //   streetname: this.invoice.customer_street_name
      // }
    }

    this.hasAdresCustomer = this.checkHasAdresCustomer(customer);
    this.hasPersoonsGegevens = this.checkHasPersoonsGegevens(customer);
    this.hasOverige = this.checkHasOverige(customer);
    this.customer = customer;
  }

  private checkHasAdresCustomer(customer?: Customer) {
    if (!customer) {
      return false;
    }

    return !!(
      customer.address ||
      customer.zipcode ||
      customer.city ||
      customer.province ||
      customer.municipality ||
      customer.country
    )
  }

  private checkHasPersoonsGegevens(customer?: Customer) {
    if (!customer) {
      return false;
    }

    return !!(
      customer.name ||
      customer.number ||
      customer.email ||
      customer.phone ||
      customer.website
    )
  }

  private checkHasOverige(customer?: Customer) {
    if (!customer) {
      return false;
    }

    return !!(
      customer.coc_number ||
      customer.vat_number ||
      customer.bank_account_number ||
      customer.bank_account_number_bic ||
      customer.reference
    )
  }

// Order
  private setOrder() {
    const order = {
      amount: this.invoice.amount,
      amount_change: this.invoice.amount_change,
      amountexvat: this.invoice.amountexvat,
      barcodes: this.invoice.barcodes,
      // This is the same as:
      // barcodes: this.invoice.barcodes.map(barcode => {
      //   return {
      //     type: barcode.type,
      //     value: barcode.value
      //   }
      // }),
      currency: this.invoice.currency,
      date: this.invoice.date,
      document_subject: this.invoice.document_subject,
      document_type: this.invoice.document_type,
      hash: this.invoice.hash,
      hash_duplicate: this.invoice.hash_duplicate,
      invoice_number: this.invoice.invoice_number,
      invoice_type: this.invoice.invoice_type,
      lines: this.invoice.lines,
      matched_keywords: this.invoice.matched_keywords,
      matched_lineitems: this.invoice.matched_lineitems,
      matched_purchase_order_id: this.invoice.matched_purchase_order_id,
      order_number: this.invoice.order_number,
      package_number: this.invoice.package_number,
      payment_auth_code: this.invoice.payment_auth_code,
      payment_card_account_number: this.invoice.payment_card_account_number,
      payment_card_bank: this.invoice.payment_card_bank,
      payment_card_issuer: this.invoice.payment_card_issuer,
      payment_card_number: this.invoice.payment_card_number,
      payment_due_date: this.invoice.payment_due_date,
      payment_slip_code: this.invoice.payment_slip_code,
      payment_slip_customer_number: this.invoice.payment_slip_customer_number,
      payment_slip_reference_number: this.invoice.payment_slip_reference_number,
      paymentmethod: this.invoice.paymentmethod,
      purchasedate: this.invoice.purchasedate,
      purchasetime: this.invoice.purchasetime,
      raw_text: this.invoice.raw_text,
      receipt_number: this.invoice.receipt_number,
      server: this.invoice.server,
      shop_number: this.invoice.shop_number,
      table_group: this.invoice.table_group,
      table_number: this.invoice.table_number,
      terminal_number: this.invoice.terminal_number,
      transaction_number: this.invoice.transaction_number,
      transaction_reference: this.invoice.transaction_reference,
      vat_context: this.invoice.vat_context,
      vatamount: this.invoice.vatamount,
      vatitems: this.invoice.vatitems
    }

    this.hasBetaling = this.checkHasBetaling(order);
    this.hasOmschrijving = this.checkHasOmschrijving(order);
    this.hasBtw = this.checkHasBtw(order);
    this.hasOrderInfo = this.checkHasOrderInfo(order);
    this.order = order;
  }

  private checkHasBetaling(order?: Order) {
    if (!order) {
      return false;
    }

    return !!(
      order.invoice_number ||
      order.invoice_type ||
      order.amount ||
      order.amount_change ||
      order.amountexvat ||
      order.currency ||
      order.payment_auth_code ||
      order.paymentmethod ||
      order.payment_card_account_number ||
      order.payment_card_bank ||
      order.payment_card_issuer ||
      order.payment_card_number ||
      order.payment_due_date ||
      order.payment_slip_code ||
      order.payment_slip_customer_number ||
      order.payment_slip_reference_number
    )
  }

  private checkHasOmschrijving(order?: Order) {
    if (!order) {
      return false;
    }

    return !!(
      order.lines?.length
    )
  }

  private checkHasBtw(order?: Order) {
    if (!order) {
      return false;
    }

    // from the api, even though there aren't any vatitems, still: order.vatitems = []
    return !!(
      order.vatamount ||
      order.vat_context ||
      // vatitems exists, is an array, and the length of the array is larger than 0 (there is at least 1 item)
      // order.vatitems && order.vatitems.length > 0
      order.vatitems?.length // vatitems(exsist ?) .(lengte van 0) === false
    )
  }

  private checkHasOrderInfo(order?: Order) {
    if (!order) {
      return false;
    }

    return !!(
      order.order_number ||
      order.date ||
      order.package_number ||
      order.purchasedate ||
      order.receipt_number ||
      order.server ||
      order.shop_number ||
      order.terminal_number ||
      order.transaction_number ||
      order.transaction_reference ||
      order.barcodes?.length 
    )
  }


// Merchant
  private setMerchant() {
    const merchant = {
      address: this.invoice.merchant_address,
      bank_account_number: this.invoice.merchant_bank_account_number,
      bank_account_number_bic: this.invoice.merchant_bank_account_number_bic,
      bank_domestic_account_number: this.invoice.merchant_bank_domestic_account_number,
      bank_domestic_bank_code: this.invoice.merchant_bank_domestic_bank_code,
      chain_liability_bank_account_number: this.invoice.merchant_chain_liability_bank_account_number,
      city: this.invoice.merchant_city,
      coc_number: this.invoice.merchant_coc_number,
      country: this.invoice.merchant_country,
      country_code: this.invoice.merchant_country_code,
      email: this.invoice.merchant_email,
      house_number: this.invoice.merchant_house_number,
      id: this.invoice.merchant_id,
      main_activity_code: this.invoice.merchant_main_activity_code,
      municipality: this.invoice.merchant_municipality,
      name: this.invoice.merchant_name,
      phone: this.invoice.merchant_phone,
      province: this.invoice.merchant_province,
      street_name: this.invoice.merchant_street_name,
      vat_number: this.invoice.merchant_vat_number,
      website: this.invoice.merchant_website,
      zipcode: this.invoice.merchant_zipcode
    }

    this.hasAdresMerchant = this.checkHasAdresMerchant(merchant);
    this.hasBankInfo = this.checkHasBankInfo(merchant);
    this.hasVerkopersInfo = this.checkHasVerkopersInfo(merchant);
    this.merchant = merchant;
  }

  private checkHasAdresMerchant(merchant?: Merchant) {
    if (!merchant) {
      return false;
    }

    return !!(
      merchant.address ||
      merchant.zipcode ||
      merchant.city ||
      merchant.province ||
      merchant.municipality ||
      merchant.country ||
      merchant.country_code
    )
  }

  private checkHasBankInfo(merchant?: Merchant) {
    if (!merchant) {
      return false;
    }

    return !!(
      // || = Xor, 1 thing should be true
      merchant.bank_account_number ||
      merchant.bank_account_number_bic || 
      merchant.bank_domestic_account_number || 
      merchant.bank_domestic_bank_code || 
      merchant.chain_liability_bank_account_number
    )
  }

  private checkHasVerkopersInfo(merchant?: Merchant) {
    if (!merchant) {
      return false;
    }

    return !!(
      merchant.name ||
      merchant.id ||
      merchant.email ||
      merchant.phone ||
      merchant.website ||
      merchant.coc_number ||
      merchant.vat_number ||
      merchant.main_activity_code
    )
  }


  // For later;
  // this.checkObjectHasProperties(merchant, ['bank_account_number', ''])
  // private checkObjectHasProperties<T>(object: T, properties: (keyof T)[]) {
  // }

  // For later later;
  // private anyPropertyTruthy(object: any) {
  // }
}
