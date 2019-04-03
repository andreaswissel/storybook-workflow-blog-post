import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
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
