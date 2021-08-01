<template>
  <div v-if="cep.localization.length === 0" :class="'choose'">
    <div :class="'choose__container'">
      <label for="cep">Digite seu CEP</label>
      <span v-if="cep.error.length > 0">{{ cep.error }}</span>
      <input
        :class="'choose__container__locate'"
        id="cep"
        type="text"
        placeholder="Digite seu CEP"
        maxlength="8"
        @input="updateCep"
      />
    </div>
  </div>
  <template v-else>
    <Header title="MegaNets" :localization="cep.localization" />
    <router-view></router-view>
  </template>
</template>

<script>
import Header from "./components/Header.vue";
export default {
  name: "App",
  components: {
    Header,
  },
  watch: {
    $route: {
      immediate: true,
      handler(to) {
        console.log(to);
        document.title = to.name || "MegaNets";
      },
    },
  },
  data() {
    return {
      cep: {
        localization: localStorage?.getItem("localization") || "",
        error: "",
      },
    };
  },
  methods: {
    updateCep(e) {
      e.target.value = e.target.value
        .replace(/[^0-9.]/g, "")
        .replace(/(\..*?)\..*/g, "$1");
      if (e.target.value.length === 8) {
        fetch(`https://viacep.com.br/ws/${e.target.value}/json`).then(
          (response) => {
            response.json().then((data) => {
              // se a API retornar um endereço
              if (data.logradouro) {
                this.cep.localization = `${data.localidade} - ${data.uf}`;
                this.cep.error = "";
                localStorage.setItem(
                  "localization",
                  `${data.localidade} - ${data.uf}`
                );
              } else {
                this.cep.error = "Digite um CEP válido";
              }
            });
          }
        );
      }
    },
  },
};
</script>

<style lang="sass">
*
  border: 0
  margin: 0
  padding: 0
  box-sizing: border-box
  font-family: 'Roboto', sans-serif
  outline: none
#app
  position: relative
  display: flex
  flex-flow: column nowrap
  justify-content: center
  align-content: center
  max-width: 100vw
  min-height: 100vh
a
  color: white
  text-decoration: none
header, main, .breadcrumbs
  max-width: 100vw
  padding: 2rem 6rem
  @media screen and (max-width: 426px)
    padding: 1rem 1rem
main
  flex: 1
.choose
  position: absolute
  display: flex
  flex-flow: column
  align-items: center
  left: 0
  top: 0
  height: 100%
  width: 100%
  max-width: 100vw
  z-index: 2
  background-color: #000000f5
  &__container
    display: flex
    flex-flow: column
    justify-content: center
    align-items: center
    gap: 2rem
    height: 100vh
    max-height: 100vh
    width: 100%
    label
      font-size: 2rem
      color: white
    span
      font-size: 1.2rem
      color: red
    &__locate
      width: 100%
      max-width: 300px
      padding: 0.8rem 1rem
.list
  display: grid
  justify-content: center
  align-items: center
  grid-template-columns: repeat(5, 170px)
  gap: 2rem
  @media screen and (max-width: 1341px)
    grid-template-columns: repeat(4, 170px)
  @media screen and (max-width: 1100px)
    grid-template-columns: repeat(3, 170px)
  @media screen and (max-width: 869px)
    grid-template-columns: repeat(2, 170px)
  @media screen and (max-width: 539px)
    grid-template-columns: repeat(1, 170px)
  &__item
    position: relative
    display: flex
    flex-flow: column nowrap
    justify-content: space-between
    align-items: center
    text-align: center
    width: 100%
    height: 100%
    max-width: 100%
    padding: 1rem 1rem 3rem
    gap: 1rem
    border: 1px solid black
    font-size: 1rem
    transition: box-shadow
    transition-duration: 0.5s
    cursor: pointer
    &:hover
      box-shadow: 0px 0px 28px -12px black
    &__price
      margin-top: 1rem
      color: #f2e077
    &__remove
      position: absolute
      display: flex
      justify-content: center
      align-items: center
      width: 25px
      height: 25px
      border-radius: 50%
      font-weight: bolder
      font-size: 0.6rem
      color: white
      background-color: black
      z-index: 1
      top: -10px
      right: -10px
      cursor: pointer
    &__favorite
      position: absolute
      display: flex
      justify-content: center
      align-items: center
      width: 25px
      height: 25px
      border-radius: 50%
      background-color: black
      z-index: 1
      top: -10px
      left: -10px
      cursor: pointer
      &.enabled
        filter: brightness(50%) sepia(100) saturate(100) hue-rotate(25deg)
</style>
