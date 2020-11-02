import { Component } from '@angular/core';
import { InvoiceResponse } from './invoice/invoice-response';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Assessment 3.0';
  invoice: InvoiceResponse;
  file: File;

  // #4 data is the 'invoice response'
  select(event: { data: InvoiceResponse, file: File}) {
    this.invoice = event.data;
    this.file = event.file;
  }
}
