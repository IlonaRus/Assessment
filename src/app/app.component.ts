import { Component } from '@angular/core';
import { Invoice } from './invoice/invoice';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Assessment 3.0';
  invoice: Invoice;
  file: File;

  // #4 data is the 'invoice response'
  select(event: { invoice: Invoice, file: File}) {
    this.invoice = event.invoice;
    this.file = event.file;
  }
}
