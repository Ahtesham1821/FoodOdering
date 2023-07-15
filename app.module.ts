import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import {MatListModule} from '@angular/material/list';


import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatDatepickerModule} from '@angular/material/datepicker';

import { MatSlideToggleModule } from '@angular/material/slide-toggle';

import { MatTableModule } from '@angular/material/table';

import { MatButtonModule } from '@angular/material/button';

import { MatIconModule } from '@angular/material/icon';

import { HttpClientModule } from '@angular/common/http';

import { MatDialogModule } from '@angular/material/dialog';

import { MatFormFieldModule } from '@angular/material/form-field';

import { FormsModule } from '@angular/forms';

import { MatNativeDateModule } from '@angular/material/core';

import { ReactiveFormsModule } from '@angular/forms';

import { MatToolbarModule } from '@angular/material/toolbar';

import {MatSortModule} from '@angular/material/sort';

import { MatInputModule } from '@angular/material/input';

import {MatPaginatorModule} from '@angular/material/paginator';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatSelectModule} from '@angular/material/select';
import { BodyComponent } from './body/body.component';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatStepperModule} from '@angular/material/stepper';
import {MatDividerModule} from '@angular/material/divider';
import {MatCardModule} from '@angular/material/card';
import { OrderComponent } from './order/order.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BodyComponent,
    OrderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDatepickerModule,
    MatSlideToggleModule ,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    HttpClientModule,
    MatFormFieldModule,
    MatDialogModule, 
    FormsModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatSortModule,
    MatInputModule,
    MatPaginatorModule,
    MatSelectModule,
    MatListModule,
    MatProgressBarModule,
    MatDividerModule,
    MatCardModule,
    MatStepperModule,
    MatCheckboxModule




    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
