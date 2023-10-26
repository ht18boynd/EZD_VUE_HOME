<template>
  <div class="screen">

    <h1>✨ Congratulations ✨</h1>
    <h3>{{ Math.round(timer / 920) }} seconds</h3>
    <button @click="onStartAgain">Start Again</button>
  </div>
</template>

<script>
export default {
name:"resultGame",
props: {
    timer: {
      type: Number,
      default: 0,
    },
  },
  emits: ["onStartAgain"],
  data(){
    return{
      BASE_URL: process.env.BASE_URL,
    }
  },
  methods: {
    onStartAgain() {
      this.$emit("onStartAgain");
    },
  },

}
</script>

<style scoped>
.screen {
  width: 100%;
  height: 480px;

  background-color: linear-gradient(116.85deg, rgba(252, 70, 107, 0.3) 0%, rgba(63, 94, 251, 0.3) 100%);
 
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.screen h1 {
  font-size: 5rem;
}

.screen h3 {
  margin-top: 1.5rem;
  font-size: 3rem;
}

.screen button {
  font: var(--font);
  background: transparent;
  box-shadow: none;
  border: 1px solid #f3f3f3;
  color: #f3f3f3;
  margin: 1rem;
  padding: 1rem 1.25rem;
  border-radius: 0.5rem;
  font-size: 1.25rem;
  cursor: pointer;
  transition: background 0.3s ease-in-out;
}

.screen button:hover {
  background-color: #f3f3f3;
  color: #212121;
}
</style>