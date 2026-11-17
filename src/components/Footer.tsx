import { ArrowUp, FileText, Mail } from "lucide-react";
import { SECTION_WRAP,resumeLink } from "@/lib/data";

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className={`${SECTION_WRAP} py-12 md:py-16`}>
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          
          {/* Column 1: Brand & Info */}
          <div>
            <a
              className="group flex items-center gap-2.5 text-[20px] font-bold tracking-[-0.8px] text-text"
              href="#home"
            >
              <span className="grid h-8 w-8 place-items-center rounded-[10px] border border-border bg-surface-2 text-[12px] text-accent">
                RK
              </span>
              <span>raju<span className="text-accent">.</span></span>
            </a>
            <p className="mt-4 max-w-[280px] text-[13px] leading-[1.8] text-muted">
              Software Developer building full-stack web applications. Focused on realtime experiences, reliable APIs, and clean interfaces.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="mb-4 text-[12px] font-bold uppercase tracking-[1.5px] text-text">Quick Links</h4>
            <ul className="flex flex-col gap-3 text-[13px] text-muted">
              <li><a href="#about" className="transition-colors hover:text-accent">About</a></li>
              <li><a href="#experience" className="transition-colors hover:text-accent">Experience</a></li>
              <li><a href="#projects" className="transition-colors hover:text-accent">Projects</a></li>
              <li><a href="#skills" className="transition-colors hover:text-accent">Skills</a></li>
              <li><a href="#contact" className="transition-colors hover:text-accent">Contact</a></li>
            </ul>
          </div>

          {/* Column 3: Connect & Resume */}
          <div>
            <h4 className="mb-4 text-[12px] font-bold uppercase tracking-[1.5px] text-text">Connect</h4>
            <ul className="flex flex-col gap-3 text-[13px] text-muted">
              <li>
                {/* FIXED: Removed the duplicate nested <a> tag */}
                <a href="https://github.com/Rajushk" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 transition-colors hover:text-accent">
                  <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                    <path d="M9 18c-4.51 2-5-2-7-2" />
                  </svg>
                  GitHub
                </a>
              </li>
              <li>
                {/* FIXED: Removed the duplicate nested <a> tag */}
                <a href="https://www.linkedin.com/in/raju-kumar-668216261/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 transition-colors hover:text-accent">
                  <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect width="4" height="12" x="2" y="9" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="mailto:rajukumarcrrit@gmail.com" className="inline-flex items-center gap-2 transition-colors hover:text-accent">
                  <Mail size={16} /> Email
                </a>
              </li>
              <li>
                <a href={resumeLink} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 transition-colors hover:text-accent">
                  <FileText size={16} /> Download Resume
                </a>
              </li>
            </ul>
          </div>
        </div>

        
      </div>
    </footer>
  );
}