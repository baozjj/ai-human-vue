import fangwuguanli from '@/assets/images/index/fangwuguanli.png'
import cheweiguanli from '@/assets/images/index/cheweiguanli.png'
import cheliangguanli from '@/assets/images/index/cheliangguanli.png'
import renyuanguanli from '@/assets/images/index/renyuanguanli.png'
import fangkeshenbao from '@/assets/images/index/fangkeshenbao.png'
import yitizhengji from '@/assets/images/index/yitizhengji.png'
import toupiaobiaojue from '@/assets/images/index/toupiaobiaojue.png'
import manyidudiaocha from '@/assets/images/index/manyidudiaocha.png'

import wuyebaoshi from '@/assets/images/index/wuyebaoshi.png'
import wuyebaoxiu from '@/assets/images/index/wuyebaoxiu.png'
import wuyejiaofei from '@/assets/images/index/wuyejiaofei.png'
import meirongmeifa from '@/assets/images/index/meirongmeifa.png'

export const selfServiceArr = [
  {
    title: '房屋管理',
    imgUrl: fangwuguanli
  },
  {
    title: '车位管理',
    imgUrl: cheweiguanli
  },
  {
    title: '车辆管理',
    imgUrl: cheliangguanli
  },
  {
    title: '人员管理',
    imgUrl: renyuanguanli
  },
  {
    title: '访客申报',
    imgUrl: fangkeshenbao
  },
  {
    title: '议题征集',
    imgUrl: yitizhengji
  },
  {
    title: '投票表决',
    imgUrl: toupiaobiaojue
  },
  {
    title: '满意度调查',
    imgUrl: manyidudiaocha
  }
]

export const managementServiceArr = [
  {
    title: '物业报事',
    imgUrl: wuyebaoshi
  },
  {
    title: '物业报修',
    imgUrl: wuyebaoxiu
  },
  {
    title: '物业缴费',
    imgUrl: wuyejiaofei
  },
  {
    title: '智能客服',
    imgUrl: meirongmeifa,
    click: () => {
      console.log(12312312)
    }
  }
]
