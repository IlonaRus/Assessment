import { Component, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';

// import { catchError } from 'rxjs/operators'; 

import { UploadService } from './upload.service';
import { HttpResponse } from '@angular/common/http';
import { Invoice } from '../invoice/invoice';


@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent {
  @Output() uploaded = new EventEmitter(); // #1 "Object" to listen to in order to start the emit

  @ViewChild("fileUpload", { static: false }) fileUpload: ElementRef;

  uploading: boolean;

  constructor(private uploadService: UploadService) { }

  uploadFile(fileEvent) { // fileEvent to distinguish between this event and the httpEvent
    const uploadData = new FormData();
    const file = fileEvent.files[0]; // The event contains files and I want the first file
    uploadData.append('document', file); 
    this.uploading = true;
    this.uploadService.newUpload(uploadData)
      .subscribe((httpEvent: HttpResponse<any>) => {
        // 4 means ready in XHR
        if (httpEvent.type === 4) {
          this.uploading = false;
          console.log(httpEvent.type);
          const invoiceResponse = httpEvent.body.data;
          const invoice = new Invoice(invoiceResponse);

          this.uploaded.emit({
            invoice,
            file
          }); // #2 Now the data gets sent, via 'uploaded', to app.component.html (the listening component)
         }
      });
  }
}

// Plans to put a catchError here
