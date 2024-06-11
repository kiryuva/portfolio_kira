<template>
  <nav class="nav">
    <div class="nav__content container">
      <a href="" class="logo">Kira.</a>
      <ul class="nav_content-links" :class="{ active: showMenu }">
        <li v-for="(link, i) in links" :key="i">
          <router-link :to="link.to" class="nav_contant-link"
            >{{ link.name }}
          </router-link>
        </li>
      </ul>
      <button class="nav__menu-btn" @click="showNavMenu">MENU</button>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      links: [
        { name: "home", to: "/" },
        { name: "works", to: "/works" },
        { name: "about", to: "/about" },
        { name: "contacts", to: "/contact" },
      ],
      showMenu: false,
    };
  },
  methods: {
    showNavMenu() {
      this.showMenu = !this.showMenu;
    },
  },
};
</script>

<style>
.nav {
  padding: 25px 0;
}
.nav__content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  overflow: hidden;
}
.logo {
  font-size: 50px;
  color: #ededed;
  font-weight: 600;
  transition: 0.3s;
}

.logo:hover {
  color: #00abf0;
}
.nav_contant-link.router-link-active {
  color: #00abf0;
}

.nav_content-links {
  display: flex;
  gap: 30px;
  transition: 0.5s;
}
.nav_contant-link {
  font-size: 25px;
  color: #ededed;
  font-weight: 500;
  transition: 0.3s;
}
.nav_content-links.active {
  transform: scale(1);
}
.nav__menu-btn {
  display: none;
}
@media (max-width: 991.99px) {
  .nav_contant-link {
    font-size: 18px;
  }
  .logo {
    font-size: 36px;
    padding-left: 30px;
  }
}
@media (max-width: 1279.99px){
  .logo{
    padding-left: 40px;
  }
}
  


@media (max-width: 767.99px) {
  .nav {
    position: relative;
    background: #3333;
  }
  .nav_content-links {
    position: absolute;
    flex-direction: column;
    align-items: center;
    top: 100%;
    transform: scale(0);
    transform-origin: top;
    right: 0;
    padding: 12px;
    z-index: 100;
    background: #3333;
  }
  .nav__menu-btn {
    display: flex;
  }
}

.nav_contant-link:hover {
  color: #00abf0;
}


.nav__menu-btn{
  height: 130%;
  background: 2px solid #00abf0;
  color:#00abf0 ;
  padding: 8px 8px;
  border-radius: 8px;
  font-size: 19px;
  font-weight: 600;
  letter-spacing: 1px;
}
</style>