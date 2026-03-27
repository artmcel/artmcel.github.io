import { SkillsComponent } from "../components/SkillsComponent";
import Introduce from "../templates/Introduce";
import PersonalDevs from "../templates/PersonalDevs";
import ProdDevs from "../templates/ProductionDevs/ProdDevs";

export default function Main() {
  return (
    <main className="relative pt-40 sm:pt-44 md:pt-40 overflow-x-hidden">
      <Introduce />
      
      <SkillsComponent />

      <ProdDevs />

      <PersonalDevs />
    </main>
  );
}
