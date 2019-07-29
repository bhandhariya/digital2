import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminLayoutRoutes } from './admin-layout.routing';
import { DashboardComponent } from '../../dashboard/dashboard.component';
import { UserProfileComponent } from '../../user-profile/user-profile.component';
import { TableListComponent } from '../../table-list/table-list.component';
import { TypographyComponent } from '../../typography/typography.component';
import { IconsComponent } from '../../icons/icons.component';
import { MapsComponent } from '../../maps/maps.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import { UpgradeComponent } from '../../upgrade/upgrade.component';
import { MatGridListModule, MatCardModule, MatMenuModule, MatIconModule } from '@angular/material';
import {MatRadioModule} from '@angular/material/radio';
import {MatDialogModule} from '@angular/material/dialog';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {
  MatDatepickerModule,
  MatNativeDateModule,
  MAT_DATE_FORMATS,
  DateAdapter as DataAdapterFormMaterial
 } from '@angular/material';
 import { NativeDateAdapter } from "@angular/material";

 export class AppDateAdapter extends NativeDateAdapter {
  format(date: Date, displayFormat: Object): string {
      if (displayFormat === 'input') {
          const day = date.getDate();
          const month = date.getMonth() + 1;
          const year = date.getFullYear();
          return `${day}/${month}/${year}`;
      }
      return date.toDateString();
  }
}
export const APP_DATE_FORMATS =
{
  parse: {
      dateInput: { month: 'short', year: 'numeric', day: 'numeric' },
    },
  display: {
      dateInput: 'input',
      monthYearLabel: { year: 'numeric', month: 'numeric' },
      dateA11yLabel: { year: 'numeric', month: 'long', day: 'numeric' },
      monthYearA11yLabel: { year: 'numeric', month: 'long' },
  }
};

import {
  MatButtonModule,
  MatInputModule,
  MatRippleModule,
  MatFormFieldModule,
  MatTooltipModule,
  MatSelectModule,
} from '@angular/material';
import { PatientCreateComponent } from 'app/patient/patient-create/patient-create.component';
import { HttpClientModule } from '@angular/common/http';
import { PatientFamilyCreateComponent } from 'app/patient/patient-family-create/patient-family-create.component';
import { Form5Component } from 'app/patient/form5/form5.component';
import {MatExpansionModule} from '@angular/material/expansion';
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatRippleModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTooltipModule,MatDatepickerModule,
    MatNativeDateModule,
    MatGridListModule,
    MatExpansionModule, MatCardModule, MatMenuModule, MatIconModule,MatRadioModule,MatDialogModule,MatCheckboxModule,FormsModule,HttpClientModule,ReactiveFormsModule
  ],
  declarations: [
    DashboardComponent,
    UserProfileComponent,
    TableListComponent,
    TypographyComponent,
    IconsComponent,
    MapsComponent,
    NotificationsComponent,
    UpgradeComponent,
    PatientCreateComponent,
    PatientFamilyCreateComponent,
    Form5Component
  ],
  providers :[
   
    { provide: DataAdapterFormMaterial, useClass: AppDateAdapter },
    { provide: MAT_DATE_FORMATS, useValue: APP_DATE_FORMATS },
  ]
})

export class AdminLayoutModule {}
