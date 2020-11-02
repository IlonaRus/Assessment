export interface Order {
  "amount": number,
  "amount_change": number,
  "amountexvat": number,
  "barcodes": 
    {
      "type": string,
      "value":string
    }[]
  ,
  "currency":string,
  "date":string,
  "document_subject":string,
  "document_type": string,
  "hash":string,
  "hash_duplicate": boolean,
  "invoice_number":string,
  "invoice_type": string,
  "lines":
    {
      "description":string,
      "lineitems": 
        {
          "amount": number,
          "amount_each": number,
          "amount_ex_vat": number,
          "description":string,
          "quantity": number,
          "sku":string,
          "title":string,
          "vat_amount": number,
          "vat_code":string,
          "vat_percentage": number
        }[]
    }[],
  "matched_keywords": 
    {
      "count": number,
      "id":string,
      "matches": 
       string[]
    }[],
  "matched_lineitems": 
    {
      "id":string,
      "lineitems": 
        {
          "amount": number,
          "amount_each": number,
          "amount_ex_vat": number,
          "description":string,
          "quantity": number,
          "sku":string,
          "title":string,
          "vat_amount": number,
          "vat_code":string,
          "vat_percentage": number
        }
    }[],
  "matched_purchase_order_id":string,
  "order_number":string,
  "package_number":string,
  "payment_auth_code":string,
  "payment_card_account_number":string,
  "payment_card_bank":string,
  "payment_card_issuer":string,
  "payment_card_number":string,
  "payment_due_date":string,
  "payment_slip_code":string,
  "payment_slip_customer_number":string,
  "payment_slip_reference_number":string,
  "paymentmethod": string,
  "purchasedate":string,
  "purchasetime":string,
  "raw_text":string,
  "receipt_number":string,
  "server":string,
  "shop_number":string,
  "table_group":string,
  "table_number":string,
  "terminal_number":string,
  "transaction_number":string,
  "transaction_reference":string,
  "vat_context":string,
  "vatamount": number,
  "vatitems":
    {
      "amount": number,
      "amount_excl_vat": number,
      "amount_incl_excl_vat_estimated": boolean,
      "amount_incl_vat": number,
      "code":string,
      "percentage": number
    }[]
}