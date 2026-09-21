import { loanContacts, type LoanType } from "./loanContacts";

const messages: Record<LoanType, string> = {
  general: "Hello, I am interested in discussing secured loan financing options.",
  titleDeed: "Hello, I am interested in a title deed secured loan. I would like to know more about the requirements and available financing options.",
  logbook: "Hello, I am interested in a logbook secured loan. I would like to know more about the requirements and available financing options.",
};

export function whatsappUrl(type: LoanType) {
  return `https://wa.me/${loanContacts[type]}?text=${encodeURIComponent(messages[type])}`;
}
