<template>
  <header class="header">
    <section class="header__firstColumn">
      <h1>
        <a href="/">{{ title }}</a>
      </h1>
      <HomeOptions :localization="localization" />
    </section>
    <section class="header__secondColumn">
      <SearchBar />
    </section>
  </header>
</template>

<script>
import HomeOptions from "./HomeOptions";
import SearchBar from "./SearchBar";
export default {
  name: "Header",
  props: ["title", "localization"],
  components: {
    HomeOptions,
    SearchBar,
  },
};
</script>

<style scoped lang="sass">
.header
  display: flex
  flex-flow: column wrap
  gap: 1rem
  color: white
  background-color: #5a2d82
  &__firstColumn
    display: flex
    flex-flow: row wrap
    justify-content: space-between
    align-items: center
    gap: 1rem
    width: 100%
  &__secondColumn
    display: flex
    flex-flow: row nowrap
    justify-content: flex-end
</style>
