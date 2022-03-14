<template>
  <div id="about-container">
    <h1 class="hide-2 blue-color">Hey there.</h1>
    <div id="right">
      <img
        srcset="/assets/tobias-275.png 275w, /assets/tobias-400.png 400w"
        sizes="(max-width: 767px) 275px, 400px"
        src="/assets/tobias-400.png"
        alt="Picture of Tobias"
      />
    </div>
    <div id="left">
      <h1 class="hide-1 blue-color">Hey there.</h1>
      <p>
        I'm <span class="blue-color larger-font">Tobias</span>, a Front End
        Developer and Graphic Designer based in
        <span class="blue-color">Kungsbacka, Sweden</span>. I'm especially
        passionate about the graphical aspect of web development, and about
        building easy-to-use applications that still solves the various complex
        challenges of today, manages to engage the end user, and looks good.
      </p>
      <p>
        I've been creating stuff on the web for the last 15, or so, years.
        Primarily for personal use, but also for family and friends. I
        <span class="blue-color">love being creative</span> and seeing visions
        come to life in new, exciting ways.
      </p>
      <p>
        The last few years, I've been working with a professional sports club
        from Sweden, called Frillesås Bandy. There, I've been
        <span class="blue-color">Head of Graphic Design</span>, responsible for
        the <span class="blue-color">design</span> and creation of marketing
        material for web and print,
        <span class="blue-color">original artwork</span> for merchandise as well
        as a number of other projects.
      </p>
      <p>
        On my free time, I encourage my creative side in my
        <span class="blue-color">woodworking shop</span>, where I create custom
        designed furniture and smaller pieces of kitchenware. I also like to
        maintain an active lifestyle, which I do by
        <span class="blue-color">playing bandy</span> (a winter sport, played on
        ice) as well as running and inline skating in the summer.
      </p>
      <div id="button-container">
        <a href="public/tobias.pdf" download>
          <input class="button" type="button" value="Download CV" />
        </a>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .hide-1 {
    display: none;
  }
  h1 {
    text-align: center;
    font-size: 3rem;
    margin-top: 1.5rem;
    margin-bottom: 2rem;
  }
  p {
    margin-bottom: 1rem;
  }
  img {
    border-radius: 50%;
  }
  #right {
    display: flex;
    justify-content: center;
    margin-bottom: 2rem;
  }
  #button-container {
    display: flex;
    justify-content: center;
  }
  #button {
    margin-top: 2rem;
  }

  @media screen and (min-width: 768px) {
    .hide-1 {
      display: block;
    }
    .hide-2 {
      display: none;
    }
    h1 {
      font-size: 5rem;
      margin-top: 3rem;
      margin-bottom: 4rem;
    }
    p {
      font-size: 1.2rem;
    }
    img {
      height: 400px;
    }
    #about-container {
      display: flex;
      flex-direction: row-reverse;
      #left {
        margin-right: 4rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
      }
      #right {
        margin-top: 9rem;
      }
    }
  }
</style>
