import Header from './components/Header';
import HeroSection from './components/HeroSection';
import Statistics from './components/Statistics';
import CaseStudy from './components/CaseStudy';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import InterestingThesis from './components/InterestingThesis';
import OwnerNeeds from './components/OwnerNeeds';
import FinancialOffer from './components/FinancialOffer';
import WorkProcess from './components/WorkProcess';
import Agreements from './components/Agreements';
import ContentBlock from './components/ContentBlock';
import LeadMagnet from './components/LeadMagnet';

export default function Home() {
  return (
    <>
      <HeroSection />
      <Statistics />
      <CaseStudy />
      <FAQ />
    </>
  );
}