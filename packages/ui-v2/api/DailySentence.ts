import axios from 'axios'

const getDailySentence1 = async () => {
  return await axios.get('https://api.xygeng.cn/one')
}

const getDailySentence2 = async () => {
  return await axios.get('https://v1.hitokoto.cn/')
}

enum ILevel {
  default = 0, // 还没有用到
  v1 = 1,
  v2 = 2
}


// 优先级
// let level: ILevel = ILevel['v2'];


const getDailySentence = async (level: ILevel) => {
  const d1 = await getDailySentence1();
  const d2 = await getDailySentence2();
  const data = { content: '坚持你的坚持✊', origin: '《Sparrow》' }

  if (level == ILevel['v2']) {
    if (d2?.data?.hitokoto) {
      data.content = d2.data.hitokoto;
      data.origin = d2.data.from;
    } else if (d1.data?.code === 200) {
      data.content = d2.data.data.content;
      data.origin = d2.data.data.origin;
    }
  }

  if (level == ILevel['v1']) {
    if (d1.data?.code === 200) {
      data.content = d1.data.data.content;
      data.origin = d1.data.data.origin;
    } else if (d2?.data?.hitokoto) {
      data.content = d2.data.hitokoto;
      data.origin = d2.data.from;
    }
  }

  return new Promise(res => {
    res(data);
  })
}

export {
  getDailySentence1,
  getDailySentence2,
  getDailySentence
}