import React, { useState, useRef, useImperativeHandle } from 'react';

interface FlipperProps {
  frontText?: number | string;
  backText?: number | string;
  duration?: number;
}

const Flipper: React.ForwardRefRenderFunction<any, FlipperProps> = (props, ref) => {
  const { frontText = 0, backText = 1, duration = 600 } = props;
  const [isFlipping, setIsFlipping] = useState(false);
  const [flipType, setFlipType] = useState('down');
  const [frontTextFromData, setFrontTextFromData] = useState(frontText);
  const [backTextFromData, setBackTextFromData] = useState(backText);

  const _textClass = (number: number | string) => 'number' + number;

  const _flip = (type: string, front: number | string, back: number | string) => {
    if (isFlipping) {
      return false;
    }
    setFrontTextFromData(front);
    setBackTextFromData(back);
    setFlipType(type);
    setIsFlipping(true);
    setTimeout(() => {
      setFrontTextFromData(back);
      setIsFlipping(false);
    }, duration);
  };

  const flipDown = (front: number | string, back: number | string) => {
    _flip('down', front, back);
  };

  const flipUp = (front: number | string, back: number | string) => {
    _flip('up', front, back);
  };

  const setFront = (text: number | string) => {
    setFrontTextFromData(text);
  };

  const setBack = (text: number | string) => {
    setBackTextFromData(text);
  };

  // 使用useImperativeHandle暴露给父组件的方法
  useImperativeHandle(ref, () => ({
    flipDown,
    flipUp,
    setFront,
    setBack,
  }));

  return (
    <div className={`m-flipper ${flipType} ${isFlipping ? 'go' : ''}`}>
      <div className={`digital front ${_textClass(frontTextFromData)}`}></div>
      <div className={`digital back ${_textClass(backTextFromData)}`}></div>
    </div>
  );
};

export default React.forwardRef(Flipper);
