<template>
  <div>
    <div class="title-category">
          <p>Product Details</p>
        </div>
    <div v-if="product">
      <!-- Display the product details -->
      <!-- <h3>{{ product.title }}</h3>
      <p>{{ product.description }}</p> -->

      <section class="py-5">
        <div class="container">
          <div class="row gx-5">
            <aside class="col-lg-4">
              <div class="border rounded-4 mb-3 d-flex justify-content-center">
                <a
                  data-fslightbox="mygalley"
                  class="rounded-4"
                  target="_blank"
                  data-type="image"
                >
                  <img
                    style="width: 100%"
                    class="rounded-4 fit"
                    :src="product.image"
                  />
                </a>
              </div>

              <!-- thumbs-wrap.// -->
              <!-- gallery-wrap .end// -->
            </aside>
            <main class="col-lg-8">
              <div class="ps-lg-3">
                <h4 class="title text-color mb-5">
                  {{ product.title }}
                </h4>

                <div class="mb-5">
                  <span class="h5 text-white">price: {{ product.price }} $</span>
                  <!-- <span class="text-white">/per box</span> -->
                </div>

                <p class="text-white">
                  {{ product.description }}
                </p>

                <a @click="addToCart()" class="btn btn-primary shadow-0 back-color text-dark mt-5">
                  <i class="me-1 fa fa-shopping-basket"></i> Add to cart
                </a>
              </div>
            </main>
          </div>
        </div>
      </section>
    </div>
    <div v-else>
      <p>Loading...</p>
    </div>
  </div>
</template>

<script setup>
const route = useRoute();

const {
  data: product,
  pending,
  error,
} = await useFetch(`https://fakestoreapi.com/products/${route.params.id}`, {
  watch: [route.params.id],
});

const cart = useCart();
const addToCart = () => {
  cart.value.push({ ...product.value, count: 1 });
};
</script>
