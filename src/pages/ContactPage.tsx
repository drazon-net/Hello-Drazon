import React from 'react';
import { ContactSection } from '../components/ContactSection';

interface ContactPageProps {
  onOpenProposal: () => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onOpenProposal }) => {
  return (
    <div className="pt-12 pb-20">
      <ContactSection onOpenProposal={onOpenProposal} />
    </div>
  );
};

