import ChiropraticTreatment from "./components/ChiropraticTreatment";
import MassageTherapy from "./components/MassageTherapy";
import AlternateTherapy from "./components/AlternativeTherapy";
import { Routes, Route } from "react-router-dom";
import Homepage from "./components/Homepage";
import GalleryMain from "./components/GalleryMain";
import Aboutus from "./components/Aboutus";
import Getintouch from "./components/Getintouch";
import Map from "./components/Map";
import ThaiMassage from "./sub-components/Massage-Therapy/ThaiMassage";
import DeepTissueMassage from "./sub-components/Massage-Therapy/DeepTissueMassage"
import PanchakarmaMassage from "./sub-components/Massage-Therapy/PanchakarmaMassage"
import ReflexologyMassage from "./sub-components/Massage-Therapy/ReflexologyMassage"
import AbhyangaMassage from "./sub-components/Massage-Therapy/AbhyangaMassage"
import MeridianMassage from "./sub-components/Massage-Therapy/MeridianMassage"
import CuppingMassage from "./sub-components/Massage-Therapy/CuppingMassage"
import KeralaMassage from "./sub-components/Massage-Therapy/KeralaMassage"
import HotCupping from "./sub-components/Alternative-Therapy/HotCupping";
import VacuumCupping from "./sub-components/Alternative-Therapy/VacuumCupping";
import BloodCupping from "./sub-components/Alternative-Therapy/BloodCupping";
import Acupressure from "./sub-components/Alternative-Therapy/Acupressure";
import Acupuncture from "./sub-components/Alternative-Therapy/Acupuncture";
import LeechTherapy from "./sub-components/Alternative-Therapy/LeechTherapy";
import AyurvedicNeuroTherapy from "./sub-components/Alternative-Therapy/AyurvedicNeuroTherapy";
import AnklePain from "./sub-components/Chiropractic-Treatment/AnklePain";
import AnkylosingSpondylitis from "./sub-components/Chiropractic-Treatment/AnkylosingSpondylitis";
import Arthritis from "./sub-components/Chiropractic-Treatment/Arthritis";
import BackPain from "./sub-components/Chiropractic-Treatment/BackPain";
import Sacralization from "./sub-components/Chiropractic-Treatment/Sacralization";
import Sciatica from "./sub-components/Chiropractic-Treatment/Sciatica";
import Scoliosis from "./sub-components/Chiropractic-Treatment/Scoliosis";
import DiscBulging from "./sub-components/Chiropractic-Treatment/BulgingDisc";
import FrozenShoulder from "./sub-components/Chiropractic-Treatment/FrozenShoulder";
import Headache from "./sub-components/Chiropractic-Treatment/Headache";
import HeelPain from "./sub-components/Chiropractic-Treatment/HeelPain";
import HerniatedDisc from "./sub-components/Chiropractic-Treatment/HerniatedDisc";
import KneePain from "./sub-components/Chiropractic-Treatment/KneePain";
import Lordosis from "./sub-components/Chiropractic-Treatment/Lordosis";
import LumbarSpondylosis from "./sub-components/Chiropractic-Treatment/LumbarSpondylosis";
import Migraine from "./sub-components/Chiropractic-Treatment/Migraine";
import MusclePain from "./sub-components/Chiropractic-Treatment/MusclePain";
import NeckPain from "./sub-components/Chiropractic-Treatment/NeckPain";
import NervePain from "./sub-components/Chiropractic-Treatment/NervePain";
import Osteopathy from "./sub-components/Chiropractic-Treatment/Osteopathy";
import FingerPain from "./sub-components/Chiropractic-Treatment/FingerPain";
import Vertigo from "./sub-components/Chiropractic-Treatment/Vertigo";
import TennisElbow from "./sub-components/Chiropractic-Treatment/TennisElbow";
import CervicalSpondylosis from "./sub-components/Chiropractic-Treatment/CervicalSpondylosis";
import SlippedDisc from "./sub-components/Chiropractic-Treatment/SlippedDisc";
import Services from "./components/Services";
import Layout from "./components/Layout/Layout";


