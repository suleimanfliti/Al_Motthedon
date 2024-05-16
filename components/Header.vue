<script setup>
const sochialList = [
  { href: "https://facebook.com", icon: "/Icons/facebook_Gold.png" },
  { href: "https://twitter.com", icon: "/Icons/Twitter - Gold.png" },
  { href: "https://instagram.com", icon: "/Icons/instagram_Gold.png" },
  { href: "https://youtube.com", icon: "/Icons/Youtube - Gold.png" },
];

const navLink = [
  { href: "/", name: "Home" },
  { href: "/cart", name: "Cart" },
  { href: "/products/categories/electronics", name: "Electronics" },
  { href: "/products/categories/jewelery", name: "Jewelery" },
  { href: "/products/categories/men's clothing", name: "Men Clothing" },
  { href: "/products/categories/women's clothing", name: "Women Clothing" },
  { href: "/media-center", name: "Media Center" },
  { href: "/contact-us", name: "Contact Us" },
];
</script>

<template>
  <nav class="navbar navbar-expand-lg bg-black py-1">
    <div class="container-fluid container-lg">
      <NuxtLink to="/">
        <img
          src="/logo.png"
          alt=""
          width="200"
          height="150"
          class="brand-image"
        />
      </NuxtLink>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div
        class="collapse navbar-collapse d-lg-flex flex-column align-items-end justify-content-end gap-5"
        id="navbarSupportedContent"
      >
        <div class="d-flex gap-5 align-items-center">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="30"
              height="30"
              viewBox="0,0,300,150"
            >
              <g
                fill="#ffffff"
                fill-rule="nonzero"
                stroke="none"
                stroke-width="1"
                stroke-linecap="butt"
                stroke-linejoin="miter"
                stroke-miterlimit="10"
                stroke-dasharray=""
                stroke-dashoffset="0"
                font-family="none"
                font-weight="none"
                font-size="none"
                text-anchor="none"
                style="mix-blend-mode: normal"
              >
                <g transform="scale(5.12,5.12)">
                  <path
                    d="M21,3c-9.37891,0 -17,7.62109 -17,17c0,9.37891 7.62109,17 17,17c3.71094,0 7.14063,-1.19531 9.9375,-3.21875l13.15625,13.125l2.8125,-2.8125l-13,-13.03125c2.55469,-2.97656 4.09375,-6.83984 4.09375,-11.0625c0,-9.37891 -7.62109,-17 -17,-17zM21,5c8.29688,0 15,6.70313 15,15c0,8.29688 -6.70312,15 -15,15c-8.29687,0 -15,-6.70312 -15,-15c0,-8.29687 6.70313,-15 15,-15z"
                  ></path>
                </g>
              </g>
            </svg>
          </div>
          <ul class="d-flex align-items-center justify-content-end m-0">
            <li
              class="list-inline-item"
              v-for="(item, i) in sochialList"
              :key="i"
            >
              <NuxtLink :to="item.href">
                <img :src="item.icon" class="nav-icon" alt="Instagram" />
              </NuxtLink>
            </li>
          </ul>
        </div>
        <ul class="navbar-nav d-flex gap-2 mb-2 mb-lg-0 mt-2">
          <li v-for="(item, i) in navLink" :key="i" class="nav-item">
            <NuxtLink :href="item.href" class="text-white nav-link active">
              {{ item.name }}
            </NuxtLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <div class="golden-row"></div>
</template>
<style>
.nav-item {
  margin-right: 0px;
}
.nav-link {
  font-size: 1rem;
}
.nav-link:hover {
  color: #fcd34d !important;
}
.icon-search {
  color: white !important;
}
.golden-row {
  background-color: #fcd34d;
  height: 15px;
}
</style>
