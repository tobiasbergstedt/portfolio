<template>
  <nav>
    <ul>
      <router-link
        :to="link.path"
        v-for="(link, index) in navLinks"
        :key="index"
      >
        <li>
          {{ link.text }}
        </li>
      </router-link>
    </ul>
    <div class="social-links">
      <i class="fab fa-linkedin" />
      <i class="fab fa-github" />
    </div>
  </nav>
</template>

<script>
  import navLinks from '../../public/navlinks.json'
  export default {
    data() {
      return {
        navLinks: navLinks
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
    color: #fff;
    font-size: 2rem;
    font-weight: bold;
    margin-bottom: 20px;
    cursor: pointer;
  }
  li:hover {
    color: #111;
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
    color: #fff;
    font-size: 2rem;
  }
</style>
