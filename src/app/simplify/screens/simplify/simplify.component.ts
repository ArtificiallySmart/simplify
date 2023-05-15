import { Component, OnInit, inject } from '@angular/core';
import { PhotoService } from 'src/app/shared/services/photo.service';

import { Buffer } from 'buffer';
import { HttpService } from 'src/app/shared/services/http.service';
import { Observable, map } from 'rxjs';
import { Photo } from '@capacitor/camera';
import {
  ImageCroppedEvent,
  LoadedImage,
  OutputFormat,
} from 'ngx-image-cropper';
import {
  AnnotateImageResponse,
  BatchAnnotateImagesResponse,
} from '../../typings/vision';
@Component({
  selector: 'app-simplify',
  templateUrl: './simplify.component.html',
  styleUrls: ['./simplify.component.scss'],
})
export class SimplifyComponent implements OnInit {
  public httpService = inject(HttpService);

  public result?: Observable<AnnotateImageResponse>;
  public uncroppedDocument?: Photo;

  public step = 1;

  constructor() {}

  ngOnInit() {}

  imageCaptured(event: Photo) {
    this.uncroppedDocument = event;
    this.step = 2;
  }

  async uploadImage() {
    //if (this.capturedPhoto) {
    const base64Data = this.croppedImage.split(',')[1];

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
    const response = this.httpService
      .post<BatchAnnotateImagesResponse>(payload)
      .pipe(
        map((res) => {
          return res.responses[0];
        })
      );
    this.result = response;
    //}
  }

  croppedImage: any = '';

  imageCropped(event: ImageCroppedEvent) {
    this.croppedImage = event.base64;
    this.step = 3;
  }

  stepBack() {
    this.step--;
  }
}
