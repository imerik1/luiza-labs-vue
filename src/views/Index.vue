<template>
  <Breadcrumb :pages="[{ href: '/', breadcrumb: 'Home' }]" />
  <main v-if="!isLoading" className="list">
    <div v-for="product of products" :key="product.sku" className="list__item">
      <div
        :class="`list__item__favorite${
          favorites.indexOf(product.sku) !== -1 ? ' enabled' : ''
        }`"
        @click="clickFavorite($event, product.sku)"
      >
        <img
          :src="require(`@/assets/img/heart.png`)"
          width="10"
          height="10"
          alt="Coração de favorito do produto"
        />
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
  <main v-else>Carregando produtos...</main>
</template>

<script>
import Breadcrumb from "@/components/Breadcrumb";
export default {
  name: "Index",
  components: {
    Breadcrumb,
  },
  data() {
    return {
      products: [],
      favorites: [],
      isLoading: true,
    };
  },
  created() {
    fetch("https://run.mocky.io/v3/66063904-d43c-49ed-9329-d69ad44b885e").then(
      (response) => {
        response.json().then((data) => {
          if (response.status === 200) {
            this.products = { ...data.products };
          }
          this.isLoading = false;
        });
      }
    );
    if (JSON.parse(localStorage.getItem("favorites"))) {
      this.favorites = JSON.parse(localStorage.getItem("favorites"));
    }
  },
  methods: {
    clickFavorite(e, sku) {
      e.preventDefault();
      e.currentTarget.classList.toggle("enabled");
      if (e.currentTarget.classList[1]) {
        this.favorites.push(sku);
        localStorage.setItem("favorites", JSON.stringify(this.favorites));
      } else {
        this.favorites.splice(this.favorites.indexOf(sku), 1);
        localStorage.setItem("favorites", JSON.stringify(this.favorites));
      }
    },
  },
};
</script>
