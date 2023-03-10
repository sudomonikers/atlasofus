import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IntroComponent } from './intro.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: '', component: IntroComponent }];
@NgModule({
  declarations: [IntroComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class IntroModule {}
