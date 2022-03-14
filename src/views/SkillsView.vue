<template>
  <div id="skills-container">
    <div id="left">
      <h1 class="blue-color">Skills</h1>
      <div id="left-grid">
        <p>JavaScript</p>
        <p>HTML / CSS</p>
        <p>Vue.js</p>
        <p>Vite</p>
        <p>Java</p>
        <p>React.js</p>
        <p>Node.js</p>
        <p>TypeScript</p>
        <p>MySQL</p>
      </div>
      <h1 class="blue-color">Tools</h1>
      <div id="left-grid">
        <p>Git</p>
        <p>Adobe Creative Cloud</p>
        <p>Visual Studio Code</p>
        <p>Figma</p>
        <p>Autodesk Maya</p>
        <p>Autodesk Inventor</p>
        <p>Scrum</p>
      </div>
      <h1 class="blue-color third">Workplace Experience</h1>
      <div id="skills-card">
        <div>
          <h2>Head of Graphic Design</h2>
          <h3>Frillesås Bandy</h3>
          <p class="bold">2018 - now</p>
          <p>
            Original content creator where I was responsible for graphic
            material for web and print, as well as original merchandise designs.
          </p>
        </div>
        <div>
          <h2>Team Leader</h2>
          <h3>AB Strängbetong</h3>
          <p class="bold">2015 -2021</p>
          <p>
            Production team leader, responsible for production planning, quality
            control, workplace improvements and personnel issues.
          </p>
        </div>
      </div>
    </div>
    <div id="middle" />
    <div id="right">
      <h1 class="blue-color">Education</h1>
      <div>
        <h2>Front End Development</h2>
        <p class="bold blue-color">IT-Högskolan, Göteborg</p>
        <p>august 2021 - now</p>
      </div>
      <div>
        <h2>3D Animation and Visualization</h2>
        <p class="bold blue-color">University West, Trollhättan</p>
        <p>august 2011 - june 2014</p>
      </div>
      <div>
        <h2>Technical Entrepreneur Programme</h2>
        <p class="bold blue-color">Peder Skrivares Skola, Varberg</p>
        <p>august 2007 - june 2010</p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  #skills-container {
    .third {
      margin-top: -1rem;
    }
    h1 {
      margin-top: 1rem;
      margin-bottom: 1rem;
    }
    .bold {
      font-weight: 700;
    }
    #skills-card {
      display: flex;
      flex-direction: column;
      align-items: center;
      div {
        max-width: 175px;
        min-height: 240px;
        padding: 1.5rem;
        border-radius: 1rem;
        background-color: #fff;
        color: #3f77c1;
        margin-bottom: 2rem;
        h2 {
          font-size: 1.6rem;
        }
        h3 {
          margin-top: 0.5rem;
        }
        p {
          margin-top: 0.5rem;
        }
      }
    }
    #left-grid {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      margin-bottom: 1rem;
      text-align: center;
      p {
        margin-bottom: 2rem;
        font-weight: 700;
      }
    }
    #left {
      h1 {
        text-align: center;
      }
    }
    #right {
      margin-bottom: 2rem;
      h2 {
        margin-bottom: 0.5rem;
      }
      div {
        margin-bottom: 4rem;
      }
    }
  }
  @media screen and (min-width: 768px) {
    #skills-container {
      display: flex;
      justify-content: space-around;
      margin-top: 3rem;
      #left {
        width: 50%;
        margin-right: 2rem;
        #skills-card {
          flex-direction: row;
          justify-content: space-around;
          align-items: stretch;
        }
      }
      #middle {
        width: 2px;
        background-color: rgba(255, 255, 255, 0.5);
        margin-bottom: 3rem;
      }
      #right {
        width: 50%;
        margin-left: 2rem;
      }
    }
  }
</style>
