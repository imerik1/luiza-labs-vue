import OptionList from "@/components/OptionList";
import { shallowMount } from "@vue/test-utils";

describe("OptionsList - Componente que renderiza um dos serviços", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallowMount(OptionList, {
      propsData: {
        link: "/",
        description: "Cidade: Praia Grande - SP",
        src: "map-marker.png",
        alt: "Icone de localização",
      },
    });
  });

  it("Deve renderizar", () => {
    expect(wrapper.exists()).toBe(true);
  });

  it("Deve renderizar a descrição da opção", () => {
    const opcao = wrapper.find(".options__icon span");
    expect(opcao.text()).toBe("Cidade: Praia Grande - SP");
  });
});
