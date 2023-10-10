import Footer from "./components/Footer";
import Header from "./components/Header";
import Banner from "./components/Banner";
import Container from "./components/Container";
import Card from "./components/Card";
import Sections from "./components/Sections"

function App() {
  return (
    <>
    <Header/>
    <Banner imageName="banner-home"/>
   
    <Container> 
    <><h2>Ficção</h2></>
      <Sections sectionName="Ficção"> 
        <Card urlFilme="gcP9v18Oxk0" movieName="Interestellar 2014"/>
        <Card urlFilme="gcP9v18Oxk0" movieName="Interestellar 2014"/>
        <Card urlFilme="gcP9v18Oxk0" movieName="Interestellar 2014"/>
        <Card urlFilme="gcP9v18Oxk0" movieName="Interestellar 2014"/>
      </Sections>

      <><h2>Romance</h2></>
      <Sections sectionName="Ficção"> 
        <Card urlFilme="gcP9v18Oxk0" movieName="Interestellar 2014"/>
        <Card urlFilme="gcP9v18Oxk0" movieName="Interestellar 2014"/>
        <Card urlFilme="gcP9v18Oxk0" movieName="Interestellar 2014"/>
        <Card urlFilme="gcP9v18Oxk0" movieName="Interestellar 2014"/>
      </Sections>

      <><h2>Comédia</h2></>
      <Sections sectionName="Ficção"> 
        <Card urlFilme="gcP9v18Oxk0" movieName="Interestellar 2014"/>
        <Card urlFilme="gcP9v18Oxk0" movieName="Interestellar 2014"/>
        <Card urlFilme="gcP9v18Oxk0" movieName="Interestellar 2014"/>
        <Card urlFilme="gcP9v18Oxk0" movieName="Interestellar 2014"/>
      </Sections>
      
    </Container>
    <Footer />
    </>
  );
}

export default App;
