import { Pipe, PipeTransform } from '@angular/core';
import { Photo } from '@capacitor/camera';

@Pipe({
  name: 'b64img',
})
export class B64imgPipe implements PipeTransform {
  transform(value: Photo, ...args: unknown[]): string {
    return `data:image/${value.format};base64,${value.base64String}`;
  }
}
