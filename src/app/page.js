import Categories from '@/components/Categories/Page'
import Credits from '@/components/Credits/Page'
import Hero from '@/components/Hero/Page'
import Instructor from '@/components/Instructors/Page'
import Join from '@/components/Join/Page'
import Pikes from '@/components/Piks/Page'
import Testimonial from '@/components/Testimonial/Page'


export default function Home() {
  return (
    <main >
      <Hero/>
      <Pikes/>
      <Categories />
      <Credits/>
      <Instructor/>
      <Join/>
      <Testimonial/>
    </main>
  )
}
