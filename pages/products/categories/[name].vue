<template>
  <div class="container pt-5">
    <ul v-if="products" class="row">
      <li class="col-4 mb-5" v-for="(product, i) in products" :key="product.id">
        <NuxtLink><CardProduct :product="product" /></NuxtLink>
      </li>
    </ul>

    <div v-if="pending">loading.....</div>
    <div v-if="error">error {{ error }}.....</div>
  </div>
</template>
//
<script setup>
const route = useRoute();

const {
  data: products,
  pending,
  error,
} = await useFetch(
  `https://fakestoreapi.com/products/category/${route.params.name}`,
  {
    watch: [route.params.name],
  }
);
</script>
