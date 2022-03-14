<template>
  <nav>
    <router-link to="/" id="logo" />
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
        <a href="https://linkedin.com/in/tobias-bergstedt"
          ><i class="fab fa-linkedin"
        /></a>
        <a href="https://github.com/tobiasbergstedt"
          ><i class="fab fa-github"
        /></a>
        <a href="https://vimeo.com/user22554711"><i class="fab fa-vimeo" /></a>
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
    background-color: #262626;
    display: flex;
    width: 100%;
    height: 80px;
    align-items: center;
  }

  #logo {
    background: url('/assets/logo.svg') center top no-repeat;
    margin-left: 1rem;
    margin-right: 1rem;
    width: 60px;
    height: 60px;
  }

  #logo:hover {
    background-image: url('/assets/logo-hover.svg');
  }

  ul {
    display: flex;
    list-style: none;
    padding: 0;
    margin: 0 20px 0 0;
  }

  li {
    padding: 0.7rem 1.4rem;
    margin-right: 0.25rem;
    cursor: pointer;
  }

  li:hover {
    color: #5d8fd1;
  }

  a {
    text-decoration: none;
    color: #fff;
  }

  a:visited {
    color: #fff;
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
    color: #fff;
    cursor: pointer;
  }

  i:hover {
    color: #5d8fd1;
  }

  @media screen and (min-width: 1200px) {
    nav {
      padding-left: 200px;
    }
    #social-links {
      padding-right: 200px;
    }
  }

  @media screen and (min-width: 1350px) {
    li {
      font-size: 1.5rem;
    }
  }
</style>
