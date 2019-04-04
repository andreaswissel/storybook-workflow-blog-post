import {storiesOf} from '@storybook/angular';
import {withKnobs, text, boolean} from '@storybook/addon-knobs';
import {InputComponent} from './input.component';

const md = `
# The input component

It shows off knobs! Awesome!
`;

storiesOf('Forms | Input', module)
  .addDecorator(withKnobs)
  .add('Default', () => ({
    component: InputComponent,
    props: {
      label: text('Label', 'The label', 'General'),
      placeholder: text('Placeholder', 'The placeholder', 'General')
    }
  }), {
    notes: md
  })
  .add('Disabled', () => ({
    component: InputComponent,
    props: {
      label: text('Label', 'The label', 'General'),
      placeholder: text('Placeholder', 'The placeholder', 'General'),
      disabled: boolean('Disabled', true, 'General')
    }
  }));
