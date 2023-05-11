import { Component, OnInit, inject } from '@angular/core';
import { PhotoService } from 'src/app/shared/services/photo.service';

import { Buffer } from 'buffer';
import { HttpService } from 'src/app/shared/services/http.service';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-simplify',
  templateUrl: './simplify.component.html',
  styleUrls: ['./simplify.component.scss'],
})
export class SimplifyComponent implements OnInit {
  public photoService = inject(PhotoService);
  public httpService = inject(HttpService);

  public result?: Observable<Object>;

  constructor() {}

  ngOnInit() {}

  async takePicture() {
    const capturedPhoto = await this.photoService.takePicture();
    const base64Data = capturedPhoto.base64String;
    const payload = {
      requests: [
        {
          image: {
            content: base64Data,
          },
          features: [
            {
              type: 'DOCUMENT_TEXT_DETECTION',
            },
          ],
        },
      ],
    };
    const response = this.httpService.post(payload);
    this.result = response;
    console.log(this.result);
  }
}
