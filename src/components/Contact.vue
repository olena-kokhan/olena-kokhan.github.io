<template>


  <div class="wrapper">
    <h1 class="youngserif-regular">Let's get in touch</h1>

    <p class="worksans-regular">
      If you need a design or have a question, I would love to hear from you.
      Just send me a message in the form below.
    </p>

    <form
      action="https://getform.io/f/189cc22e-b338-42bb-9184-6f9d1072eef5"
      method="POST"
    >
      <input type="name" placeholder="Your Name" name="name" />
      <input type="email" placeholder="Email" name="email" />
      <textarea type="text" placeholder="Message" name="message" autocomplete="off"></textarea>
      <button type="submit">Send message</button>
    </form>

    <iframe
      name="hiddenFrame"
      width="0"
      height="0"
      border="0"
      style="display: none"
    ></iframe>
  </div>
</template>

<script>
export default {
  name: "Contact",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.wrapper {
  text-align: center;
  padding: 10px;
}

p {
  font-size: 14px;
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
}

textarea {
  height: 250px;
}

button {
  font-family: "WorkSans Regular";
  background-color: #7d7b7b;
  border: none;
  height: 35px;
  color: #ffffff;
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
