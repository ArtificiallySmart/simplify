import { Component, OnInit, Output, inject, EventEmitter } from '@angular/core';
import { Photo } from '@capacitor/camera';
import { PhotoService } from 'src/app/shared/services/photo.service';

@Component({
  selector: 'app-capture',
  templateUrl: './capture.component.html',
  styleUrls: ['./capture.component.scss'],
})
export class CaptureComponent implements OnInit {
  @Output() acceptImage = new EventEmitter<Photo>();
  public photoService = inject(PhotoService);

  constructor() {}

  selectedImage?: Photo;

  async takePicture() {
    this.selectedImage = await this.photoService.takePicture();
  }

  deleteImg() {
    this.selectedImage = undefined;
  }
  acceptImg() {
    this.acceptImage.emit(this.selectedImage);
  }

  ngOnInit() {}
}
