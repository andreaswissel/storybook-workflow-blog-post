import {moduleMetadata, storiesOf} from '@storybook/angular';
import {withKnobs, number} from '@storybook/addon-knobs';
import {GridComponent} from './grid.component';
import {InputComponent} from '../input/input.component';

const md = `
# The grid component

It shows off some awesome content projection!
`;

const mockTemplate = `
  <app-grid [columns]="columns">
    <app-input></app-input>
    <app-input></app-input>
    <app-input></app-input>
  </app-grid>
`;

storiesOf('Layout | Grid', module)
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
  }), {
    notes: md
  });
