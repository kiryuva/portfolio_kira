<template>
  <div class="wrapper">
    <NavBar />
    <router-view></router-view>
  </div>
</template>

<script>
import NavBar from "./components/NavBar.vue";
export default {
  components: {
    NavBar,
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");
* {
  font-family: "Poppins", sans-serif;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  background: #081b29;
  color: #ededed;
}
a {
  text-decoration: none;
}
li {
  list-style: none;
}

::-webkit-scrollbar {
  width: 0;
}

.container {
  width: 100%;
  max-width: 1530px;
  padding: 0 15px;
  margin: 0 auto;
}
</style>
