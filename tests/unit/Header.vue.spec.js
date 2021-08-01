import Header from "@/components/Header";
import { mount } from "@vue/test-utils";

describe("Header - Header de todas as páginas", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(Header, {
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
