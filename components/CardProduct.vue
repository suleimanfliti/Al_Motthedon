<template>
  <div class="container">
    <div class="card">
      <div class="card-body card-height">
        <img class="img-card" :src="product.image" alt="Image 2" />
      </div>
    </div>

    <div class="card-contentt">
      <p style="color: white">{{ product.title }}</p>
      <h5 style="color: goldenrod">Price :{{ product.price }} $</h5>
      <!-- <p>{{ product.description }}</p> -->
      <div class="d-flex gap-2">
        <NuxtLink :to="'/products/' + product.id">
          <button class="card-button mt-5">See More</button>
        </NuxtLink>
        <button @click="addToCart()" class="card-button mt-5">Add Cart</button>
      </div>
    </div>
  </div>
</template>
<script setup>
const props = defineProps(["product"]);
const cart = useCart();
const addToCart = () => {
  cart.value.push({ ...props.product, count: 1 });
};
</script>
