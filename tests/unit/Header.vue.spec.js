import Header from "@/components/Header";
import { shallowMount } from "@vue/test-utils";

describe("Header - Header de todas as páginas", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallowMount(Header, {
      propsData: {
        title: "MegaNets",
      },
    });
  });

  it("Deve renderizar", () => {
    expect(wrapper.exists()).toBe(true);
  });

  it("Deve apresentar o nome do site", () => {
    const nomeDoSite = wrapper.find(".header__firstColumn > h1 > a");
    expect(nomeDoSite.text()).toBe("MegaNets");
  });
});