function App() {
  return (
    <>
     <Layout>
      <Routes>
      <Route path="/" element={ <Homepage />} />
      <Route path="/aboutus" element={ <Aboutus />} />
      <Route path="/gallery" element={ <GalleryMain />} />
      <Route path="/contactus" element={ <Getintouch />} />
      <Route path="/services" element={ <Services />} />
      <Route path="/map" element={ <Map />} />
      <Route path="/services/chiropractic-treatment" element={ <ChiropraticTreatment /> } />
      <Route path="/services/massage-therapy" element={ <MassageTherapy />} />
      <Route path="/services/alternative-therapy" element={ <AlternateTherapy />} />

      {/* Chiropractic Treatment sub-components */}
        <Route path="/services/chiropractic-treatment/ankle-pain" element={<AnklePain />} />
        <Route path="/services/chiropractic-treatment/ankylosing-spondylitis" element={<AnkylosingSpondylitis />} />
        <Route path="/services/chiropractic-treatment/arthritis" element={<Arthritis />} />
        <Route path="/services/chiropractic-treatment/back-pain" element={<BackPain />} />
        <Route path="/services/chiropractic-treatment/sacralization" element={<Sacralization />} />
        <Route path="/services/chiropractic-treatment/sciatica" element={<Sciatica />} />
        <Route path="/services/chiropractic-treatment/scoliosis" element={<Scoliosis />} />
        <Route path="/services/chiropractic-treatment/disc-bulging" element={<DiscBulging />} />
        <Route path="/services/chiropractic-treatment/frozen-shoulder" element={<FrozenShoulder />} />
        <Route path="/services/chiropractic-treatment/headache" element={<Headache />} />
        <Route path="/services/chiropractic-treatment/heel-pain" element={<HeelPain />} />
        <Route path="/services/chiropractic-treatment/herniated-disc" element={<HerniatedDisc />} />
        <Route path="/services/chiropractic-treatment/knee-pain" element={<KneePain />} />
        <Route path="/services/chiropractic-treatment/lordosis" element={<Lordosis />} />
        <Route path="/services/chiropractic-treatment/lumbar-spondylosis" element={<LumbarSpondylosis />} />
        <Route path="/services/chiropractic-treatment/migraine" element={<Migraine />} />
        <Route path="/services/chiropractic-treatment/muscle-pain" element={<MusclePain />} />
        <Route path="/services/chiropractic-treatment/neck-pain" element={<NeckPain />} />
        <Route path="/services/chiropractic-treatment/nerve-pain" element={<NervePain />} />
        <Route path="/services/chiropractic-treatment/osteopathy" element={<Osteopathy />} />
        <Route path="/services/chiropractic-treatment/finger-pain" element={<FingerPain />} />
        <Route path="/services/chiropractic-treatment/vertigo" element={<Vertigo />} />
        <Route path="/services/chiropractic-treatment/tennis-elbow" element={<TennisElbow />} />
        <Route path="/services/chiropractic-treatment/cervical-spondylosis" element={<CervicalSpondylosis />} />
        <Route path="/services/chiropractic-treatment/slipped-disc" element={<SlippedDisc />} />


      {/* Massage therapy sub-components */}
      <Route path="/services/massage-therapy/thai-massage" element={ <ThaiMassage />} />
      <Route path="/services/massage-therapy/deep-tissue-massage" element={ <DeepTissueMassage />} />
      <Route path="/services/massage-therapy/panchakarma-massage" element={ <PanchakarmaMassage />} />
      <Route path="/services/massage-therapy/reflexology-massage" element={ <ReflexologyMassage />} />
      <Route path="/services/massage-therapy/abhyanga-massage" element={ <AbhyangaMassage />} />
      <Route path="/services/massage-therapy/meridian-massage" element={ <MeridianMassage />} />
      <Route path="/services/massage-therapy/cupping-massage" element={ <CuppingMassage />} />
      <Route path="/services/massage-therapy/kerala-massage" element={ <KeralaMassage />} />

      {/* Alternative therapy sub-components */}
        <Route path="/services/alternative-therapy/hot-cupping" element={<HotCupping />} />
        <Route path="/services/alternative-therapy/vacuum-cupping" element={<VacuumCupping />} />
        <Route path="/services/alternative-therapy/blood-cupping" element={<BloodCupping />} />
        <Route path="/services/alternative-therapy/acupressure" element={<Acupressure />} />
        <Route path="/services/alternative-therapy/acupuncture" element={<Acupuncture />} />
        <Route path="/services/alternative-therapy/leech-therapy" element={<LeechTherapy />} />
        <Route path="/services/alternative-therapy/ayurvedic-neuro-therapy" element={<AyurvedicNeuroTherapy />} />
     </Routes> 
    </Layout>
    </>
  );
}

export default App;