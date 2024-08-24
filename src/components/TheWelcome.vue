<template>
  <base-title />
  <el-button @click="increment" type="success">Count is: {{ count }}</el-button><br>
  <el-button @click="changeNumber" type="primary">Number is: {{ number }}</el-button><br>
  <div>ref值:{{ testRef }}</div>
  <div>reactive值:{{ testReactive }}</div>
</template>

<script setup>
import { useCounterStore } from '@stores/counter'
import { useTestStore } from '@stores/test'

const counterStore = useCounterStore()
const testStore = useTestStore()
const { count } = storeToRefs(counterStore)
const { number } = storeToRefs(testStore)
const { increment } = counterStore
const { changeNumber } = testStore
const testRef = ref(111)
const testReactive = reactive({
  a: 1,
  b: 2,
})

onMounted(() => {
  console.log(testRef, 'ref值')
  console.log(testReactive, 'reactive值')
})

</script>

<style>

</style>
