import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FullpageadminComponent } from './fullpageadmin.component';
import { AdminComponent } from 'src/app/modules/admin/admin.component';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import {AdminProductComponent} from "../../modules/admin/admin-product/admin-product.component";
import {MatListModule} from "@angular/material/list";
import {MatIconModule} from "@angular/material/icon";
import {MatTableModule} from "@angular/material/table";
import {MaterialModule} from "../../shared/material.module";
import {AdminProductUpdateComponent} from "../../modules/admin/admin-product-update/admin-product-update.component";
import {ReactiveFormsModule} from "@angular/forms";
import {AdminProductAddComponent} from "../../modules/admin/admin-product-add/admin-product-add.component";
import {AdminProductFormComponent} from "../../modules/admin/admin-product-form/admin-product-form.component";



@NgModule({
  declarations: [
    FullpageadminComponent,
    AdminComponent,
    AdminProductComponent,
    AdminProductUpdateComponent,
    AdminProductAddComponent,
    AdminProductFormComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FlexLayoutModule,
    MatListModule,
    MatIconModule,
    MatTableModule,
    MaterialModule,
    ReactiveFormsModule
  ]
})
export class FullpageadminModule { }
