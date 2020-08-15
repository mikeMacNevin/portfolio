import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { contactInfo } from '../interface/contactInfo.model';

@Injectable({
  providedIn: 'root'
})
export class SendMailServiceService {

  constructor(private http: HttpClient) { }

  sendEmail(obj): Observable<contactInfo> {
    return this.http.post<contactInfo>('http://localhost:4200/sendFormData', obj)
  }
}