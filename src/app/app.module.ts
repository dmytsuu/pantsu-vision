import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FeedComponent, PostComponent, NavbarComponent } from './components';

@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
    FeedComponent,
    PostComponent,
    NavbarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
})
export class AppModule { }
