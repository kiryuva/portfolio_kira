<template>
  <section class="contact_section">
    <div class="container">
      <h1 class="contact_section-title">Contacts</h1>
      <h2 class="contact_section-Location">Location</h2>
      <p class="Location-info">Uzbekistan,Tashkent.</p>
      <h2 class="contact_section-apps">Telegram/WhatsApp</h2>
      <p class="apps-info">+998(90)167-25-43</p>
      <h2 class="contact_section-Email">Email</h2>
        <p class="Email-info">sasasanikii@gmail.com</p>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style >
.contact_section {
  padding-top: 50px;

}
.contact_section-title {
  font-size: 70px;
  font-weight: 700;
  color: #081b29;
-webkit-text-stroke: 0.1vw #00abf0;
}
@media (max-width: 1200px) {
  .contact_section{
    margin-left: 100px;
  }
}
@media (max-width: 1499px) {
  .contact_section{
    margin-left: 100px;
  }
}
@media (max-width: 472px) {
  .contact_section{
    margin-left: 50px;
  }
}



.contact_section-Location,
.contact_section-Email {
  padding-top: 20px;
  font-size: 40px;
  font-weight: 700;
  color: #00abf0;

}
.Location-info,
.apps-info,
.Email-info {
  font-size: 30px;
}
.contact_section-apps {
  padding-top: 20px;
  font-size: 30px;
  font-weight: 700;
  color: #00abf0;

}
</style>