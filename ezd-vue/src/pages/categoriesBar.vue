<template>
  <!--  CATEGORIES BAR -->

  <div class="categories-bar">
    <div class="categories-wrapper swiper-wrapper">
      <div
        class="category-item swiper-slide"
        v-for="game in gamelist"
        :key="game.id"
      >
        <span align="center">
          <img
            class="card-img-top"
            :src="game.imageName"
            :alt="game.nameGame"
          />
          <p>{{ game.nameGame }}</p></span
        >
      </div>
    </div>
  </div>

  <!--  CATEGORIES BAR -->
</template>

<script>
import GameService from "@/service/GameService";

export default {
  name: "cateBar",
  data() {
    return {
      gamelist: [],
    };
  },
  methods: {
    async getAllGames() {
      try {
        const response = await GameService.getAllGames();
        this.gamelist = response.data.sort((a, b) => b.id - a.id);
      } catch (error) {
        console.error("Lỗi khi lấy danh sách trò chơi: ", error);
      }
    },
  },
  async created() {
    await this.getAllGames();
  },
};
</script>

<style scoped>
.categories-wrapper {
  display: flex;
  flex-wrap: wrap;
  gap: 14px; /* Khoảng cách giữa các category-item */
}

.category-item {
  flex-basis: calc(15% - 14px); /* 20% và trừ đi khoảng cách */
  margin-top: 14px; /* Khoảng cách dưới mỗi category-item */
  margin-bottom: 14px; /* Khoảng cách dưới mỗi category-item */
  white-space: nowrap;
  border: 1px solid var(--border-color);
  border-radius: var(--btn-border-radius);
  font-size: 13px;
  font-weight: var(--heading-font-weight);
  display: flex;
  align-items: center;
  padding: 9px 16px;
  text-decoration: none;
}

.category-item svg {
  margin-right: 7px;
}

.category-item:hover {
  display: inline-flex;
  align-self: center;
  border-radius: var(--btn-border-radius);
  border: solid 1px transparent;
  background-image: linear-gradient(
      var(--body-background),
      var(--body-background)
    ),
    linear-gradient(
      to right,
      var(--primary-gradient-color),
      var(--secondary-gradient-color)
    );
  background-origin: border-box;
  background-clip: content-box, border-box;
}

.category-item:hover a {
  color: inherit;
}
</style>
