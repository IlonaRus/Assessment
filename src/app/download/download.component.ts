import { Component, EventEmitter, Output, Input } from '@angular/core';
import { InvoiceResponse } from '../invoice/invoice-response';


@Component({
  selector: 'app-download',
  templateUrl: './download.component.html',
  styleUrls: ['./download.component.css']
})

export class DownloadComponent {
  @Input() data: InvoiceResponse;
  @Input() file: File;
  @Output() downloaded = new EventEmitter();
  
  downloadJson() {
    const file = new Blob([JSON.stringify(this.data)], { type: "text/plain" });
    const url = URL.createObjectURL(file);
    const name = "invoice.json";
    this.download(url, name);
  }

  downloadFile() {
    const url = URL.createObjectURL(this.file);
    const name = this.file.name;
    this.download(url, name);
  }

  private download(url, name) {
    const a = document.createElement("a");
    a.href = url;
    a.download = name;
    a.click();
  }
}
