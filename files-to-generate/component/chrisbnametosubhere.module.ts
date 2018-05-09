import { NgModule } from '@angular/core';
import 'reflect-metadata';
import 'zone.js';

import {
    chrisbnametosubhereCamelCaseComponent,
} from './chrisbnametosubhere.component';

@NgModule({
    declarations: [
        chrisbnametosubhereCamelCaseComponent,
    ],
    exports: [
        chrisbnametosubhereCamelCaseComponent,
    ],
})
export class chrisbnametosubhereCamelCaseModule { }
