export const loanContacts = {
  // Replace these sample numbers with the representative's live WhatsApp numbers before launch.
  general: "254758820492",
  titleDeed: "254758820492",
  logbook: "254758820492"
  
} as const;

export type LoanType = keyof typeof loanContacts;
