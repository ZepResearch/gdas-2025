// components/conference-faq.jsx
import { FaqSectionWithCategories } from "./ui/faq-with-categories"

const CONFERENCE_FAQS = [
  {
    question: "When and where is the Global Defence and Aviation Skills Conference 2025 taking place?",
    answer:
      "The Global Defence and Aviation Skills Conference 2025 (GDAS 2025) will be held on December 8th - 9th, 2025, in Selangor / Kuala Lumpur, Malaysia. The venue provides world-class facilities and is conveniently accessible from major international airports, ensuring a seamless experience for all participants.",
    category: "Event Details",
  },

  {
    question: "What is the focus of GDAS 2025?",
    answer:
      "GDAS 2025 is an international platform dedicated to shaping the future of defence, aviation, and aerospace education. The conference emphasizes capacity-building, strategic collaboration, and skills development across military, academic, and industrial domains to meet the evolving demands of global security and aviation sectors.",
    category: "Conference Overview",
  },

  {
    question: "Who will attend the conference?",
    answer:
      "The conference will bring together government leaders, defence institutions, university chancellors, TVET councils, industry pioneers, and policy experts from across Europe and Asia. GDAS 2025 serves as a hub for professionals seeking to exchange ideas and forge partnerships that advance global defence and aviation excellence.",
    category: "Participants",
  },

  {
    question: "Will there be networking and collaboration opportunities?",
    answer:
      "Yes, GDAS 2025 includes exclusive networking sessions, coffee breaks, a welcome reception, and a gala dinner — all designed to encourage collaboration among delegates, policymakers, and industry innovators. These sessions provide a valuable platform to build long-term partnerships and share insights on global challenges.",
    category: "Networking",
  },

  {
    question: "Will the sessions and presentations be recorded?",
    answer:
      "Select keynote addresses, expert panels, and discussions will be recorded and made available to registered participants after the event. However, certain workshops and interactive sessions will remain unrecorded to promote open dialogue and active engagement.",
    category: "Content",
  },

  {
    question: "Are there opportunities for exhibitors and sponsors?",
    answer:
      "Absolutely. GDAS 2025 offers dedicated exhibition zones and sponsorship packages for defence and aviation organizations, educational institutions, and technology providers. Exhibitors will have the opportunity to showcase their innovations, products, and solutions to a diverse and influential international audience.",
    category: "Exhibition",
  },

  {
    question: "How can I participate as a speaker or panelist?",
    answer:
      "Individuals or organizations interested in speaking or presenting at GDAS 2025 can submit proposals through the official website. The program committee will review all submissions, focusing on relevance, originality, and contribution to the defence and aviation education sectors.",
    category: "Submissions",
  },
];


export function ConferenceFAQ() {

  return (
    <FaqSectionWithCategories
    title="Frequently Asked Questions"
    description="Find answers to common questions about the International Conference on AI & Robotics Innovation"
    items={CONFERENCE_FAQS}
    contactInfo={{
      title: "Still have questions?",
      description: "Our conference team is here to help you with any additional inquiries.",
      buttonText: "Contact Conference Team",
      onContact: "/contact",
    }}
  />
  )
}