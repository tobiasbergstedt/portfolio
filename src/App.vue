<template>
  <Navigation v-if="!mobileView" />
  <NavigationMobile v-if="mobileView" />
  <main :class="{ open: showNav }">
    <div id="navigation-icon" v-if="mobileView" @click="showNav = !showNav">
      <i class="fas fa-bars" />
    </div>
    <RouterView />
  </main>
</template>

<script>
  import Navigation from './components/NavigationDesktop.vue'
  import NavigationMobile from './components/NavigationMobile.vue'

  export default {
    data: () => {
      return {
        mobileView: true,
        showNav: false,
        navLinks: [
          {
            text: 'Hem',
            path: '/',
            icon: 'ion-md-home'
          },
          {
            text: 'Om oss',
            path: '/about',
            icon: 'ion-md-people'
          },
          {
            text: 'Recensioner',
            path: '/reviews',
            icon: 'ion-md-happy'
          },
          {
            text: 'Kontakt',
            path: '/contact',
            icon: 'ion-md-call'
          },
          {
            text: 'Boka tid',
            path: '/booking',
            icon: 'ion-md-clock'
          }
        ]
      }
    },
    methods: {
      handleView() {
        this.mobileView = window.innerWidth <= 768
      }
    },
    components: {
      Navigation,
      NavigationMobile
    },
    created() {
      this.handleView()
      window.addEventListener('resize', this.handleView)
    }
  }
</script>

<style>
  @import url('https://use.fontawesome.com/releases/v5.9.0/css/all.css');

  * {
    margin: 0;
    padding: 0;
  }

  body {
    width: 100%;
    height: 100vh;
    margin: 0;
    padding: 0;
    font-family: 'Segoe UI', Tahoma;
    background-color: #7ca971;
  }

  #app {
    position: relative;
    width: 100vw;
    height: 100vh;
    color: #333;
    overflow: hidden;
  }

  .top-bar {
    display: flex;
    width: 100%;
  }

  #navigation-icon {
    padding: 10px 10px 20px;
    margin-right: 10px;
    cursor: pointer;
  }

  #navigation-icon i {
    font-size: 2rem;
  }

  main {
    position: relative;
    height: 800px;
    width: 100vw;
    padding: 20px;
    background-color: #eee;
    box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
    transition: 1s transform cubic-bezier(0, 0.12, 0.14, 1);
  }

  .open {
    transform: translateX(300px);
  }

  @media screen and (max-width: 768px) {
    main {
      top: 0;
    }
  }
</style>
