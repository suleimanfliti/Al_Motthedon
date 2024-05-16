<template>
  <section class="h-100 gradient-custom">
    <div class="container py-5">
      <div class="row d-flex justify-content-center my-4">
        <div class="col-md-8">
          <div class="card mb-4">
            <div class="card-header py-3" style="background-color: goldenrod">
              <h5 class="mb-0">Cart</h5>
            </div>
            <div class="card-body">
              <!-- Single item -->
              <div v-for="item in cart" class="mt-4">
                <div v-if="item.count !== 0" class="row">
                  <div class="col-lg-3 col-md-12 mb-4 mb-lg-0">
                    <!-- Image -->
                    <div
                      class="bg-image hover-overlay hover-zoom ripple rounded"
                      data-mdb-ripple-color="light"
                    >
                      <img
                        :src="item.image"
                        class="w-100"
                        alt="Blue Jeans Jacket"
                      />
                      <a href="#!">
                        <div
                          class="mask"
                          style="background-color: rgba(251, 251, 251, 0.2)"
                        ></div>
                      </a>
                    </div>
                    <!-- Image -->
                  </div>

                  <div class="col-lg-5 col-md-6 mb-4 mb-lg-0">
                    <!-- Data -->
                    <p>
                      <strong>{{ item.title }}</strong>
                    </p>
                    <!-- <p>{{ item.description }}</p> -->
                    <p  class="mt-4">price: {{ item.price }} $</p>
                    <button
                      type="button"
                      data-mdb-button-init
                      data-mdb-ripple-init
                      class="btn btn-sm me-1 mb-2 back-color"
                      data-mdb-tooltip-init
                      title="Remove item"
                    >
                      Delete
                    </button>
              
                    <!-- Data -->
                  </div>

                  <div class="col-lg-4 col-md-6 mb-4 mb-lg-0 mt-5">
                    <!-- Quantity -->
                    <label class="form-label" for="form1">Quantity</label>


                    <div class="d-flex mb-4" style="max-width: 300px">
                  <button data-mdb-button-init data-mdb-ripple-init class="btn back-color px-3 me-2"
                    onclick="this.parentNode.querySelector('input[type=number]').stepDown()">
                    -
                  </button>

                  <div data-mdb-input-init class="form-outline">
                    <input id="form1" min="0" name="quantity" value="1" type="number" class="form-control" />
                  </div>

                  <button data-mdb-button-init data-mdb-ripple-init class="btn back-color px-3 ms-2"
                    onclick="this.parentNode.querySelector('input[type=number]').stepUp()">
                    +
                  </button>
                </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>
const cart = useCart();
console.log(cart.value);
const clgg = () => {
  console.log(cart.value);
};

</script>
