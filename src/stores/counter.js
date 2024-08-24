import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', {
  state: () => {
    return {
      count: 0
    }
  },
  getters: {
    doubleCount(state) {
      return state.count * 2
    },
  },
  actions: {
    increment() {
      this.count++
      this.key1++
      console.log(this.key1, this.key2, this.doubleCount)
      this.go()
      this.exampleMethod()
    },
    go() {
      console.log('go方法')
    }
  }
})
