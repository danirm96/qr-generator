import { Component } from '@angular/core';
import { Options } from 'ngx-qrcode-styling';

@Component({
  selector: 'app-qr-generator',
  templateUrl: './qr-generator.component.html',
  styleUrls: ['./qr-generator.component.scss']
})
export class QrGeneratorComponent {

  url: string = '';
  image: string = '';
  width: number = 300;
  height: number = 300;
  logo: FileList | null = null;
  logoUrl: string = '';

  config: Options = {
    width: 300,
    height: 300,
    data: "https://www.facebook.com/",
    image: "https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg",
    margin: 5,
    dotsOptions: {
      color: "#1977f3",
      type: "dots"
    },
    backgroundOptions: {
      color: "#ffffff",
    },
    imageOptions: {
      crossOrigin: "anonymous",
      margin: 0
    }
  };

  constructor() {}

  useLogoInQRCode(file: Event) {
    const inputElement = event != undefined ? event.target as HTMLInputElement : null;
    if(inputElement?.files) {
      this.logo = inputElement.files;
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.logoUrl = e.target.result;
      }
      reader.readAsDataURL(this.logo[0]);
    }

    
  }
}
