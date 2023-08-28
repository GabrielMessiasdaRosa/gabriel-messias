import { Button } from "../next-ui-exports";

export interface ContactButtonCtaProps {}

export default function ContactButtonCta({}: ContactButtonCtaProps) {
  return (
    <a
      target="_blank"
      href="https://wa.me/5541998099108?text=Ola%20Gabriel.%20Vi%20seu%20site%20e%20gostaria%20de%20conversar%20com%20voce."
    >
      <Button
        size="lg"
        className="rounded-sm font-bold uppercase text-white hover-effect "
        color="primary"
      >
        Entrar em contato
      </Button>
    </a>
  );
}
