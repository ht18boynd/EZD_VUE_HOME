<template>
  <div>
    <startHeader></startHeader>
    <div class="cs-height_100 cs-height_lg_70"></div>
    <section class="cs-page_head cs-bg" data-src="assets/img/page_head_bg.svg">
      <div class="container">
        <div class="text-center">
          <h1 class="cs-page_title">Pokemon GO !!!</h1>
          <ol class="breadcrumb">
            <li class="breadcrumb-item"><a href="index.html">Home</a></li>
            <li class="breadcrumb-item active">Game</li>
          </ol>
        </div>
      </div>
    </section>
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

    <footerHome></footerHome>
  </div>

 
</template>

<script>
import MainScreen from "@/components/miniGame/mainGame.vue";
import InteractScreen from "@/components/miniGame/interactScreen.vue";
import ResultScreen from "@/components/miniGame/resultScreen.vue";
import startHeader from "@/pages/startHeader.vue";
import footerHome from "@/pages/footer.vue";
import { shuffled } from "@/utils/array";

export default {
  name: "miniGame",
  components: {
    MainScreen,
    InteractScreen,
    ResultScreen,
    startHeader,
    footerHome
    
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

