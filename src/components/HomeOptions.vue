<template>
  <div className="options">
    <OptionsList
      link="/"
      src="map-marker.png"
      alt="Icone de
    localização"
      :description="'Cidade: ' + localization"
    />
    <OptionsList
      link="/"
      src="phone.png"
      alt="Icone de telefone"
      description="Central de atendimento"
    />
    <OptionsList
      link="/wish-list"
      src="heart.png"
      alt="Icone de coração"
      description="Lista de desejos"
    />
  </div>
</template>

<script>
import OptionsList from "./OptionList";
export default {
  name: "HomeOptions",
  props: ["localization"],
  components: {
    OptionsList,
  },
};
</script>

<style scoped lang="sass">
.header
  &__firstColumn
    .options
      display: flex
      align-items: center
      justify-content: space-between
      width: 100%
      max-width: 600px
      gap: 1rem
</style>
