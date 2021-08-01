<template>
  <nav className="breadcrumbs" aria-label="breadcrumbs">
    <ol>
      <li v-for="(page, index) in pages" :key="page">
        <span v-if="index !== 0">> </span>
        <router-link :to="page.href">{{ page.breadcrumb }}</router-link>
      </li>
    </ol>
  </nav>
</template>

<script>
export default {
  name: "Breadcrumb",
  props: ["pages"],
};
</script>

<style lang="sass" scoped>
.breadcrumbs
  ol
    display: flex
    flex-flow: row wrap
    gap: 0.2rem
    > li
      list-style-type: none
      > a, span
        font-size: 0.8rem
        font-weight: bold
        color: black
</style>
