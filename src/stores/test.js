import { defineStore } from 'pinia'
import { useCounterStore } from '@stores/counter'

export const useTestStore = defineStore('test', {
  state: () => {
    return {
      number: 0
    }
  },
  getters: {
    numberString(state) {
      return state.number + ''
    },
  },
  actions: {
    changeNumber() {
      this.number++
      useCounterStore().increment()
    }
  }
})