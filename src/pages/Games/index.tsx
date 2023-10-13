import React from "react";
import { Button, Input } from 'antd';
import styles from './index.less';
import useCount from "./useCount";

const Games = () => {

  const [startTime, stopTime, reset, value] = useCount(10);

  // const debounce = (fun: any, delay: number) => {
  //   let timout: any = null;
  //   return (...args: any) => {
  //     clearInterval(timout);
  //     timout = setInterval(() => {
  //       fun.apply(this, args);
  //     }, delay)
  //   }
  // }

  const iptChange = (event: { target: { value: string; }; }) => {
    const { target: { value } } = event;
    console.log('hhh', value)
  }

  return (
    <div>
      <div>列表</div>
      <div className={styles.ipt}>
        <Input onChange={iptChange} />
      </div>
      <div style={{ marginTop: '10px' }}>
        <Button onClick={() => startTime()}>开始计时</Button>
      </div>
      <div style={{ marginTop: '10px' }}>
        <Button onClick={() => stopTime()}>暂停计时</Button>
      </div>
      <div style={{ marginTop: '10px' }}>
        <Button onClick={() => reset()}>重置计时</Button>
      </div>
      <div>
        计时器：<span>{value}</span>
      </div>
    </div>
  )
}

export default Games;