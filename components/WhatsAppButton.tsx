import { MessageCircle } from "lucide-react";
import { type LoanType } from "../lib/loanContacts";
import { whatsappUrl } from "../lib/whatsapp";

export function WhatsAppButton({ loanType = "general", label = "Get a Loan", className = "" }: { loanType?: LoanType; label?: string; className?: string }) {
  return <a className={`whatsapp-button ${className}`} href={whatsappUrl(loanType)} target="_blank" rel="noreferrer"><MessageCircle size={19} />{label}</a>;
}
