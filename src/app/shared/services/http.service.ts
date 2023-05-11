import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { SECRETS } from 'keys';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  private readonly API_KEY = SECRETS.GC_API_KEY;
  private readonly API_URL = SECRETS.GC_API_URL;
  private readonly GOOGLE_CLOUD_PROJECT_ID = SECRETS.GC_PROJECT_ID;
  private http = inject(HttpClient);

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${this.API_KEY}`,
      'x-goog-user-project': this.GOOGLE_CLOUD_PROJECT_ID!,
    }),
  };

  constructor() {
    if (!this.API_KEY) {
      throw new Error('API_KEY is not defined');
    }
    if (!this.API_URL) {
      throw new Error('API_URL is not defined');
    }
    if (!this.GOOGLE_CLOUD_PROJECT_ID) {
      throw new Error('GOOGLE_CLOUD_PROJECT_ID is not defined');
    }
  }

  public post(payload: any) {
    return this.http.post(this.API_URL!, payload, this.httpOptions);
  }
}
