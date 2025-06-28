import { SkillsComponent } from '../components/SkillsComponent';
import Introduce from '../templates/Introduce';
import PersonalDevs from '../templates/PersonalDevs';
import ProdDevs from '../templates/ProductionDevs/ProdDevs';

export default function Main() {
  return (
    <main className="container mx-auto px-4 py-4">
        {/*default tailwind responsive xs: sm: md: lg: xl: 2xl:*/}
        <section className="flex flex-col ">

            <Introduce/>

            <SkillsComponent/>

            <ProdDevs/>

            <PersonalDevs/>

        </section>
    </main>
  )
}
