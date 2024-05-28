<template>
  <div id="greeting">
    <p id="hi-my-name">Hi, my name is</p>
    <h1 class="blue-color">Tobias Bergstedt</h1>
    <div>
      <h2 class="profession1">Front End Developer</h2>
      <h2 class="profession2">Graphic Designer</h2>
      <h2 class="profession3">3D Artist</h2>
    </div>
    <p id="bio">
      I'm a <span class="blue-color">Front End Developer</span> with a
      background in <span class="blue-color">graphic design</span> and a
      bachelor's degree from studying
      <span class="blue-color">3D animation and visualization</span>.
    </p>
    <div id="button-container">
      <router-link to="/contact">
        <input class="button" type="button" value="Contact me!" />
      </router-link>
    </div>
  </div>
  <div class="list-container">
    <ul>
      <a href="https://tobiasbergstedt.se/pellerin"
        ><li id="card-8"><div class="overlay" /></li
      ></a>
      <a href="https://arena-5ce01.web.app"
        ><li id="card-7"><div class="overlay" /></li
      ></a>
      <a href="https://tobiasbergstedt.se/sanrachna"
        ><li id="card-9"><div class="overlay" /></li
      ></a>
      <a href="galleritb/index.html"
        ><li id="card-6"><div class="overlay" /></li
      ></a>
      <!-- <router-link to="/work/12"
        ><li id="card-5"><div class="overlay" /></li
      ></router-link> -->
    </ul>
  </div>
</template>

<style lang="scss" scoped>
  .list-container {
  }
  ul {
    display: grid;
    place-items: center;
    gap: 2rem;
    grid-column-gap: 2rem;
    grid-template-columns: 1fr 1fr;
    max-width: 100%;
    list-style: none;
    a {
      max-width: 300px;
    }
  }
  li {
    width: 120px;
    height: 160px;
    background-color: white;
    color: black;
    border-radius: 1rem;
    overflow: hidden;
  }
  #hi-my-name {
    margin-left: 1rem;
  }
  #greeting {
    margin: 1rem;
    max-width: 950px;
    h2 {
      font-size: 1.5rem;
    }
    .profession1 {
      margin-left: 2rem;
    }
    .profession2 {
      margin-left: 3rem;
    }
    .profession3 {
      margin-left: 4rem;
    }
    #bio {
      margin-top: 2rem;
    }
  }
  .overlay {
    background: url(/assets/card-overlay.png) no-repeat center center;
    -webkit-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
    position: relative;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    height: 100%;
    width: 100%;
    opacity: 0;
    transition: 0.5s ease;
  }
  li:hover .overlay {
    opacity: 0.9;
  }
  #card-1 {
    background: url(/assets/card-1.png) no-repeat center center;
    -webkit-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
  }
  #card-2 {
    background: url(/assets/card-2.png) no-repeat center center;
    -webkit-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
  }
  #card-3 {
    background: url(/assets/card-3.png) no-repeat center center;
    -webkit-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
  }
  #card-4 {
    background: url(/assets/card-4.png) no-repeat center center;
    -webkit-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
  }
  #card-5 {
    background: url(/assets/card-5.png) no-repeat center center;
    -webkit-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
  }
  #card-6 {
    background: url(/assets/card-6.png) no-repeat center center;
    -webkit-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
  }
  #card-7 {
    background: url(/assets/card-7.png) no-repeat center center;
    -webkit-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
  }
  #card-8 {
    background: url(/assets/card-8.png) no-repeat center center;
    -webkit-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
  }
  #card-9 {
    background: url(/assets/card-9.png) no-repeat center center;
    -webkit-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
  }
  #button-container {
    display: flex;
    justify-content: center;
  }

  @media screen and (min-width: 768px) {
    ul {
      grid-template-columns: 1fr 1fr;
      li {
        width: 300px;
        height: 400px;
      }
    }
    #greeting {
      font-size: 1.5rem;
      margin-top: 5rem;
      margin-left: 5rem;
      h2 {
        font-size: 1.75rem;
      }
      .profession1 {
        margin-left: 3rem;
      }
      .profession2 {
        margin-left: 5rem;
      }
      .profession3 {
        margin-left: 7rem;
      }
      #button-container {
        display: block;
      }
    }
  }

  @media screen and (min-width: 1380px) {
    ul {
      grid-template-columns: 1fr 1fr 1fr;
    }
  }

  @media screen and (min-width: 1800px) {
    ul {
      grid-template-columns: 1fr 1fr 1fr 1fr;
    }
  }
</style>
