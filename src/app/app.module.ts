// src/app/app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HomeComponent } from './pages/home/home.component';
import { BirdComponent } from './pages/bird/bird.component';
import { KatComponent } from './pages/kat/kat.component';
import { FooterComponent } from './layout/footer/footer.component';

import { ShapeComponent } from './shared/shape/shape.component';
import { PuzzleCanvasComponent } from './game/puzzle-canvas/puzzle-canvas.component';
import { FractionPanelComponent } from './game/fraction-panel/fraction-panel.component';
import { ShapePaletteComponent } from './game/shape-palette/shape-palette.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BirdComponent,
    KatComponent,
    FooterComponent,
    ShapeComponent,
    PuzzleCanvasComponent,
    FractionPanelComponent,
    ShapePaletteComponent,
  ],
  imports: [
    BrowserModule,         // <-- fournit CommonModule (NgIf, NgFor, NgClass)
    AppRoutingModule,      // <-- fournit RouterModule (router-outlet, routerLink…)
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
