<template>
  <section>
    <!-- Slider main container -->
    <div
      id="carouselExampleDark"
      class="container-fluid container-lg carousel carousel-dark slide"
      data-bs-ride="carousel"
    >
      <div class="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide-to="0"
          class="btn-swiper active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide-to="1"
          aria-label="Slide 2"
          class="btn-swiper"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide-to="2"
          aria-label="Slide 3"
          class="btn-swiper"
        ></button>
      </div>
      <div class="carousel-inner">
        <div class="carousel-item active" data-bs-interval="10000">
          <img src="/Images/Header-1.jpg" alt="Image 2" class="w-100" />
        </div>
        <div class="carousel-item" data-bs-interval="2000">
          <img src="/Images/Header-2.jpg" alt="Image 2" class="w-100" />
        </div>
        <div class="carousel-item">
          <img src="/Images/Header-3.jpg" alt="Image 2" class="w-100" />
        </div>
      </div>
    </div>
  </section>
</template>
<style>
.btn-swiper {
  background-color: #fcd34d !important;
}
.carousel-indicators {
}
</style>
