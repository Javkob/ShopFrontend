import {Component, Input, OnInit} from "@angular/core";
import {FormGroup} from "@angular/forms";


@Component({
  selector: 'app-admin-category-form',
  template: `
    <div [formGroup]="parentForm" fxLayout="column">
    <mat-form-field appearance="fill">
    <mat-label>Nazwa</mat-label>
    <input matInput placeholder="Podaj nazwa produktu" formControlName="name">
      <div *ngIf="name?.invalid && (name?.dirty || name?.touched)" class="errorMessages">
        <div *ngIf="name?.errors?.['required']">
          Nazwa jest wymagana
        </div>
        <div *ngIf="name?.errors?.['minlength']">
          Nazwa musi mieć minimum 4 znaki
        </div>
      </div>
  </mat-form-field>
      <mat-form-field appearance="fill">
        <mat-label>Przyjazny URL</mat-label>
        <input matInput placeholder="Podaj URL" formControlName="slug">
        <div *ngIf="slug?.invalid && (slug?.dirty || slug?.touched)" class="errorMessages">
          <div *ngIf="slug?.errors?.['required']">
            Nazwa jest wymagana
          </div>
          <div *ngIf="slug?.errors?.['minlength']">
            Nazwa musi mieć minimum 4 znaki
          </div>
        </div>
      </mat-form-field>
  <mat-form-field appearance="fill">
    <mat-label>Opis</mat-label>
    <textarea matInput rows="10" placeholder="Podaj opis produktu" formControlName="description"></textarea>
    <div *ngIf="description?.invalid && (description?.dirty || description?.touched)" class="errorMessages">
      <div *ngIf="description?.errors?.['required']">
        Opis jest wymagany
      </div>
      <div *ngIf="description?.errors?.['minlength']">
        Opis musi mieć minimum 4 znaki
      </div>
    </div>
  </mat-form-field>
  <div fxLayout="colum" fxFlexAlign="end" fxLayoutGap="10">
    <button mat-flat-button color="primary" [disabled]="!parentForm.valid" >Zapisz</button>
  </div></div>`,
  styles: [`
    .errorMessages{
      color: red;
    }`]

})

export class AdminCategoryFormComponent implements OnInit{

  @Input() parentForm!: FormGroup;


  constructor() {
  }
  ngOnInit() {

  }

  get name(){
    return this.parentForm.get("name");
  }
  get description(){
    return this.parentForm.get("description");
  }
  get slug(){
    return this.parentForm.get("slug");
  }
}