import { SkillsComponent } from "../components/SkillsComponent";
import Introduce from "../templates/Introduce";
import PersonalDevs from "../templates/PersonalDevs";
import ProdDevs from "../templates/ProductionDevs/ProdDevs";

export default function Main() {
  return (
    <main className="relative pt-48 sm:pt-55 md:pt-48">
      <Introduce />
      
      <SkillsComponent />

      <ProdDevs />

      <PersonalDevs />
    </main>
  );
}
