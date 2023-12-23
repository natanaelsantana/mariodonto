import { Footer } from "../Components/Footer";
import { Header } from "../Components/header";
import { Contact } from "../Components/sections/Contact";
import { Treatments } from "../Components/sections/Treatments";
import { TreatmentsIcons } from "../Components/sections/treatmentsIcons";

export const Tratamentos = () => {
  return (
    <div className="flex flex-col items-center overflow-hidden min-h-screen w-screen">
      <Header />
      <TreatmentsIcons />
      <Treatments />
      <Contact />
      <Footer />
    </div>
  );
};
