import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { throwError } from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable({ providedIn: 'root' })
export class UploadService {

  private uploadUrl = 'https://custom-ocr.klippa.com/api/v1/parseDocument';

  constructor(private http: HttpClient) { }

  newUpload(formData) {
    return this.http.post(this.uploadUrl, formData, {
      reportProgress: true,
      observe: 'events',
      headers: new HttpHeaders({
        'X-Auth-Key': environment.API_key
      })
    });
  }

  handleError(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = `Error: ${error.error.message}`;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }
}
