export const loanContacts = {
  // Replace these sample numbers with the representative's live WhatsApp numbers before launch.
  general: "254745378961",
  titleDeed: "254745378961",
  logbook: "254745378961"
  
} as const;

export type LoanType = keyof typeof loanContacts;
