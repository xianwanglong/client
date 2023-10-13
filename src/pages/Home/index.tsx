import React from "react";
import { Button } from "antd";


const Home = () => {

  const asyncFun = () => {
    return new Promise((resole) => {
      setTimeout(() => {
        resole('true')
      }, 2000)
    })
  }

  const btnButton = () => {
    asyncFun().then((result) => {
      console.log("hresult",result)
    })
    console.log("hhhhh")
  }

  return (
    <div>
      <div>首页</div>
      <Button onClick={btnButton}>点击</Button>
    </div>
  )
}

export default Home;