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
        <button @click="addToCart()" style="width: 300px;  padding: 8px 0px;"class="btn btn-outline-warning mt-5" >Add cart</button>

      </div>
    </div>

  </div>

<div v-if="isAdded" class="p-3 mb-2 bg-success text-white position-fixed bottom-0 end-0 p-2 m-2">Item Added To the Cart Successfully !</div>
</template>
<script setup>
const props = defineProps(["product"]);
const cart = useCart();
const isAdded = ref(false);
const addToCart = () => {
  cart.value.push({ ...props.product, count: 1 });
  isAdded.value = true;

setTimeout(() => {
  isAdded.value = false;
}, 2000);

};
</script>
