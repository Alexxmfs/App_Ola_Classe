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
        title="Smart User Interface Marketplace"
        description="Experience a buttery UI of ProNef NFT Marketplace. Smooth constant colors of a fluent UI design."

        mockupImg={assets.homeCards}
        reverse
      />
      <Features />
      <SectionWrapper
        title="Deployment"
        description="ProNef is built using Expo which runs natively on all users devices. You can easily get your app into people's hands"
        mockupImg={assets.AlunoProf}
        reverse
/>
      <SectionWrapper
        title="Creative way to showcase the store"
        description="The app contains two screens. The first screen lists all NFTs while the second one shows the details of a specific  NFT."

        mockupImg={assets.video}
        banner="banner02"
      />
      <Download />
    </>
  );
}

export default App;