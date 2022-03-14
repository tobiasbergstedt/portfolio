<template>
  <div class="contact-container">
    <div class="left">
      <h1>Contact me</h1>
      <p>
        I'm <span class="blue-color">interested</span> in hearing from
        <span class="blue-color">you</span>. Feel free to contact me if you feel
        like there's anything I could
        <span class="blue-color">help you with</span>.
      </p>
      <p>
        I enjoy <span class="blue-color">ambitious projects</span>, and am
        currently interested in
        <span class="blue-color">freelance work</span> as well as
        <span class="blue-color">employment</span>.
      </p>
      <div class="container">
        <form ref="form">
          <label>Name</label>
          <input
            type="text"
            v-model="name"
            name="name"
            placeholder="Your Name"
          />
          <label>Email</label>
          <input
            type="email"
            v-model="email"
            name="email"
            placeholder="Your Email"
            @blur="validateEmail"
          />
          <label>Message</label>
          <textarea
            name="message"
            v-model="message"
            cols="30"
            rows="5"
            placeholder="Message"
          />
          <p id="formValidation">
            All fields must be filled in <u>correctly</u> for button to be
            enabled.
          </p>
          <input
            type="button"
            ref="button"
            class="button"
            id="submitButton"
            @click="sendEmail"
            value="Send"
            :disabled="
              email.length < 6 ||
              !email.includes('@') ||
              message.length < 1 ||
              name.length < 1
            "
          />
          <p id="success">Thank you, message sent succesfully!</p>
        </form>
      </div>
    </div>
    <div id="map-container">
      <l-map
        v-model="zoom"
        v-model:zoom="zoom"
        :center="[57.281237, 12.203422]"
      >
        <l-tile-layer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <l-control-layers />
        <l-marker :lat-lng="[57.281237, 12.203422]" />
      </l-map>
    </div>
  </div>
</template>

<script>
  import {
    LMap,
    LTileLayer,
    LMarker,
    LControlLayers
  } from '@vue-leaflet/vue-leaflet'
  import 'leaflet/dist/leaflet.css'
  import emailjs from 'emailjs-com/es/index.js'

  export default {
    components: {
      LMap,
      LTileLayer,
      LMarker,
      LControlLayers
    },
    data() {
      return {
        name: '',
        email: '',
        message: [],
        zoom: 7
      }
    },
    methods: {
      sendEmail() {
        try {
          emailjs.sendForm(
            'service_pp0ri2n',
            'template_l32785i',
            this.$refs.form,
            'LPEV8pnDhk0Ld_e2G',
            {
              name: this.name,
              email: this.email,
              message: this.message
            }
          )
        } catch (error) {
          console.log({ error })
        }
        // Reset form field
        this.name = ''
        this.email = ''
        this.message = ''
        let showHidden = document.getElementById('success')
        showHidden.style.display = 'block'
      }
    }
  }
</script>

<style lang="scss" scoped>
  * {
    box-sizing: border-box;
  }

  .contact-container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .container {
    display: block;
    margin: 2rem auto auto auto;
    text-align: center;
    border-radius: 0.5rem;
    background-color: #f2f2f2;
    padding: 20px;
    width: 100%;
    p,
    label {
      color: #000;
    }
  }

  #error {
    color: red;
  }

  label {
    float: left;
  }

  input[type='text'],
  [type='email'],
  textarea {
    width: 100%;
    padding: 12px;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
    margin-top: 6px;
    margin-bottom: 16px;
    resize: none;
  }

  .button {
    margin-top: 1rem;
    margin-bottom: 1rem;
  }

  .button:disabled,
  .button[disabled] {
    background-color: #cccccc;
    color: #666666;
    cursor: default;
  }

  // input[type='button'] {
  //   background-color: #4caf50;
  //   color: white;
  //   padding: 12px 20px;
  //   border: none;
  //   border-radius: 4px;
  //   cursor: pointer;
  // }

  // input[type='button']:hover {
  //   background-color: #45a049;
  // }

  .left {
    margin-bottom: 2rem;
    h1 {
      margin-bottom: 0.5rem;
    }
    p {
      margin-bottom: 1rem;
      max-width: 90%;
    }
  }

  #map-container {
    height: 500px;
    width: 100%;
    border-radius: 0.5rem;
    overflow: hidden;
  }

  #formValidation {
    color: #262626;
  }

  #success {
    display: none;
  }

  @media screen and (min-width: 768px) {
    .contact-container {
      margin: 1rem;
    }
    .container {
      width: 50%;
    }
  }

  @media screen and (min-width: 1024px) {
    #map-container {
      width: 550px;
      height: 400px;
    }
  }

  @media screen and (min-width: 1300px) {
    .contact-container {
      flex-direction: row;
      .left {
        display: flex;
        flex-direction: column;
        align-items: center;
        .container {
          width: 70%;
        }
      }
    }
    #map-container {
      width: 600px;
      height: 660px;
    }
  }

  @media screen and (min-width: 1600px) {
    #map-container {
      width: 700px;
    }
  }

  @media screen and (min-width: 1800px) {
    #map-container {
      width: 900px;
    }
  }
</style>
