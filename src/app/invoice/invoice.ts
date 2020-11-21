import {InvoiceResponse} from './invoice-response.interface';
import {Customer} from './customer/customer';
import { Order } from './order/order';
import { Merchant } from './merchant/merchant';

export class Invoice {

  customer: Customer;
  order: Order;
  merchant: Merchant;

  constructor(invoice: InvoiceResponse) {
    this.setCustomer(invoice);
    this.setOrder(invoice);
    this.setMerchant(invoice);
  }

// Customer
  checkhasAddressCustomer() {
    // console.count('checkhasAddressCustomer');
    return !!(
      this.customer.address || 
      this.customer.zipcode ||
      this.customer.city ||
      this.customer.province ||
      this.customer.municipality ||
      this.customer.country
    )
  }

  checkhasPersonalInfo() {
    return !!(
      this.customer.name ||
      this.customer.number ||
      this.customer.email ||
      this.customer.phone ||
      this.customer.website
    )
  }

  checkhasOther() {
    return !!(
      this.customer.coc_number ||
      this.customer.vat_number ||
      this.customer.bank_account_number ||
      this.customer.bank_account_number_bic ||
      this.customer.reference
    )
  }

  private setCustomer(invoice: InvoiceResponse) {
    const customer: Customer = {
      address: invoice.customer_address,
      bank_account_number: invoice.customer_bank_account_number,
      bank_account_number_bic: invoice.customer_bank_account_number_bic,
      city: invoice.customer_city,
      coc_number: invoice.customer_coc_number,
      country: invoice.customer_country,
      email: invoice.customer_email,
      house_number: invoice.customer_house_number,
      municipality: invoice.customer_municipality,
      name: invoice.customer_name,
      number: invoice.customer_number,
      phone: invoice.customer_phone,
      province: invoice.customer_province,
      reference: invoice.customer_reference,
      street_name: invoice.customer_street_name,
      vat_number: invoice.customer_street_name,
      website: invoice.customer_website,
      zipcode: invoice.customer_zipcode
      // For later:
      // address: {
      //   streetname: invoice.customer_street_name
      // }
    }

    this.customer = customer;
  }

// Order 
  checkHasPayment() {
    return !!(
      this.order.invoice_number ||
      this.order.invoice_type ||
      this.order.amount ||
      this.order.amount_change ||
      this.order.amountexvat ||
      this.order.currency ||
      this.order.payment_auth_code ||
      this.order.paymentmethod ||
      this.order.payment_card_account_number ||
      this.order.payment_card_bank ||
      this.order.payment_card_issuer ||
      this.order.payment_card_number ||
      this.order.payment_due_date ||
      this.order.payment_slip_code ||
      this.order.payment_slip_customer_number ||
      this.order.payment_slip_reference_number
    )
  }

  checkHasDescription() {
    return !!(
      this.order.lines?.length
    )
  }

  checkHasBtw() {
    // from the api, even though there aren't any vatitems, still: order.vatitems = []
    return !!(
      this.order.vatamount ||
      this.order.vat_context ||
      // vatitems exists, is an array, and the length of the array is larger than 0 (there is at least 1 item)
      // order.vatitems && order.vatitems.length > 0
      this.order.vatitems?.length // vatitems(exsist ?) .(lengte van 0) === false
    )
  }

  checkHasOrderInfo() {
    return !!(
      this.order.order_number ||
      this.order.date ||
      this.order.package_number ||
      this.order.purchasedate ||
      this.order.receipt_number ||
      this.order.server ||
      this.order.shop_number ||
      this.order.terminal_number ||
      this.order.transaction_number ||
      this.order.transaction_reference ||
      this.order.barcodes?.length 
    )
  }

