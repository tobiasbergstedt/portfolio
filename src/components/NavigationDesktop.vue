<template>
  <nav>
    <img src="assets/" alt="" />
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
      <div id="social-links">
        <i class="fab fa-linkedin" />
        <i class="fab fa-github" />
      </div>
    </ul>
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
    background-color: white;
    display: flex;
    width: 100%;
    height: 80px;
    align-items: center;
  }

  ul {
    display: flex;
    list-style: none;
    padding: 0;
    margin: 0 20px 0 0;
  }

  li {
    font-size: 1.5rem;
    padding: 0.7rem 1.4rem;
    margin-right: 0.5rem;
    cursor: pointer;
  }

  li:hover {
    color: #7ca971;
  }

  a {
    text-decoration: none;
  }

  a:visited {
    color: #333;
  }

  #social-links {
    align-self: center;
    position: absolute;
    right: 0;
  }

  i {
    position: relative;
    margin-right: 2rem;
    font-size: 1.6rem;
    color: #333;
    cursor: pointer;
  }
</style>
