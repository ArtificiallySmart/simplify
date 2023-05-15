import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Photo } from '@capacitor/camera';
import { ImageCroppedEvent, LoadedImage } from 'ngx-image-cropper';

@Component({
  selector: 'app-crop',
  templateUrl: './crop.component.html',
  styleUrls: ['./crop.component.scss'],
})
export class CropComponent implements OnInit {
  croppedImage: any = '';
  @Input() image!: Photo;
  @Output() stepBack = new EventEmitter();
  @Output() acceptCrop = new EventEmitter(this.croppedImage);

  imageCropped(event: ImageCroppedEvent) {
    this.croppedImage = event.base64;
  }
  imageLoaded() {
    // show cropper
  }
  cropperReady() {
    // cropper ready
  }
  loadImageFailed() {
    // show message
  }

  backToCapture() {
    this.croppedImage = '';
    this.stepBack.emit();
  }

  acceptCroption() {
    this.acceptCrop.emit(this.croppedImage);
  }

  ngOnInit() {}
}
