import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { SchemesComponent } from 'app/layout/common/schemes/schemes.component';
import { SharedModule } from 'app/shared/shared.module';

@NgModule({
    declarations: [
        SchemesComponent
    ],
    imports     : [
        MatButtonModule,
        MatIconModule,
        MatMenuModule,
        SharedModule
    ],
    exports     : [
        SchemesComponent
    ]
})
export class SchemesModule
{
}
