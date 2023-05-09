import React from "react";

import Section from "../UI/Section";
import SectionHeading from "../UI/SectionHeading";
import ContactForm from "../Contact Form/ContactForm";

const ContactSection = (props) => {
  return (
    <Section
      className=" px-6 mt-16 md:mt-[100px] xl:mt-36  xl:justify-between"
      id="contact"
    >
      <SectionHeading>
        <span className="text-gold">Contact</span> us
      </SectionHeading>
      <ContactForm></ContactForm>
    </Section>
  );
};

export default ContactSection;
