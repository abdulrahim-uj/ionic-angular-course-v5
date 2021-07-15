import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RecipiesPageRoutingModule } from './recipies-routing.module';

import { RecipiesPage } from './recipies.page';
import { RecipieItemComponent } from './recipie-item/recipie-item.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RecipiesPageRoutingModule
  ],
  declarations: [RecipiesPage, RecipieItemComponent]
})
export class RecipiesPageModule {}
