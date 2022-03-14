<template>
  <nav>
    <ul>
      <router-link
        :to="link.path"
        @click="hideMenu()"
        v-for="(link, index) in navLinks"
        :key="index"
      >
        <li>
          {{ link.text }}
        </li>
      </router-link>
    </ul>
    <div class="social-links">
      <a href="https://linkedin.com/in/tobias-bergstedt"
        ><i class="fab fa-linkedin"
      /></a>
      <a href="https://github.com/tobiasbergstedt"
        ><i class="fab fa-github"
      /></a>
      <a href="https://vimeo.com/user22554711"><i class="fab fa-vimeo" /></a>
    </div>
  </nav>
</template>

<script>
  import navLinks from '../../public/navlinks.json'

  export default {
    data() {
      return {
        navLinks: navLinks,
        main: '',
        showNav: false
      }
    },
    methods: {
      hideMenu() {
        this.main = document.querySelector('main')
        this.main.classList.toggle('open')
        this.main.style.transform = 'translateX(0)'
        this.main.style.transform = null
        // transform: translateX(-300px)
      }
    }
  }
</script>

<style scoped>
  nav {
    position: absolute;
    padding: 20px 0 0 0;
    min-height: 100vh;
  }

  ul {
    list-style: none;
    width: 200px;
    padding-left: 40px;
  }

  li {
    color: #262626;
    font-size: 2rem;
    font-weight: bold;
    margin-bottom: 20px;
    cursor: pointer;
  }
  li:hover {
    color: #000;
  }

  a {
    text-decoration: none;
  }

  a:visited {
    color: #333;
  }

  i {
    position: absolute;
    right: 5px;
    top: 10px;
    font-size: 1.6rem;
    color: #aaa;
    cursor: pointer;
  }

  .social-links {
    position: absolute;
    bottom: 55px;
    margin-left: 40px;
  }

  .social-links i {
    position: relative;
    margin: 0 20px 0 0;
    color: #262626;
    font-size: 2rem;
  }

  .social-links i:hover {
    color: #000;
  }
</style>
