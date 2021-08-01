<template>
  <div className="header__secondColumn__searchBar">
    <img
      height="15"
      :src="require(`@/assets/img/search.png`)"
      alt="Lupa de pesquisa"
    />
    <input type="text" placeholder="Buscar.." />
  </div>
</template>

<script>
export default {
  name: "SearchBar",
};
</script>

<style lang="sass" scoped>
.header
  &__secondColumn
    &__searchBar
      position: relative
      width: 100%
      max-width: 600px
      img
        position: absolute
        left: 10px
        bottom: 32%
      input[type="text"]
        padding: 0.8rem 1rem 0.8rem 2.2rem
        width: 100%
</style>