  private setOrder(invoice: InvoiceResponse) {
  const order = {
    amount: invoice.amount,
    amount_change: invoice.amount_change,
    amountexvat: invoice.amountexvat,
    barcodes: invoice.barcodes,
    // This is the same as:
    // barcodes: invoice.barcodes.map(barcode => {
    //   return {
    //     type: barcode.type,
    //     value: barcode.value
    //   }
    // }),
    currency: invoice.currency,
    date: invoice.date,
    document_subject: invoice.document_subject,
    document_type: invoice.document_type,
    hash: invoice.hash,
    hash_duplicate: invoice.hash_duplicate,
    invoice_number: invoice.invoice_number,
    invoice_type: invoice.invoice_type,
    lines: invoice.lines,
    matched_keywords: invoice.matched_keywords,
    matched_lineitems: invoice.matched_lineitems,
    matched_purchase_order_id: invoice.matched_purchase_order_id,
    order_number: invoice.order_number,
    package_number: invoice.package_number,
    payment_auth_code: invoice.payment_auth_code,
    payment_card_account_number: invoice.payment_card_account_number,
    payment_card_bank: invoice.payment_card_bank,
    payment_card_issuer: invoice.payment_card_issuer,
    payment_card_number: invoice.payment_card_number,
    payment_due_date: invoice.payment_due_date,
    payment_slip_code: invoice.payment_slip_code,
    payment_slip_customer_number: invoice.payment_slip_customer_number,
    payment_slip_reference_number: invoice.payment_slip_reference_number,
    paymentmethod: invoice.paymentmethod,
    purchasedate: invoice.purchasedate,
    purchasetime: invoice.purchasetime,
    raw_text: invoice.raw_text,
    receipt_number: invoice.receipt_number,
    server: invoice.server,
    shop_number: invoice.shop_number,
    table_group: invoice.table_group,
    table_number: invoice.table_number,
    terminal_number: invoice.terminal_number,
    transaction_number: invoice.transaction_number,
    transaction_reference: invoice.transaction_reference,
    vat_context: invoice.vat_context,
    vatamount: invoice.vatamount,
    vatitems: invoice.vatitems
  }

  this.order = order;
  }

// Merchant
  checkhasAddressMerchant() {
    return !!(
      this.merchant.address ||
      this.merchant.zipcode ||
      this.merchant.city ||
      this.merchant.province ||
      this.merchant.municipality ||
      this.merchant.country ||
      this.merchant.country_code
    )
  }

  checkHasBankInfo() {
    return !!(
      // || = Xor, 1 thing should be true
      this.merchant.bank_account_number ||
      this.merchant.bank_account_number_bic || 
      this.merchant.bank_domestic_account_number || 
      this.merchant.bank_domestic_bank_code || 
      this.merchant.chain_liability_bank_account_number
    )
  }

  checkHasSellersInfo() {
    return !!(
      this.merchant.name ||
      this.merchant.id ||
      this.merchant.email ||
      this.merchant.phone ||
      this.merchant.website ||
      this.merchant.coc_number ||
      this.merchant.vat_number ||
      this.merchant.main_activity_code
      )
  }

  private setMerchant(invoice: InvoiceResponse) {
  const merchant = {
    address: invoice.merchant_address,
    bank_account_number: invoice.merchant_bank_account_number,
    bank_account_number_bic: invoice.merchant_bank_account_number_bic,
    bank_domestic_account_number: invoice.merchant_bank_domestic_account_number,
    bank_domestic_bank_code: invoice.merchant_bank_domestic_bank_code,
    chain_liability_bank_account_number: invoice.merchant_chain_liability_bank_account_number,
    city: invoice.merchant_city,
    coc_number: invoice.merchant_coc_number,
    country: invoice.merchant_country,
    country_code: invoice.merchant_country_code,
    email: invoice.merchant_email,
    house_number: invoice.merchant_house_number,
    id: invoice.merchant_id,
    main_activity_code: invoice.merchant_main_activity_code,
    municipality: invoice.merchant_municipality,
    name: invoice.merchant_name,
    phone: invoice.merchant_phone,
    province: invoice.merchant_province,
    street_name: invoice.merchant_street_name,
    vat_number: invoice.merchant_vat_number,
    website: invoice.merchant_website,
    zipcode: invoice.merchant_zipcode
  }

  this.merchant = merchant;
  }
}

// For later;
// this.checkObjectHasProperties(merchant, ['bank_account_number', ''])
// private checkObjectHasProperties<T>(object: T, properties: (keyof T)[]) {
// }

// For later later;
// private anyPropertyTruthy(object: any) {
// }