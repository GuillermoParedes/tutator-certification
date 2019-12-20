import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './components/card/card.component';
import { HttpClientModule } from '@angular/common/http';
import { LivingDirective } from './utils/living.directive';
import { SumPipe } from './utils/sum.pipe';
import { SumWithServicePipe } from './utils/sum-with-service.pipe';
import { BadgeComponent } from './components/badge/badge.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    LivingDirective,
    SumPipe,
    SumWithServicePipe,
    BadgeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
