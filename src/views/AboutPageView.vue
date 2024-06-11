<template>
  <div class="about_page">
    <div class="about_page-img">
      <img src="../assets/images/photo_bac.jpg" alt="" />
    </div>
    <div class="about_page-info">
      <h4 class="about_page-logo">Hi, I'm Dedurenko Kira</h4>
      <h2>Обо мне</h2>
      <p>
        Привет, я Кира. Я ученица в ProWeb по курсу Web-Програмирование. Мне 16
        лет. Моя дата рождения 11 июня. Я живу в Узбекистане. На данный момент
        учусь в ProWeb и учу Английский язык в International English School
        чтобы получить IELTS. Ну вроде все, не знаю что еще можно рассказать о
        себе.
      </p>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.about_page {
  text-align: center;
  display: flex;
  align-items: center;

}
@media (max-width: 1279.99px) {
  .about_page-img{
    max-height: 550px;
  }
  .about_page-logo{
    font-size: 35px;
  }
}
@media (max-width: 1397.99px) {
  
}
.about_page-info {
  margin: 0 auto;
}
.about_page-logo {
  font-size: 50px;
  color: #00abf0;
}
.about_page img {
  max-height: 760px;
  opacity: 0.4;
  border-radius: 50px;
  margin-left: 300px;
}
.about_page-info h2 {
  font-size: 30px;
}
.about_page-info p {
  max-width: 600px;
  color: #e9caca;
  font-size: 30px;
  
  
}
</style>