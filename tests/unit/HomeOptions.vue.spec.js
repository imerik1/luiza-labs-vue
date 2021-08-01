import HomeOptions from "@/components/HomeOptions";
import { shallowMount } from "@vue/test-utils";

describe("HomeOptions - Flex contendo os serviços dos sites", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallowMount(HomeOptions, {
      propsData: {
        localization: "Praia Grande - SP",
      },
    });
  });

  it("Deve renderizar", () => {
    expect(wrapper.exists()).toBe(true);
  });

  it("Deve renderizar uma lista de opções", () => {
    const opcao = wrapper.find(".options__icon");
    expect(opcao.exists()).toBe(true);
  });
});
