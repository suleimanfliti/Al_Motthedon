<template>
  <h1 v-if="categories">{{ categories }}</h1>
</template>
<script setup>
const route = useRoute();
const categories = useState("categories", async () => {
  const { data } = await useFetch(
    `https://fakestoreapi.com/products/categories`
  );
  categories.value = data.value;
});
</script>
