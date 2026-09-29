import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import KeyMetrics from './components/KeyMetrics';
import CaseStudies from './components/CaseStudies';
import CareerTrajectory from './components/CareerTrajectory';
import OratoryAdvocacy from './components/OratoryAdvocacy';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import Toast from './components/Toast';
import ResumeModal from './components/ResumeModal';
import CaseFileModal from './components/CaseFileModal';

function App() {
  const [toastVisible, setToastVisible] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);
  const [isCaseFileModalOpen, setIsCaseFileModalOpen] = useState(false);
  const [selectedCaseTitle, setSelectedCaseTitle] = useState('');

  const triggerToast = (msg) => {
    setToastMessage(msg);
    setToastVisible(true);
    setTimeout(() => {
      setToastVisible(false);
    }, 3500);
  };

  const handleOpenCaseFile = (title) => {
    setSelectedCaseTitle(title);
    setIsCaseFileModalOpen(true);
  };

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white text-[#141B2B] relative selection:bg-[#FF5E13] selection:text-white">
      {/* Sticky Navigation */}
      <Navbar
        onContactClick={() => scrollTo('contact')}
        onResumeClick={() => setIsResumeModalOpen(true)}
      />

      {/* Main Content Sections */}
      <main>
        {/* Hero Section */}
        <Hero
          onExploreClick={() => scrollTo('cases')}
          onResumeClick={() => setIsResumeModalOpen(true)}
        />

        {/* Bento Key Metrics Bar */}
        <KeyMetrics />

        {/* Featured Case Studies */}
        <CaseStudies onRequestCaseFile={handleOpenCaseFile} />

        {/* Career Trajectory & Practice */}
        <CareerTrajectory />

        {/* Oratory & Public Speaking */}
        <OratoryAdvocacy />

        {/* Contact & Professional Networks */}
        <ContactSection onEmailCopied={(email) => triggerToast(email)} />
      </main>

      {/* Editorial Luxury Footer */}
      <Footer onNavigate={scrollTo} />

      {/* Interactive Modals & Toasts */}
      <Toast
        message={toastMessage}
        visible={toastVisible}
        onClose={() => setToastVisible(false)}
      />

      <ResumeModal
        isOpen={isResumeModalOpen}
        onClose={() => setIsResumeModalOpen(false)}
      />

      <CaseFileModal
        isOpen={isCaseFileModalOpen}
        onClose={() => setIsCaseFileModalOpen(false)}
        caseTitle={selectedCaseTitle}
      />
    </div>
  );
}

export default App;
