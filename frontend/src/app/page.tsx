import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';
import WhyUsSection from '@/components/WhyUsSection';
import OrderForm from '@/components/OrderForm';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <WhyUsSection />
      <OrderForm />
      <Footer />
    </>
  );
}
