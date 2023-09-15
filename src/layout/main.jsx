import ProdDevs from '../ProdDevs';
import PersonalDevs from '../PersonalDevs';
import Introduce from '../Introduce';
import Tech from '../Tech';

export default function Main() {
  return (
    <main className="container mx-auto px-4 py-4">
        {/*default tailwind responsive xs: sm: md: lg: xl: 2xl:*/}
        <section className="flex flex-col ">

            <Introduce/>

            <Tech/>

            <ProdDevs/>

            <PersonalDevs/>

        </section>
    </main>
  )
}
