<template>
  <Swiper />
  <SwiperProduct />
  <Jewelry />
  <Categories />
</template>
<script setup>
const cart = useCart();

console.log(cart.value);
</script>
