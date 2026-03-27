"use client";
import Image from "next/image";
import type { ReactNode } from "react";

function SocialIcon({
  children,
  label,
}: {
  children: ReactNode;
  label: string;
}) {
  return (
    <a
      href="#"
      aria-label={label}
      className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/20 text-white/90 transition hover:bg-white/10 hover:border-white/40"
    >
      {children}
    </a>
  );
}

export default function Footer() {
  return (
    <footer className="relative bg-[#14052E] text-[#E9E9E9] border-t border-white/5 py-10 lg:py-14">
      <div className="relative mx-auto max-w-7xl px-6 md:px-8 pt-10 md:pt-12 pb-28 md:pb-32">

       
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_1.2fr_1.2fr_auto] lg:items-start">
         
          <div className="flex items-start justify-between lg:block">
            <Image
              src="/images/footerlogo1.png"
              alt="Maxtron Academy"
              width={160}
              height={200}
              priority
              className="h-auto "
            />

          
            <div className="hidden lg:hidden">
              <SocialIcon label="Instagram">
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <rect x="3" y="3" width="18" height="18" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17" cy="7" r="1" fill="currentColor" stroke="none" />
                </svg>
              </SocialIcon>
              <SocialIcon label="LinkedIn">
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect x="2" y="9" width="4" height="12" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </SocialIcon>
              <SocialIcon label="YouTube">
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <rect x="2" y="6" width="20" height="12" rx="3" />
                  <path d="M10 9l5 3-5 3z" fill="currentColor" stroke="none" />
                </svg>
              </SocialIcon>
              <SocialIcon label="Facebook">
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </SocialIcon>
            </div>

           
            <div className="lg:hidden text-right mt-1">
              <p className="text-xs font-medium text-white/70 mb-1">Contact</p>
              <div className="text-xs text-white/50 space-y-1 flex flex-col items-end">
                <div>+61 408-937-444</div>
                <div>contact@maxtronacademy.com</div>
              </div>
            </div>
          </div>

  
          <div className="space-y-3">
            <p className="text-xs font-medium text-white/70">Discover</p>
            <ul className="space-y-2 text-xs text-white/50">
              <li className="hover:text-white transition">Courses</li>
              <li className="hover:text-white transition">Testimonials</li>
              <li className="hover:text-white transition">About Us</li>
            </ul>
          </div>

    
          <div className="space-y-3">
            <p className="text-xs font-medium text-white/70">Legals</p>
            <ul className="space-y-2 text-xs text-white/50">
              <li className="hover:text-white transition">Privacy Policy</li>
              <li className="hover:text-white transition">Cookie Policy</li>
              <li className="hover:text-white transition">Terms &amp; Conditions</li>
            </ul>
          </div>

   
          <div className="hidden lg:flex flex-col items-end justify-self-end mt-1">
            <p className="text-xs font-medium text-white/70 mb-2">Contact</p>
            <div className="text-xs text-white/50 space-y-1 flex flex-col items-end">
              <div>+1 408-037-4444</div>
              <div>contact@maxtronacademy.com</div>
            </div>
          </div>
        </div>

     {/* <div className="mt-14 md:mt-16 flex justify-center">
        <div className="flex items-center gap-3">
          <SocialIcon label="Instagram">
            <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <rect x="3" y="3" width="18" height="18" rx="5" />
              <circle cx="12" cy="12" r="4" />
              <circle cx="17" cy="7" r="1" fill="currentColor" stroke="none" />
            </svg>
          </SocialIcon>
          <SocialIcon label="LinkedIn">
            <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z"/>
              <rect x="2" y="9" width="4" height="12"/>
              <circle cx="4" cy="4" r="2"/>
            </svg>
          </SocialIcon>
          <SocialIcon label="YouTube">
            <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <rect x="2" y="6" width="20" height="12" rx="3"/>
              <path d="M10 9l5 3-5 3z" fill="currentColor" stroke="none"/>
            </svg>
          </SocialIcon>
          <SocialIcon label="Facebook">
            <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
            </svg>
          </SocialIcon>
        </div>
      </div> */}
       
   <div className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 w-full overflow-hidden">
  <div className="text-center text-[40px] sm:text-[60px] md:text-[80px] lg:text-[80px] xl:text-[96px] leading-none font-medium text-white/10 whitespace-nowrap">
    Maxtron Academy
  </div>
  
</div>

      </div>
      <div className="mt-16 w-full border-t-[1px] border-[#F1F1F133] flex justify-left pl-6">
  <p className="text-xs pt-4 text-white/40 text-center">
    © {new Date().getFullYear()} Maxtron Academy · All rights reserved
  </p>
</div>
    </footer>
  );
}