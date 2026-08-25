import { ContactTexts } from "@/types/texts";
import { FaEnvelope, FaWhatsapp } from "react-icons/fa";
import { EarthCanvas } from "../canvas/earth";
import { SectionHeading } from "./section-heading";

interface Props {
  texts: ContactTexts;
}

export const Contact = ({ texts }: Props) => {
  const isPortuguese = texts.title.toLowerCase().includes("contato");
  const email = "mariottopires@gmail.com";
  const whatsapp = "5517991518628";
  const whatsappMessage = encodeURIComponent("Ola vim pelo seu portifolio !!");

  return (
    <section
      id="contact-me"
      className="grid grid-cols-2 py-24 md:py-32 px-4 md:px-20 text-white h-dvh [&>*]:z-10 max-md:flex max-md:flex-col"
    >
      <div>
        <div className="flex ">
          <div className="flex flex-col items-center max-md:hidden">
            <div className="w-5 h-5 rounded-full bg-black-blue" />
            <div className="w-1 sm:h-64 h-20 violet-gradient" />
          </div>
          <div className="ml-4 w-full">
            <SectionHeading
              title={texts.title}
              eyebrow={isPortuguese ? "Vamos conversar" : "Let's talk"}
              align="left"
            />
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="flex min-h-48 flex-col justify-between rounded-xl border border-white/20 bg-dark-gray p-6">
                <FaEnvelope className="text-light-blue" size={32} />
                <div>
                  <h3 className="text-xl font-bold">{texts.emailTitle}</h3>
                  <p className="mt-2 text-sm text-gray">{texts.emailDescription}</p>
                  <span className="mt-4 block select-text text-sm text-light-blue">
                    {email}
                  </span>
                </div>
              </div>
              <a
                href={`https://wa.me/${whatsapp}?text=${whatsappMessage}`}
                target="_blank"
                rel="noreferrer"
                className="group flex min-h-48 flex-col justify-between rounded-xl border border-white/20 bg-dark-gray p-6 transition-colors hover:border-light-blue hover:bg-dark-gray-1"
              >
                <FaWhatsapp className="text-light-blue" size={34} />
                <div>
                  <h3 className="text-xl font-bold">{texts.whatsappTitle}</h3>
                  <p className="mt-2 text-sm text-gray">{texts.whatsappDescription}</p>
                  <span className="mt-4 block text-sm text-light-blue">
                    {whatsapp ? `+${whatsapp}` : "Configure seu WhatsApp"}
                  </span>
                </div>
                <span className="mt-4 text-sm text-white">{texts.whatsappAction} &rarr;</span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="max-md:hidden max-lg:w-80 max-lg:h-80">
        <EarthCanvas />
      </div>
    </section>
  );
};
