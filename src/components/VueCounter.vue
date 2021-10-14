<template>
  <h2>Vue count = {{ count }}</h2>
  <button @click="subtract">-</button>
  <button @click="add">+</button>
  <button @click="reset">reset</button>
</template>

<script>
export default {
  name: 'VueCounter',
  props: {
    demo: String,
  },
  data() {
    return {
      count: 0,
    }
  },
  methods: {
    add() {
      this.count++
    },
    subtract() {
      this.count--
    },
    reset() {
      this.count = 0
    },
  },
}
</script>

<style scoped></style>
