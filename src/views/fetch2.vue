<!-- <script setup>
import { onMounted, ref } from "vue";

let events = ref(null);
let searchKeyword = ref("");
let searchResults = ref([]);
let showNoResults = ref(false);

onMounted(async () => {
  let response = await fetch("event_zh-tw (1).json");
  let data = await response.json();
  events.value = data;
});

const searchEvent = () => {
  searchResults.value = events.value.filter(event =>
    event.title.toLowerCase().includes(searchKeyword.value.trim().toLowerCase())
  );
  showNoResults.value = searchResults.value.length === 0;
};

const handleEnterKey = (event) => {
  if (event.key === 'Enter') searchEvent();
};

const handleBackspaceKey = (event) => {
  if (event.key === 'Backspace') {
    searchResults.value = [];
    showNoResults.value = false;
  }
};
</script>

<template>
  <div class="header">
    <img src="/123.jpg" alt="" width="100%" height="50%">
  </div>

  <div class="container">
    <div class="inputColumn">
      <input type="text" v-model="searchKeyword" placeholder="輸入標題關鍵字" @keyup.enter="handleEnterKey" @keyup="handleBackspaceKey">
        
      <div class="search-results">
        <article v-if="searchResults.length > 0">
          <div class="card1" v-for="(result, index) in searchResults" :key="index">
            <img :src="result.image" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">{{ result.title }}</h5>
              <p class="card-text">{{ result.post_time }}</p>
              <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
          </div>
        </article>
        <p v-show="showNoResults">沒有符合搜尋條件的結果。</p> 
      </div>
    </div>

    <div class="event_card">
      <div class="card" v-for="(event, index) in events" :key="index" v-if="events !== null && events.length > 0">
        <img :src="event.image" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">{{ event.title }}</h5>
          <p class="card-text">{{ event.post_time }}</p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
      </div>
    </div>
  </div>

  <section class="section">
<h2>活動資訊</h2>
<div class="container">
        <div class="card__container">
            <div class="card__article">
              <img src="/src/views/圖/白河蓮花季系列活動3.jpg" alt="image" class="card__img">

              <div class="card__data">
                  <span class="card__description">Vancouver Mountains, Canada</span>
                  <h2 class="card__title">The Great Path</h2>
                  <a href="#" class="card__button">Read More</a>
              </div>
              </div>

            <div class="card__article">
              <img src="/src/views/圖/臺南香科年-魚頭君追香去2.jpg" alt="image" class="card__img">

              <div class="card__data">
                  <span class="card__description">Poon Hill, Nepal</span>
                  <h2 class="card__title">Starry Night</h2>
                  <a href="#" class="card__button">Read More</a>
              </div>
            </div>

            <div class="card__article">
              <img src="/src/views/圖/臺南香科年3.jpg" alt="image" class="card__img">

              <div class="card__data">
                  <span class="card__description">Bojcin Forest, Serbia</span>
                  <h2 class="card__title">Path Of Peace</h2>
                  <a href="#" class="card__button">Read More</a>
              </div>
              </div>
        </div>
      </div>

      <div class="container">
        
        <div class="card__container">
            <div class="card__article">
              <img src="/src/views/圖/發現玉井之美全國攝影比賽3.jpg" alt="image" class="card__img">

              <div class="card__data">
                  <span class="card__description">Vancouver Mountains, Canada</span>
                  <h2 class="card__title">The Great Path</h2>
                  <a href="#" class="card__button">Read More</a>
              </div>
              </div>

            <div class="card__article">
              <img src="/src/views/圖/臺南市國際龍舟錦標賽.webp" alt="image" class="card__img">

              <div class="card__data">
                  <span class="card__description">Poon Hill, Nepal</span>
                  <h2 class="card__title">Starry Night</h2>
                  <a href="#" class="card__button">Read More</a>
              </div>
            </div>

            <div class="card__article">
              <img src="/src/views/圖/Pokémon GO「官方路線」在台南.jpg" alt="image" class="card__img">

              <div class="card__data">
                  <span class="card__description">Bojcin Forest, Serbia</span>
                  <h2 class="card__title">Path Of Peace</h2>
                  <a href="#" class="card__button">Read More</a>
              </div>
              </div>


        </div>
      
      </div>
    </section>

