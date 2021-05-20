import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { NavbarModule } from './components/navbar/navbar.module';
import { ScreensRoutingModule } from './screens/screens-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { SidebarModule } from './components/sidebar/sidebar.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule,
    AppRoutingModule,
    ScreensRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NavbarModule,
    BrowserAnimationsModule,
    TranslateModule.forRoot({
      defaultLanguage: 'vi',
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient]
      }
    }),
    SidebarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
