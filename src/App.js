import './App.css';
import Footer from './Component/Footer';
import Header from './Component/Header';
import ImageSlider from './Component/ImageSlider';
import ProductDisplay from './Component/ProductDisplay';
import ProductionSection2 from './Component/ProductionSection2';
import ProductSection from './Component/ProductSection';
import ProductSection1 from './Component/ProductSection1';
import ProductSection3 from './Component/ProductSection3';

function App() {
  return (
    <div>
      <Header/>
      <ProductDisplay/>
      <ImageSlider/>
     <ProductSection/>
      <ProductSection1/>
      <ProductSection3/>
       <ProductionSection2/>
      <Footer/> 
    </div>
  );
}

export default App;
