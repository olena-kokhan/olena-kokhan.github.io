<template>


  <div class="wrapper">
    <h1 class="youngserif-regular">Let's get in touch</h1>

    <p class="worksans-light">
      If you need a design or have a question, I would love to hear from you. Just send me a message in the form below.

    </p>

    <form ref="form"
      action="https://getform.io/f/189cc22e-b338-42bb-9184-6f9d1072eef5"
      method="POST"
    >
      <input required type="name" placeholder="Your Name" name="name" autocomplete="off"  />
      <input required type="email" placeholder="Email" name="email" autocomplete="off" />
      <textarea required type="text" placeholder="Message" name="message" autocomplete="off" ></textarea>
      <button type="submit">Send message</button>
    </form>

  </div>
</template>

<script>
import { ref } from "vue"


export default {
  name: "Contact",
  setup() {
      const form = ref(null)

      return {
        form
      }
  },
  mounted() {
      this.form.reset()
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.wrapper {
  text-align: center;
}

h1 {
  color: #404040;
  margin-block-end: 15px;
}

p {
  font-size: 16px;
  color: #404040;
  padding: 0 10%;
  margin-block-start: 0;
  margin-block-end: 25px;

}

form {
  display: flex;
  flex-direction: column;
  align-items: center;
}

input,
textarea {
  background-color: #efefef;
  border: none;
  margin-bottom: 20px;
  height: 50px;
  padding: 20px;
  width: 80%;
  max-width: 300px;
  border-radius: 2px;
  font-size: 14px;
}

textarea {
  height: 250px;
  resize: none;
}

button {
  font-family: "WorkSans Regular";
  background-color: #7d7b7b;
  border: none;
  height: 35px;
  color: #ffffff;
  border-radius: 2px;
  font-size: 14px;
}

input::-webkit-input-placeholder {
  font-family: "WorkSans Regular";
}

input:-ms-input-placeholder {
  font-family: "WorkSans Regular";
}

input:-moz-placeholder {
  font-family: "WorkSans Regular";
}

input::-moz-placeholder {
  font-family: "WorkSans Regular";
}
</style>
