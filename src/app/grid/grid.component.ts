import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-grid',
  template: `
    <div class="grid" [ngStyle]="{'grid-template-columns': columnsTemplate}">
      <ng-content></ng-content>
    </div>

  `,
  styles: [`
    .grid {
      display: grid;
      grid-column-gap: 30px;
      grid-row-gap: 10px;
    }
  `]
})
export class GridComponent {
  private _columns = 2;

  @Input()
  public set columns(columns: number) {
    this._columns = columns;
  }

  public get columnsTemplate(): string {
    return `repeat(${this._columns}, 1fr)`;
  }

}
