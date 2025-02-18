import NavBar from "@/components/NavBar"
import Header from "@/components/Header"
import Companies from "@/components/Companies"
import Services from "@/components/Services"
import WhyChoose from "@/components/WhyChoose"
import Testimonials from "@/components/Testimonials"
import FAQs from "@/components/FAQs"
import CTA from "@/components/CTA"

const Page = () => {
  return (
    <>
      <NavBar />
      <Header />
      <Companies />
      <Services />
      <WhyChoose/>
      <Testimonials />
      <FAQs />
      <CTA />
    </>
  )
}

export default Page