</template>




<style scoped>

:root {
  /*========== Colors ==========*/
  /*Color mode HSL(hue, saturation, lightness)*/
  /* HSL(色相角度但不加單位0~360, 色彩飽和度0~100%, 色彩亮度0~100%)，色相 （Hue）、亮度/明度（Lightness）、飽和度（Saturation） */
  --first-color: hsl(82, 60%, 28%);
  --title-color: hsl(0, 0%, 15%);
  --text-color: hsl(0, 0%, 35%);
  --container-color: hsl(0, 0%, 100%);

  /*========== Font and typography ==========*/
  /*.5rem = 8px | 1rem = 16px ...*/
  --h2-font-size: 1.25rem;
  --small-font-size: .813rem;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.header {
  width: 100%;
  
}

/* .container {
  display: flex;
  justify-content: space-around;
  margin: 0 auto;
} */

.inputColumn {
  width: 30%;
}

.search-results {
  margin-top: 10px;
}

.card {
  width: 18rem;
  margin-bottom: 10px;
}



/*=============== BASE ===============*/

body {
  color: var(--text-color);
  background-color: rgb(223, 223, 223);
}

  hr{
    margin: 0 auto;
    width: 1200px;
  }

  h2{
    text-align: center;
    margin-top: 1.5rem;
  }

img {
  display: block;
  max-width: 100%;
  height: auto;
}

/*=============== CARD ===============*/


.section{
position: relative;
margin-block: 0 0;
.container {
  display: grid;
  place-items: center;
  padding-block: 3rem;
  
  .card__container {
    display: flex;
    gap: 3.5rem;
    
  .card__article {
    position: relative;
    overflow: hidden;
    

      /* Naming animations in hover */
      /* 指定了當滑鼠懸停時.card__data的樣式 */
      &:hover .card__data {
        animation: show-data 1s forwards;
        opacity: 1;
        transition: opacity .3s;
      }

      /* 白色小卡動時，底部不會消失 */
      &:hover {
        animation: remove-overflow 2s forwards;
        }

      /* 鼠標離開時，小卡片收起來的時候底部不會消失 */
      &:not(:hover) {
            animation: show-overflow 2s forwards;
          }
          
      /* 隱藏頂部 */
      &:not(:hover) .card__data {
          animation: remove-data 1s forwards;
          }

          .card__img {
          width: 328px;
          border-radius: 1.5rem;
          /* mask: radial-gradient(30px at 30px 30px,#0000 98%,#000) -30px -30px; */
          /* border: 0.5rem solid white; */
        }

        .card__data {
          width: 280px;
          background-color: var(--container-color);
          padding: 1.5rem 2rem;
          box-shadow: 0 8px 24px hsla(0, 0%, 0%, .15);
          border-radius: 1rem;
          position: absolute;
          /* bottom: -9rem; */
          left: 0;
          right: 0;
          margin-inline: auto;
          opacity: 0;
          /* 指定過渡效果的延遲時間和持續時間 */
          transition: opacity 1s 1s;
          background-color: white;
          .card__description {
          display: block;
          font-size: var(--small-font-size);
        }

        .card__title {
          font-size: var(--h2-font-size);
          color: var(--title-color);
          margin-bottom: .75rem;
        }

          .card__button {
            text-decoration: none;
            font-size: var(--small-font-size);
            font-weight: 500 px;
            color: var(--first-color);

              &:hover {
              text-decoration: underline;
            }
          }
        }
        }
    }
}
}
/* Card animation */
@keyframes show-data {
  50% {
    transform: translateY(-10rem);
  }
  100% {
    transform: translateY(-7rem);
  }
}

 /* 結束動畫時，卡片底部露出外面 */
@keyframes remove-overflow {
  to {
    overflow: initial;
  }
}

@keyframes remove-data {
  0% {
    transform: translateY(-7rem);
  }
  50% {
    transform: translateY(-10rem);
  }
  100% {
    transform: translateY(.5rem);
  }
}

@keyframes show-overflow {
  0% {
    overflow: initial;
    /* pointer-events: none; */
  }
  50% {
    overflow: hidden;
  }
}

</style> -->
