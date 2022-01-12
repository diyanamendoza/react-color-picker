import { useState } from 'react'

export default function useColorPicker(initialState) {
  const [fgColor, setFgColor] = useState(initialState.fgColor);
  const [bgColor, setBgColor] = useState(initialState.bgColor);
  const [content, setContent] = useState(initialState.content);
  const [didChangeColor, setDidChangeColor] = useState(initialState.didChangeColor);

  const handleChange = (event) => {
    const { name, value } = event.target;
    switch (name) {
      case 'fgColor':
        setFgColor(value);
        setDidChangeColor(true);
        break;
      case 'bgColor':
        setBgColor(value);
        setDidChangeColor(true);
        break;
      case 'content':
        setDidChangeColor(false);
        setContent(value);
        break;
      default:
        break;
    }
  };

  return [fgColor, bgColor, content, didChangeColor, handleChange]
}
