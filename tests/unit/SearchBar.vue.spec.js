import SearchBar from "@/components/SearchBar";
import { mount } from "@vue/test-utils";

describe("SearchBar - Componente onde se encontra a barra de pesquisa", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(SearchBar, {});
  });

  it("Deve renderizar", () => {
    expect(wrapper.exists()).toBe(true);
  });

  it("Deve renderizar um campo de pesquisa", () => {
    const barraPesquisa = wrapper.find("input[type='text']");
    expect(barraPesquisa.exists()).toBe(true);
  });
});
