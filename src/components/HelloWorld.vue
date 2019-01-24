<template>
  <div class="hello">
    <h1>The count is: {{ $store.state.count }}</h1>
    <button class="btn btn-primary" @click="increment">increase</button>
    <button class="btn btn-primary" @click="decrement">decrease</button>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "HelloWorld",
  computed: mapGetters(["fetchCount"]),
  methods: mapActions(["increment", "decrement"])
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
