import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgChartsModule } from 'ng2-charts';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChartComponent } from './chart/chart.component';
import { NameBoxComponent } from './name-box/name-box.component';
import { CaracteristicasComponent } from './caracteristicas/caracteristicas.component';
import { HitPointsComponent } from './hit-points/hit-points.component';
import { TextBoxComponent } from './text-box/text-box.component';
import { UltimateBoxComponent } from './ultimate-box/ultimate-box.component';

@NgModule({
  declarations: [
    AppComponent,
    ChartComponent,
    NameBoxComponent,
    CaracteristicasComponent,
    HitPointsComponent,
    TextBoxComponent,
    UltimateBoxComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgChartsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
