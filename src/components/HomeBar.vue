<template>
  <section class="home ">
    <div class="home_content ">
      <h1>Hi, I'm Dedurenko Kira</h1>
      <h3>Web-programming</h3>
      <p>
        Привет, я Кира. Я ученица в ProWeb по курсу Web-Програмирование. Это моë
        портфолио написанное на vue.js В этом портфолио я хочу дать информацию о
        себе и показать мои зделанные работы.
      </p>
      <router-link to="/contact">
        <button class="home_button">
         My contact
        </button>
      </router-link>
      </div>
  
    <div class="bac_images">
      <img src="../assets/images/photo_bac.jpg" alt="" />
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
     
    };
  },
};
</script>

<style>
.logo {
  animation-name: poster;
  animation-duration: 3s;
  animation-iteration-count: infinite;
}
@keyframes poster {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(0.9);
  }
  100% {
    transform: scale(1);
  }
}

.bac_images{
  display: flex;
}
@media (max-width:992px) {
  .bac_images{
    width: 100%;
  }
  .home_content{
    align-items: center;
  }
  
}
.bac_images img {
  max-height: 760px;
  opacity: 0.4;
  border-radius: 50px;
  
}
.home {
  display: flex;
  align-items: center;
  padding: 0 10%;
  justify-content: space-between;
  gap: 40px;
}
@media (max-width:992px) {
  .home{
    flex-direction: column-reverse;
    margin-bottom: 30px;
  }
  .home_content h1{
    font-size: 50px!important;
  }
}
.home_content{
   display: flex;
   justify-content: center;
   flex-direction: column;
}



@media (max-width:1200px) {
  .bac_images img{
    max-height: 500px;
  }
}
@media (max-width:992px) {
  .bac_images img{
   width: 100%;
   object-fit: cover;
  }
}
.home_content h1 {
  font-size: 56px;
  font-weight: 700;
}

.home_content h3 {
  font-size: 32px;
  font-weight: 700;
  color: #00abf0;
  
}
.home_content p {
  font-size: 20px;
  margin: 20px 0 40px;
  max-width: 550px;
  text-align: justify;
}


.home_button {
  width: 170px;
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