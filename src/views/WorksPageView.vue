<template>
  <section class="works_page">
    <h2 class="works_page-logo">Projects</h2>
    <div class="works_page-container">
      <div class="works_page-box">
        <img src="../assets/images/aboutme.png" alt="" />
        <div class="works_layer">
          <h4>About Me</h4>
          <p>Это мой первый проэкт.</p>
          <button>
            <a href="https://kiryuva.github.io/aboutMe/">Jump to WebSite</a>
          </button>
        </div>
      </div>
      <div class="works_page-box">
        <img src="../assets/images/grayson.png" alt="" />
        <div class="works_layer">
          <h4>Grayson</h4>
          <p>Это мой второй проэкт.</p>
          <button>
            <a href="https://kiryuva.github.io/grayson/">Jump to WebSite</a>
          </button>
        </div>
      </div>
      <div class="works_page-box">
        <img src="../assets/images/nike.png" alt="" />
        <div class="works_layer">
          <h4>Nike</h4>
          <p>Это мой третий проэкт.</p>
          <button>
            <a href="https://kiryuva.github.io/Nikee/">Jump to WebSite</a>
          </button>
        </div>
      </div>
      <div class="works_page-box">
        <img src="../assets/images/silverhouse.png" alt="" />
        <div class="works_layer">
          <h4>Silver House</h4>
          <p>Это мой четвертый проэкт.</p>
          <button>
            <a href="https://kiryuva.github.io/Silver-House/"
              >Jump to WebSite</a
            >
          </button>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
</script>
<style>
.works_page {
  margin-left: 60px;
  margin-right: 60px;
  margin-bottom: 50px;
}
@media (max-width:1100px) {
 .works_layer h4{
  font-size: 40px !important;
 }
 .works_layer p{
  font-size:1.2rem !important; ;
 }
}
@media (max-width:500px) {
 .works_layer h4{
  font-size: 27px !important;
 }
 .works_layer p{
  font-size:1.1rem !important; ;
 }
}
@media (max-width:450px) {
 .works_layer h4{
  font-size: 20px !important;
 }
 .works_layer p{
  font-size:1rem !important; ;
 }
}
@media (max-width:400px) {
 .works_layer h4{
  font-size: 15px !important;
 }
 .works_layer p{
  font-size:0.8rem !important; ;
 }

}
.works_page-content {
  background: #262b40;
}
.works_page-logo {
  font-size: 50px;
  margin-bottom: 64px;
  text-align: center;
  transition: 0.3s;
  cursor: pointer;
}
.works_page-logo:hover {
  color: #00abf0;
}
.works_page-container {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
  gap: 50px;
}
@media (max-width: 991.99px) {
  .works_page-container {
    grid-template-columns: 1fr;
  }
}
.works_page-container .works_page-box {
  position: relative;
  border-radius: 12px;
  box-shadow: 0 0 1rem var(#191f36);
  overflow: hidden;
  display: flex;
}
.works_page-box img {
  width: 100%;
  transition: 0.5s;
  opacity: 0.7;
}
.works_page-box:hover img {
  transform: scale(1.1);
}

.works_page-box .works_layer {
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(rgba(0, 0, 0, 0.1), #00101b);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  padding: 0 4rem;
  transform: translateY(100%);
  transition: 0.5s;
}
.works_page-box:hover .works_layer {
  transform: translateY(0);
}
.works_layer h4 {
  font-size: 45px;
}
.works_layer p {
  font-size: 1.6rem;
  margin: 0.3rem 0 1rem;
}

.works_layer button {
  padding: 7px;
  background: #07a7e7;
  border-radius: 8px;
}
.works_layer a {
  letter-spacing: 1px;
  color: aliceblue;
}
</style>