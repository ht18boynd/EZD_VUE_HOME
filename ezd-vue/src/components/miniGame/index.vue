<template>
  <div>
    <main-screen
      v-if="statusMatch === 'default'"
      @onStart="onHandleBeforeStart($event)"
    />
    <interact-screen v-if="statusMatch === 'match'" 
    
    :cardsContext="settings.cardsContext"
    @onFinish="onGetResult" />
   
    <result-screen
    v-if="statusMatch === 'result'"
    :timer="timer"
    @onStartAgain="statusMatch = 'default'"
  />
  </div>

 
</template>

<script>
import MainScreen from "@/components/miniGame/mainGame.vue";
import InteractScreen from "@/components/miniGame/interactScreen.vue";
import ResultScreen from "@/components/miniGame/resultScreen.vue";

import { shuffled } from "@/utils/array";

export default {
  name: "miniGame",
  components: {
    MainScreen,
    InteractScreen,
    ResultScreen,
  },
  data() {
    return {
      settings: {
        totalOfBlocks: 0,
        cardsContext: [],
        startedAt: null,
      },
      userName:"",
      timer: 0,
      statusMatch: "default",
    };
  },
  methods: {
    onHandleBeforeStart(configs) {
      this.settings.totalOfBlocks = configs.totalOfBlocks;
      console.log("runing", configs);
      const firstCards = Array.from(
        { length: this.settings.totalOfBlocks / 2 },
        (_, i) => i + 1
      );
     const secondCards = [...firstCards];
     const cards = [...firstCards, ...secondCards];
     this.settings.cardsContext = shuffled(shuffled(shuffled(cards)));
     this.settings.startedAt = new Date().getTime();
      console.log(cards);
      this.statusMatch = "match";
    },

    onGetResult() {
      this.statusMatch = "result";
      this.timer = new Date().getTime() - this.settings.startedAt;
    },
  },


};
</script>

<style lang="css" scoped>
@import url("https://fonts.googleapis.com/css2?family=Odibee+Sans&display=swap");
:root {
  --primary: #ffce00;
  --sencondary: #fe4880;
  --dark: #212121;
  --light: #f3f3f3;
}

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

body {
  font-family: "Odibee Sans", sans-serif;
  font-size: 20px;
  width: 100%;
  background-color: #212121;
}
</style>
