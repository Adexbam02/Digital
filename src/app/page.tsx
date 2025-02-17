import NavBar from "@/components/NavBar"
import Header from "@/components/Header"
import Companies from "@/components/Companies"
import Services from "@/components/Services"
import WhyChoose from "@/components/WhyChoose"
import Testimonials from "@/components/Testimonials"

const Page = () => {
  return (
    <>
      <NavBar />
      <Header />
      <Companies />
      <Services />
      <WhyChoose/>
      <Testimonials />
    </>
  )
}

export default Page