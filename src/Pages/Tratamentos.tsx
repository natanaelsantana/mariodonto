import { Footer } from "../Components/Footer";
import { Header } from "../Components/header";
import { Contact } from "../Components/sections/Contact";
import { Treatments } from "../Components/sections/Treatments";
import { TreatmentsIcons } from "../Components/sections/treatmentsIcons";

export const Tratamentos = () => {
  return (
    <div>
      <Header />
      <TreatmentsIcons />
      <Treatments />
      <section className="pb-20">
        <Contact />
      </section>
      <Footer />
    </div>
  );
};
