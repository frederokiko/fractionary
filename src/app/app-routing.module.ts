
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { BirdComponent } from './pages/bird/bird.component';
import { KatComponent } from './pages/kat/kat.component';
import { BirdiComponent } from './pages/birdi/birdi.component';
import { KataComponent } from './pages/kata/kata.component';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'bird', component: BirdComponent },
  { path: 'birdi', component: BirdiComponent },
  { path: 'kat', component: KatComponent },
  { path: 'kata', component: KataComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
