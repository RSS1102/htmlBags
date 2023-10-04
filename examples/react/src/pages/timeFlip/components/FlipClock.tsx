import React, { useEffect, useRef } from 'react';
import Flipper from './Flipper';

const FlipClock: React.FC = () => {
  const flipperHour1 = useRef<any>(null);
  const flipperHour2 = useRef<any>(null);
  const flipperMinute1 = useRef<any>(null);
  const flipperMinute2 = useRef<any>(null);
  const flipperSecond1 = useRef<any>(null);
  const flipperSecond2 = useRef<any>(null);

  useEffect(() => {
    const flipObjs = [
      flipperHour1,
      flipperHour2,
      flipperMinute1,
      flipperMinute2,
      flipperSecond1,
      flipperSecond2,
    ];

    // 初始化数字
    const now = new Date();
    const nowTimeStr = formatDate(new Date(now.getTime()), 'hhiiss');

    flipObjs.forEach((flipper, index) => {
      flipper.current.setFront(nowTimeStr[index]);
    });

    // 开始计时
    const timer = setInterval(() => {
      // 获取当前时间
      const now = new Date();
      const nowTimeStr = formatDate(new Date(now.getTime() - 1000), 'hhiiss');
      const nextTimeStr = formatDate(now, 'hhiiss');

      flipObjs.forEach((flipper, index) => {
        if (nowTimeStr[index] === nextTimeStr[index]) {
          return;
        }

        flipper.current.flipDown(nowTimeStr[index], nextTimeStr[index]);
      });
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  const formatDate = (date: Date, dateFormat: string): string => {
    const options: Record<string, number> = {
      'm+': date.getMonth() + 1,
      'd+': date.getDate(),
      'h+': date.getHours(),
      'i+': date.getMinutes(),
      's+': date.getSeconds(),
    };

    dateFormat = dateFormat.replace(/(y+)/, (_, yearMatch) =>
      (date.getFullYear() + '').slice(-yearMatch.length)
    );

    for (const key in options) {
      if (new RegExp(`(${key})`).test(dateFormat)) {
        const match = RegExp.$1;
        const value = options[key].toString();
        dateFormat = dateFormat.replace(match, match.length === 1 ? value : padLeftZero(value));
      }
    }

    return dateFormat;
  };

  // 日期时间补零
  const padLeftZero = (str: string) => {
    return str.length === 1 ? `0${str}` : str;
  };

  return (
    <div className="flip-clock">
      <Flipper ref={flipperHour1} />
      <Flipper ref={flipperHour2} />
      <em>:</em>
      <Flipper ref={flipperMinute1} />
      <Flipper ref={flipperMinute2} />
      <em>:</em>
      <Flipper ref={flipperSecond1} />
      <Flipper ref={flipperSecond2} />
    </div>
  );
};

export default FlipClock;