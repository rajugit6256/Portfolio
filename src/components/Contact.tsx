"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Mail, Phone } from "lucide-react";
import {  socials, contact } from "@/lib/contactData";
import { SECTION_WRAP } from "@/lib/data";

import { LinkedInIcon, GitHubIcon } from "@/components/icons";

export function Contact() {
  return (
    <section id="contact" className={`${SECTION_WRAP} relative z-[1] py-20 md:py-28`}>
      <motion.div
        className="mx-auto max-w-[760px] text-center"
        initial={{ opacity: 0, y: 22 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <p className="text-[12px] font-bold tracking-[2px] text-accent">GET IN TOUCH</p>
        <h2 className="mt-4 text-[clamp(36px,5vw,56px)] font-bold leading-[1.1] tracking-[-2px]">
          Let&apos;s build something<br />
          <span className="gradient-text">worth shipping</span><span className="text-accent">.</span>
        </h2>
        <p className="mx-auto mt-5 max-w-[520px] text-[16px] leading-[1.9] text-muted">
          Open to full-stack and frontend opportunities. Have a project, a role, or just a question?
          My inbox is always open.
        </p>

        {/* Primary CTA */}
        <div className="mt-8 flex justify-center">
          <a
            href={`mailto:${contact.email}?subject=Let's%20work%20together`}
            className="inline-flex items-center justify-center gap-2.5 rounded-lg bg-gradient-to-r from-[#b9a3ff] to-[#7eddf2] px-6 py-3.5 text-[14px] font-bold text-[#100d1b] shadow-[0_8px_28px_rgba(150,124,239,0.16)] transition-transform hover:-translate-y-0.5"
          >
            Start a conversation <ArrowUpRight size={18} />
          </a>
        </div>

        {/* Email + phone */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-[14px] text-muted">
          <a
            href={`mailto:${contact.email}`}
            className="inline-flex items-center gap-2 transition-colors hover:text-accent"
          >
            <Mail size={16} /> {contact.email}
          </a>
          <a
            href={`tel:${contact.phone}`}
            className="inline-flex items-center gap-2 transition-colors hover:text-accent"
          >
            <Phone size={16} /> {contact.phoneDisplay}
          </a>
        </div>

       
      </motion.div>
    </section>
  );
}