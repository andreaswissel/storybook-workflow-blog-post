import {storiesOf} from '@storybook/angular';
import {withKnobs, text} from '@storybook/addon-knobs';
import {InputComponent} from './input.component';

storiesOf('Input', module)
  .addDecorator(withKnobs)
  .add('Default', () => ({
    component: InputComponent,
    props: {
      label: text('Label', 'The label', 'General'),
      placeholder: text('Placeholder', 'The placeholder', 'General')
    }
  }));
