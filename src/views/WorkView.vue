<template>
  <div id="h1-container">
    <h1>
      Below is a <span class="blue-color">selection</span> of my previous works.
    </h1>
    <h1>Feel free to <span class="blue-color">check them out!</span></h1>
  </div>
  <div id="work-container">
    <div id="work-cards-container">
      <div class="list-complete-item" v-for="work in works" :key="work.id">
        <img :src="work.url" alt="" />
        <div class="overlay">
          <div class="overlay-div-1" />
          <div class="text">
            <p>{{ work.text }}</p>
            <router-link v-if="work.path" :to="work.path">
              <input class="button" type="button" :value="work.button" />
            </router-link>
            <a v-else :href="work.link">
              <input class="button" type="button" :value="work.button" />
            </a>
          </div>
          <div class="overlay-div-2">
            <div class="after-text">{{ work.title }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import works from '../../public/works.json'

  export default {
    data() {
      return {
        works: works
      }
    }
  }
</script>

<style lang="scss" scoped>
  h1 {
    max-width: 70%;
    text-align: center;
    margin-left: auto;
    margin-right: auto;
  }
  #h1-container {
    margin-top: 1rem;
    margin-bottom: 2rem;
  }
  #work-container {
    display: flex;
  }
  #work-cards-container {
    display: inline-grid;
    gap: 2rem;
    grid-column-gap: 2rem;
    grid-template-columns: 1fr;
    margin-left: auto;
    margin-right: auto;
  }
  .list-complete-item {
    width: 300px;
    height: 500px;
    padding: 0;
    display: inline-block;
    position: relative;
    box-shadow: 0 3px 4px 1px rgba(0, 0, 0, 0.25);
    border-radius: 0.5rem;
    overflow: hidden;
    display: flex;
    align-items: flex-end;
  }
  .overlay {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    height: 100%;
    width: 100%;
    opacity: 0;
    transition: 0.5s ease;
    border-radius: 0.5rem;
    .overlay-div-1 {
      position: absolute;
      left: -100px;
      top: -52px;
    }
    .overlay-div-1,
    .overlay-div-2 {
      width: 700px;
      height: 150px;
      background-color: #262626;
      border-bottom: 20px solid #5d8fd1;
      transform: rotateZ(24deg);
    }
    .overlay-div-2 {
      position: absolute;
      bottom: -150px;
      left: -130px;
      border-top: 20px solid #5d8fd1;
      .after-text {
        transform: rotateZ(-24deg);
        position: relative;
        left: 85px;
        bottom: 82px;
      }
    }
  }
  .list-complete-item:hover .overlay {
    opacity: 1;
  }
  .after-text {
    color: #fff;
    margin: 1rem;
    font-size: 1.6rem;
    font-weight: 600;
    position: absolute;
    bottom: 0;
    left: 0;
  }
  .text {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 235px;
    height: 165px;
    position: absolute;
    overflow: hidden;
    top: 120px;
    font-size: 18px;
    background-color: #262626;
    color: #fff;
    text-align: center;
    margin: 2rem 1rem;
    padding: 1rem;
    border-radius: 1rem;
    .button {
      margin-top: 1rem;
      margin-bottom: 0;
    }
  }

  @media screen and (min-width: 768px) {
    #work-cards-container {
      grid-template-columns: 1fr 1fr;
    }
  }

  @media screen and (min-width: 1400px) {
    #work-cards-container {
      grid-template-columns: 1fr 1fr 1fr;
    }
  }

  @media screen and (min-width: 1700px) {
    #work-cards-container {
      grid-template-columns: 1fr 1fr 1fr 1fr;
    }
  }
</style>
