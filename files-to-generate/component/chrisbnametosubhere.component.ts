import {
    ChangeDetectionStrategy,
    Component,
} from '@angular/core';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: 'chrisbnametosubhere-component',
    styleUrls: [
        './chrisbnametosubhere.component.scss',
    ],
    templateUrl: './chrisbnametosubhere.component.template.pug',
})
export class chrisbnametosubhereCamelCaseComponent {}
