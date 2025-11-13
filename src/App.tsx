import './App.css'
import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/HeroSection/HeroSection";
import ProductsSection from "./components/Sections/ProductsSection";
import IngredientsSection from "./components/Sections/IngredientsSection";
import RoutineSection from "./components/Sections/RoutineSection";
import TestimonialsSection from "./components/Sections/TestimonialsSection";
import FAQSection from "./components/Sections/FAQSection";
import Footer from "./components/Footer/Footer";

function App() {

  return (
    <div className="min-h-screen font-opensans">
     <Navbar />
     <main>
        <Hero />
        <ProductsSection />
        <IngredientsSection />
        <RoutineSection />
        <TestimonialsSection />
        <FAQSection />
      </main>
      <Footer />
    </div>
  )
}

export default App
