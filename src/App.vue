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
        works: [
          {
            id: 14,
            title: 'Arena Ultimatum',
            text: 'An individual project for an online sports manager game. (Currently only styled for mobile devices)',
            path: 'https://arena-5ce01.web.app',
            url: '/assets/work/arenaultimatum.png',
            button: 'Check me out!'
          },
          {
            id: 13,
            title: 'Galleri TB',
            text: 'An individual project creating a WordPress page for an art gallery.',
            // path: '/work/' + this.id,
            path: '/work/13',
            url: 'assets/work/galleritb.png',
            button: 'Check me out!'
          },
          {
            id: 12,
            title: 'Season ticket',
            text: 'Season ticket design for Frillesås Bandy, for the season 2022/2023.',
            // path: '/work/' + this.id,
            path: '/work/12',
            url: 'assets/work/card2.png',
            button: 'Check me out!'
          },
          {
            id: 11,
            title: 'Swindlr',
            text: 'A group project at ITHS where we created a dating site called Swindlr.',
            // path: '/work/' + this.id,
            path: '/work/11',
            url: 'assets/work/swindlr.png',
            button: 'Check me out!'
          },
          {
            id: 10,
            title: 'Season ticket',
            text: 'Season ticket design for Frillesås Bandy, for the season 2021/2022.',
            // path: '/work/' + this.id,
            path: '/work/10',
            url: 'assets/work/card.png',
            button: 'Check me out!'
          },
          {
            id: 9,
            title: 'PCC',
            text: 'An individual project at ITHS where I created a web app for comparing phones by properties, benchmark and price.',
            // path: '/work/' + this.id,
            path: '/work/9',
            url: 'assets/work/pcc.png',
            button: 'Check me out!'
          },
          {
            id: 8,
            title: 'Merchandise',
            text: 'Merchandise designs for Frillesås Bandy.',
            // path: '/work/' + this.id,
            path: '/work/8',
            url: 'assets/work/t-shirts.png',
            button: 'Check me out!'
          },
          {
            id: 7,
            title: 'TTVDB',
            text: 'An individual project at ITHS where I created a web app for checking the facts about your favorite tv shows.',
            // path: '/work/' + this.id,
            path: '/work/7',
            url: 'assets/work/ttvdb.png',
            button: 'Check me out!'
          },
          {
            id: 6,
            title: 'Garden shed',
            text: 'A 3D model of a sea-side garden shed, made with Autodesk Maya.',
            // path: '/work/' + this.id,
            path: '/work/6',
            url: 'assets/work/shed.png',
            button: 'Check me out!'
          },
          {
            id: 5,
            title: 'Frillesås Bandy',
            text: 'A group project at ITHS where we created a new website design idea for Frillesås Bandy.',
            // path: '/work/' + this.id,
            path: '/work/5',
            url: 'assets/work/fbk.png',
            button: 'Check me out!'
          },
          {
            id: 4,
            title: 'Bridge',
            text: 'A 3D model of a stone bridge, made with Autodesk Maya.',
            // path: '/work/' + this.id,
            path: '/work/4',
            url: 'assets/work/bridge.png',
            button: 'Check me out!'
          },
          {
            id: 3,
            title: 'Bandy players',
            text: 'A vector graphic of two bandy players, made in Adobe Illustrator.',
            // path: '/work/' + this.id,
            path: '/work/3',
            url: 'assets/work/players.png',
            button: 'Check me out!'
          },
          {
            id: 2,
            title: 'Arena',
            text: 'A 3D model aerial view of a bandy arena, made with Autodesk Maya.',
            // path: '/work/' + this.id,
            path: '/work/2',
            url: 'assets/work/arena.png',
            button: 'Check me out!'
          },
          {
            id: 1,
            title: 'Kitchen',
            text: 'A 3D model of a small kitchen, made with Autodesk Maya.',
            // path: '/work/' + this.id,
            path: '/work/1',
            url: 'assets/work/kitchen.png',
            button: 'Check me out!'
          }
        ]
      }
    },
    methods: {
      handleView() {
        this.mobileView = window.innerWidth <= 767
      },
      historyBack(e) {
        var activeElement = document.activeElement
        var inputs = ['input', 'textarea']

        if (
          activeElement &&
          inputs.indexOf(activeElement.tagName.toLowerCase()) === -1 &&
          e.keyCode === 8
        ) {
          this.$router.go(-1)
        }
      }
    },
    components: {
      Navigation,
      NavigationMobile
    },
    created() {
      this.handleView()
      window.addEventListener('resize', this.handleView)
      window.addEventListener('keyup', this.historyBack)
    }
  }
</script>

<style lang="scss">
  @import url('https://use.fontawesome.com/releases/v5.9.0/css/all.css');
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;700&display=swap');

  * {
    margin: 0;
    padding: 0;
    font-family: 'Roboto', sans-serif;
  }

  body {
    width: 100%;
    height: 100vh;
    margin: 0;
    padding: 0;
    background-color: #5d8fd1;
  }

  #app {
    position: relative;
    max-width: 100vw;
    min-height: 100vh;
    color: #fff;
    overflow: hidden;
  }

  .blue-color {
    color: #5d8fd1;
  }

  .larger-font {
    font-size: 1.4rem;
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

  .button {
    font-size: 1.5rem;
    font-family: 'Roboto', sans-serif;
    border: none;
    background-color: #5d8fd1;
    color: black;
    box-shadow: inset 0 -0.6em 0 -0.35em rgba(0, 0, 0, 0.17);
    padding: 0.7rem 1.4rem;
    border-radius: 4px;
    cursor: pointer;
    margin-top: 3rem;
    margin-bottom: 2rem;
    &:hover {
      background-color: #d19f5d;
    }
  }

  main {
    position: relative;
    max-width: 100vw;
    min-height: calc(100vh - 40px);
    padding: 20px;
    background: #262626;
    background: linear-gradient(0deg, #000 0%, #262626 100%);
    box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
    transition: 1s transform cubic-bezier(0, 0.12, 0.14, 1);
  }

  .open {
    transform: translateX(300px);
  }

  @media screen and (min-width: 768px) {
    main {
      min-height: calc(100vh - 120px);
    }
  }

  @media screen and (min-width: 1024px) {
    main {
      padding-left: 200px;
      padding-right: 200px;
    }
  }
</style>
