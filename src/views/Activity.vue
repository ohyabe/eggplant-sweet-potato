<script setup>
import { onMounted, ref } from "vue";

// 聲明數據
const pictures = ref([
  { image: "/public/imags/活動/1.jpg", link: "https://www.youtube.com/watch?v=6RBYmR5GesQ&ab_channel=%E6%BB%BE%E7%9F%B3%E5%94%B1%E7%89%87ROCKRECORDS", alt: "Image 1" },
  { image: "/public/imags/活動/2.webp", link: "https://www.youtube.com/watch?v=NjdqQyC7Rkc&ab_channel=MilkMilkxi", alt: "Image 2" },
  { image: "/public/imags/活動/3.jpg", link: "https://www.youtube.com/shorts/n9B-ctjfob4", alt: "Image 3" }
]);
const selectedImage = ref("");
const selectedLink = ref("");
const selectedAlt = ref("");

// 定義方法
const setRandomImage = () => {
  const randomIndex = Math.floor(Math.random() * pictures.value.length);
  selectedImage.value = pictures.value[randomIndex].image;
  selectedLink.value = pictures.value[randomIndex].link;
  selectedAlt.value = pictures.value[randomIndex].alt;
};

// 在組件加載後執行
onMounted(setRandomImage);


// 宣告圖片資料的陣列
const images = ref([
  { image: "/public/imags/活動/4.jpg", alt: "Image 1" },
  { image: "/public/imags/活動/5.jpg", alt: "Image 2" },
  { image: "/public/imags/活動/6.jpg", alt: "Image 3" } ,
  { image: "/public/imags/活動/7.jpg", alt: "Image 1" },
  { image: "/public/imags/活動/8.webp", alt: "Image 2" },
  { image: "/public/imags/活動/9.jpg", alt: "Image 3" }
  // 添加更多圖片資料
]);

// 定義一個對象來保存活動數據
let events = ref(null);
let searchKeyword = ref("");
let searchResults = ref([]);
let showNoResults = ref(false);

// 在組件加載後，異步獲取活動數據
onMounted(async () => {
  let response = await fetch("event_zh-tw (1).json");
  let data = await response.json();
  events.value = data;
});

// 執行搜索操作
const searchEvent = () => {
  searchResults.value = events.value.filter(event =>
    event.title.toLowerCase().includes(searchKeyword.value.trim().toLowerCase())
  );
  showNoResults.value = searchResults.value.length === 0;
};

// 處理按下 Enter 鍵的事件
const handleEnterKey = (event) => {
  if (event.key === 'Enter') searchEvent();
};

// 處理按下 Backspace 鍵的事件
const handleBackspaceKey = (event) => {
  if (event.key === 'Backspace') {
    searchResults.value = [];
    showNoResults.value = false;
  }
};


</script>



<template>
  <!-- 頁面標題和內容 -->
  <div class="header">
    <img src="/123.jpg" alt="" width="100%" height="50%">
  </div>

  <div class="container">
    <div class="inputColumn">
      <!-- 搜索框 -->
      <input type="text" v-model="searchKeyword" placeholder="輸入標題關鍵字" @keyup.enter="handleEnterKey" @keyup="handleBackspaceKey">
        
      <div class="search-results">
        <article v-if="searchResults.length > 0">
          <!-- 顯示搜索結果 -->
          <div class="card1" v-for="(result, index) in searchResults" :key="index">
            <img :src="result.image" class="card-img-top" :alt="result.alt">
            <div class="card-body">
              <h5 class="card-title">{{ result.title }}</h5>
              <p class="card-text">{{ result.post_time }}</p>
              <a href="#" class="btn btn-outline-info">Go somewhere</a>
            </div>
          </div>
        </article>
        <!-- 顯示無搜索結果提示 -->
        <p v-show="showNoResults">沒有符合搜尋條件的結果。</p> 
      </div>
    </div>

    <!-- 活動資訊區域 -->
    <section class="section">
      <h2>活動資訊</h2>
      <div class="container2">
        <!-- 卡片容器 -->
        <div class="card__container">
          <!-- 活動卡片 -->
          <div class="card__article" v-for="(item, index) in events" :key="index">
            <!-- 插入圖片 -->
            <img :src="images[index % images.length].image" class="card__img" :alt="images[index % images.length].alt">
            <div class="card__data">
              <span class="card__description">{{ item.post_time }}</span>
              <h2 class="card__title">{{ item.title }}</h2>
              <a href="#" class="card__button">Read More</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>

  <a :href="selectedLink" target="_blank" class="random-image-container">
    <img class="ad_img" :src="selectedImage" :alt="selectedAlt">
  </a>

</template>


<style>

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
  /* position: relative; */
}

.container {
  display: flex;
  justify-content: space-around;
  margin: 0 auto;
}

.inputColumn {
  width: 30%;
  input {
    margin-top: 2rem;
    margin-left: -3.5rem;
  }
}

.search-results {
  margin-top: 1rem;
  margin-left: -2rem;
  

}


  .card-body{
    position: relative;
    width: 11rem;
    margin-left: -22px;
    margin-top: -15px;
    padding: 18px 2px;
    background-color: rgb(255, 255, 255);
    z-index: 5;
    border-radius: 0 0 3% 3%;
    text-align: center;
      h5{
        padding-bottom: 5px;
        font-weight: bold;
    }
  }



/*=============== BASE ===============*/

body {
  color: var(--text-color);
  background-color: rgb(242, 242, 242);
}

  hr{
    margin: 0 auto;
    width: 1200px;
  }

  h2{
    text-align: center;
    margin: 2rem 0;
    font-weight: bold;
    
  }

img {
  display: block;
  max-width: 100%;
  height: auto;
}

/*=============== CARD ===============*/


.section{
position: relative;
margin-block: 45px 0;
margin-bottom: 20px;

.container2 {
    /* flex-wrap: wrap; */
    /* display: grid; 
    place-items: center;  */
    /* grid-template-columns: 200px 200px 200px; */
    
  .card__container {
    display: flex;
    gap: 3.5rem;
    flex-wrap: wrap;
    
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
    transform: translateY(-12rem);
  }
  100% {
    transform: translateY(-9rem);
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
    transform: translateY(-9rem);
  }
  50% {
    transform: translateY(-12rem);
  }
  100% {
    transform: translateY(.5rem);
  }
}

@keyframes show-overflow {
  0% {
    overflow: initial;
    pointer-events: none;
  }
  50% {
    overflow: hidden;
  }
}

.random-image-container {
  
  position: absolute;
  transform: translateY(-550px);
  left: 45px;
  z-index: 1;
  /* width: 120px;
  height: 600px; */
}
.ad_img {
  
  display: inline-block;
  width: 200px;
  height: 600px;
  object-fit: cover;
}
</style>
