import { useState } from 'react';
import Display from '../../components/Display/Display';
import useAffirmation from '../../hooks/useAffirmation';
import useColorPicker from '../../hooks/useColorPicker';
import styles from './ColorPicker.css';

export default function ColorPicker() {
  const initialState = {
    fgColor: '#ffcc00',
    bgColor: '#212121',
    content: 'Hello, world!',
    didChangeColor: false
  }

  const [fgColor, bgColor, content, didChangeColor, handleChange] = useColorPicker(initialState)
  const affirmation = useAffirmation()

  return (
    <>
      <fieldset className={styles.colorPickerForm}>
        <legend>
          {didChangeColor
            ? affirmation
            : 'Pick some colors and a message to display!'}
        </legend>
        <input
          type="color"
          name="fgColor"
          aria-label="foreground color"
          value={fgColor}
          onChange={handleChange}
        />
        <input
          type="color"
          name="bgColor"
          aria-label="background color"
          value={bgColor}
          onChange={handleChange}
        />
        <input
          type="text"
          name="content"
          aria-label="content"
          value={content}
          onChange={handleChange}
        />
      </fieldset>
      <Display content={content} bgColor={bgColor} fgColor={fgColor} />
    </>
  );
}
