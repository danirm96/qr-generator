import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QrGeneratorComponent } from './components/qr-generator/qr-generator.component';
import { GeneralLayoutComponent } from './layout/general-layout/general-layout.component';
import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { NgxQrcodeStylingModule } from 'ngx-qrcode-styling';

@NgModule({
  declarations: [
    AppComponent,
    QrGeneratorComponent,
    GeneralLayoutComponent,
    HomeComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxQrcodeStylingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
