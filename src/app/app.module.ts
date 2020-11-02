import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FileUploadModule } from 'primeng/fileupload';
import { ProgressBarModule } from 'primeng/progressbar';
import { CardModule } from 'primeng/card';
import { AccordionModule } from 'primeng/accordion';
import { ButtonModule } from 'primeng/button';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { UploadComponent } from './upload/upload.component';
import { DownloadComponent } from './download/download.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { OrderComponent } from './invoice/order/order.component';
import { MerchantComponent } from './invoice/merchant/merchant.component';
import { CustomerComponent } from './invoice/customer/customer.component';


@NgModule({
  declarations: [
    AppComponent,
    InvoiceComponent,
    UploadComponent,
    OrderComponent,
    MerchantComponent,
    CustomerComponent,
    DownloadComponent

  ],
  imports: [
    AppRoutingModule,
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    FileUploadModule,
    ProgressBarModule,
    CardModule,
    AccordionModule,
    ButtonModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
