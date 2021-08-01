import Breadcrumb from "@/components/breadcrumb";
import { shallowMount } from "@vue/test-utils";

describe("Breadcrumb - Navegação sobre páginas", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallowMount(Breadcrumb, {
      propsData: {
        pages: [
          { href: "/", breadcrumb: "Home" },
          { href: "/wish-list", breadcrumb: "Lista de Desejos" },
        ],
      },
    });
  });

  it("Deve renderizar", () => {
    expect(wrapper.exists()).toBe(true);
  });

  it("Deve renderizar as URLs", () => {
    expect(wrapper.text()).toBe("Home> Lista de Desejos");
  });

  it("Deve renderizar uma lista", () => {
    expect(wrapper.exists("li")).toBe(true);
  });
});
