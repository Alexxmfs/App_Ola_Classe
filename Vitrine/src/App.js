import { Download, Features, SectionWrapper } from "./components";
import assets from "./assets";

const App = () => {
  return(
    <>
      <SectionWrapper
        title="Vamos desenvolver novas habilidades e conhecimentos"
        description="Quer aprender uma nova linguagem de programação? Entende de lógica e gostaria de compartilhar este conhecimento com mais pessoas? Junte-se a maior e única rede social de aprendizado para dar também o seu 'Olá, classe!'"

        showBtn
        mockupImg={assets.HomePage}
        banner="banner"
      />
      <SectionWrapper
        title="Interface fácil e intuitiva para os usuários"
        description="Toda a experiência de rede social enquanto aprende algo novo."

        mockupImg={assets.homeCards}
        reverse
      />
      <Features />
      <SectionWrapper
        title="Ensinar & Aprender"
        description="Ao criar a conta é possível escolher entre ensinar ou buscar por conhecimento em diversos assuntos."
        mockupImg={assets.AlunoProf}
        reverse
/>
      <SectionWrapper
        title="Conteúdo direcionado"
        description="É possíve salvar, curtir e interagir nas postagens e o conteúdo da sua página será de acordo com seus interesses."

        mockupImg={assets.video}
        banner="banner02"
      />
      <Download />
    </>
  );
}

export default App;