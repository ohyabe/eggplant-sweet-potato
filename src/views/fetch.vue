<script setup>
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
</template>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.header {
  width: 100%;
  
}

.container {
  display: flex;
  justify-content: space-around;
  margin: 0 auto;
}

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
</style>
