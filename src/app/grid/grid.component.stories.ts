import {moduleMetadata, storiesOf} from '@storybook/angular';
import {withKnobs, number} from '@storybook/addon-knobs';
import {GridComponent} from './grid.component';
import {InputComponent} from '../input/input.component';

const mockTemplate = `
  <app-grid [columns]="columns">
    <app-input></app-input>
    <app-input></app-input>
    <app-input></app-input>
  </app-grid>
`;

storiesOf('Grid', module)
  .addDecorator(withKnobs)
  .addDecorator(moduleMetadata({
      declarations: [GridComponent, InputComponent]
    }
  ))
  .add('Default', () => ({
    component: GridComponent,
    props: {
      columns: number('Columns', '2', 'General')
    },
    template: mockTemplate
  }));
