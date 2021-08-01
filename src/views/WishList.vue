<template>
  <Breadcrumb
    :pages="[
      { href: '/', breadcrumb: 'Home' },
      { href: '/wish-list', breadcrumb: 'Lista de Desejos' },
    ]"
  />
  <main v-if="products.length > 0 && !isLoading" className="list">
    <div
      v-for="(product, index) of products"
      :key="product.sku"
      className="list__item"
    >
      <div
        class="list__item__remove"
        @click="clickRemove($event, index, product.sku)"
      >
        X
      </div>
      <img
        :src="product.image"
        width="140"
        height="140"
        :alt="`Foto do produto ${product.title}`"
      />
      <h3 className="list__item__title">{{ product.title }}</h3>
      <p className="list__item__price">
        {{ `${product.currencyFormat} ${product.price.toFixed(2)}` }}
      </p>
    </div>
  </main>
  <main v-else-if="!isLoading">
    <p>Você não possui nenhum item na sua lista de desejos.</p>
  </main>
  <main v-else>Carregando produtos...</main>
</template>
<script>
import Breadcrumb from "@/components/Breadcrumb";
export default {
  name: "WishList",
  components: {
    Breadcrumb,
  },
  data() {
    return {
      products: [],
      isLoading: true,
    };
  },
  mounted() {
    fetch("https://run.mocky.io/v3/66063904-d43c-49ed-9329-d69ad44b885e").then(
      (response) => {
        response.json().then((data) => {
          console.log(response.status);
          if (response.status === 200) {
            if (localStorage.getItem("favorites")) {
              const favorites = localStorage?.getItem("favorites");
              const products = data.products;
              for (let product of products) {
                if (favorites.indexOf(product.sku) !== -1) {
                  this.products.push(product);
                }
              }
            }
            this.isLoading = false;
          }
        });
      }
    );
  },
  methods: {
    clickRemove(e, index, sku) {
      e.preventDefault();
      const favorites = JSON.parse(localStorage.getItem("favorites"));
      favorites.splice(favorites.indexOf(sku), 1);
      localStorage.setItem("favorites", JSON.stringify(favorites));
      this.products.splice(index, 1);
    },
  },
};
</script>
