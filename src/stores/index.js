import { createPinia } from 'pinia'

const pinia = createPinia()

// 注册pinia插件
pinia.use(({ pinia, app, store, options }) => {
  console.log(pinia, app, store, options, 'pinia插件参数')
  // 公共的自定义属性和方法
  return {
    key1: 1,
    key2: 'b',
    // 示例方法  
    exampleMethod() {
      console.log('这是一个来自 Pinia 插件的方法');
    },  
  }
})

export default pinia