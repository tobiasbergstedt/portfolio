<template>
  <div id="work-details">
    <h1 class="blue-color">{{ works[this.index].title }}</h1>
    <p>{{ works[this.index].text }}</p>
    <div id="image-div">
      <img
        :srcset="works[this.index].srcset"
        sizes="(max-width: 767px) 350px, 700px"
        :src="works[this.index].fullImage"
        :alt="works[this.index].title + ' picture'"
      />
    </div>
  </div>
</template>

<script>
  import works from '../../public/works.json'

  export default {
    data() {
      return {
        works: works,
        workId: works[2].id,
        index: null,
        routeParam: parseInt(this.$route.params.workid)
      }
    },
    methods: {
      getId(id) {
        return works.findIndex((item) => item.id === id)
      }
    },
    created() {
      this.index = works.findIndex((obj) => obj.id === this.routeParam)
    }
  }
</script>

<style lang="scss" scoped>
  #work-details {
    margin-top: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    h1 {
      margin-bottom: 0.5rem;
      text-align: center;
    }
    p {
      margin-bottom: 2rem;
      font-size: 1.2rem;
      font-weight: 700;
      text-align: center;
    }
    #image-div {
      display: flex;
      justify-content: center;
      img {
        max-width: 100%;
        border-radius: 2rem;
        margin-bottom: 2rem;
      }
    }
  }
</style>
