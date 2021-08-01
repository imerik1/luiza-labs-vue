<template>
  <div className="options__icon">
    <router-link :to="link">
      <img height="15" :src="require(`@/assets/img/${src}`)" :alt="alt" />
      <span>{{ description }}</span>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "OptionList",
  props: ["link", "description", "src", "alt"],
};
</script>

<style lang="sass" scoped>
.options__icon
  display: flex
  flex-flow: row nowrap
  justify-content: center
  align-items: center
  height: fit-content
  a
    display: flex
    flex-flow: row wrap
    justify-content: center
    align-items: center
    text-align: center
    img
      margin-right: 5px
    span
      @media screen and (max-width: 446px)
        display: none
</style>
