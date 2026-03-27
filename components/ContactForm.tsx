"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

/* ─── animation variants ─── */
const overlay = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.3 } },
  exit: { opacity: 0, transition: { duration: 0.2 } },
};

const modal = {
  hidden: { scale: 0.92, y: 50, opacity: 0 },
  visible: {
    scale: 1,
    y: 0,
    opacity: 1,
    transition: { type: "spring", damping: 28, stiffness: 300 },
  },
  exit: { scale: 0.92, y: 50, opacity: 0, transition: { duration: 0.2 } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.04 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.35 } },
};

/* ─── icons (inline SVG) ─── */
const UserIcon = () => (
  <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
  </svg>
);
const BriefcaseIcon = () => (
  <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0" />
  </svg>
);
const RocketIcon = () => (
  <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.82m5.84-2.56a14.09 14.09 0 006.16-12.12A14.06 14.06 0 0015.59 14.37m0 0l-5.84 7.38m0 0a6 6 0 01-7.38-5.84m7.38 5.84l-2.56-5.84m0 0a6 6 0 015.84-7.38m-5.84 7.38L4.73 8.22m0 0a14.09 14.09 0 0012.12-6.16A14.06 14.06 0 004.73 8.22" />
  </svg>
);
const SparklesIcon = () => (
  <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
  </svg>
);

/* ─── main component ─── */
export default function ContactForm({ isOpen, onClose }: any) {
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (!isOpen) return;

    const script1 = document.createElement("script");
    script1.src = "https://ajax.googleapis.com/ajax/libs/jquery/3.6.4/jquery.min.js";
    script1.async = true;

    const script2 = document.createElement("script");
    script2.src =
      "https://crm.zohopublic.in/crm/WebFormAnalyticsServeServlet?rid=348379178fd8992c6a0c5c78821b14fb6d38c92e3b4e2153c96668a9b337a7a0853638fdd445f3ad5f0183473cb98bdegid4ad9ac14fd8cadb4f62947149b30b88ae4b5c3aaec315f6b4c1e3572b3b6bc8fgidc0cab55e40bee59acc9f1b57cdbe9614e41841b1b2f34589a4c1391e5bd19bebgidd1d53af167864ac4bdb86558d32d0650201feced304f0ed2db310881ab7e837a";

    document.body.appendChild(script1);
    script1.onload = () => document.body.appendChild(script2);

    return () => {
      try { document.body.removeChild(script1); } catch {}
      try { document.body.removeChild(script2); } catch {}
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      {/* Overlay */}
      <motion.div
        key="overlay"
        variants={overlay}
        initial="hidden"
        animate="visible"
        exit="exit"
        className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6"
        style={{ background: "radial-gradient(ellipse at 30% 20%, rgba(99,102,241,.15) 0%, rgba(0,0,0,.82) 70%)" }}
        onClick={onClose}
      >
        {/* Modal Card */}
        <motion.div
          key="modal"
          variants={modal}
          initial="hidden"
          animate="visible"
          exit="exit"
          onClick={(e) => e.stopPropagation()}
          className="relative w-full max-w-[900px] max-h-[92vh] overflow-hidden rounded-2xl"
          style={{
            background: "linear-gradient(145deg, rgba(15,15,25,.97) 0%, rgba(20,10,40,.97) 50%, rgba(10,15,30,.97) 100%)",
            border: "1px solid rgba(255,255,255,.08)",
            boxShadow: "0 0 80px rgba(99,102,241,.12), 0 25px 60px rgba(0,0,0,.6)",
          }}
        >
          {/* Decorative gradient orbs */}
          <div className="pointer-events-none absolute -top-24 -right-24 w-72 h-72 rounded-full opacity-20"
            style={{ background: "radial-gradient(circle, #6366f1 0%, transparent 70%)" }} />
          <div className="pointer-events-none absolute -bottom-32 -left-32 w-80 h-80 rounded-full opacity-15"
            style={{ background: "radial-gradient(circle, #a855f7 0%, transparent 70%)" }} />
          <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-[0.04]"
            style={{ background: "radial-gradient(circle, #06b6d4 0%, transparent 60%)" }} />

          {/* Scrollable inner */}
          <div className="relative z-10 overflow-y-auto max-h-[92vh] custom-scrollbar">

            {/* ── Header ── */}
            <div className="sticky top-0 z-20 px-6 sm:px-8 py-5 flex items-center justify-between"
              style={{
                background: "linear-gradient(180deg, rgba(15,15,25,.98) 60%, rgba(15,15,25,0) 100%)",
                backdropFilter: "blur(12px)",
              }}
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center"
                  style={{ background: "linear-gradient(135deg, #6366f1 0%, #a855f7 100%)" }}>
                  <SparklesIcon />
                </div>
                <div>
                  <h2 className="text-lg font-bold text-white tracking-tight">Maxtron Academy</h2>
                  <p className="text-xs text-gray-400">Fill in your details to get started</p>
                </div>
              </div>
              <button
                onClick={onClose}
                className="w-9 h-9 rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-all duration-200"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* ── Success Toast ── */}
            <AnimatePresence>
              {submitted && (
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="mx-6 sm:mx-8 mb-4 px-4 py-3 rounded-xl flex items-center gap-3"
                  style={{ background: "linear-gradient(135deg, rgba(16,185,129,.15) 0%, rgba(16,185,129,.05) 100%)", border: "1px solid rgba(16,185,129,.25)" }}
                >
                  <div className="w-6 h-6 rounded-full bg-emerald-500 flex items-center justify-center flex-shrink-0">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-sm text-emerald-300" id="wf_splash_info">Form submitted successfully!</span>
                </motion.div>
              )}
            </AnimatePresence>

            {/* ── Form ── */}
            <div className="px-6 sm:px-8 pb-8">
              <form id="webform989313000001929001" name="WebForm989313000001929001" acceptCharset="UTF-8">
                {/* Do not remove this code. — Hidden Fields */}
                <input type="text" style={{ display: "none" }} name="xnQsjsdp" value="1433b21ed7ebb3fd2e8012d8018ed89b80f17dd1aaeab4de50047d0791bf96d6" readOnly />
                <input type="hidden" name="zc_gad" id="zc_gad" value="" />
                <input type="text" style={{ display: "none" }} name="xmIwtLD" value="48d4a03473b3d2d90770b235b92a4fdf5306130d4f13249d276f7728857b0feb74384b3a8118817d483d4fad15b77a07" readOnly />
                <input type="text" style={{ display: "none" }} name="actionType" value="Q3VzdG9tTW9kdWxlMg==" readOnly />
                <input type="text" style={{ display: "none" }} name="returnURL" value="null" readOnly />

                <motion.div variants={stagger} initial="hidden" animate="visible" className="space-y-7">

                  {/* ── Section 1: Personal Info ── */}
                  <motion.div variants={fadeUp}>
                    <SectionHeader icon={<UserIcon />} title="Personal Information" />
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                      <GlassInput id="NAME" name="NAME" label="Full Name" required maxLength={120} />
                      <GlassInput id="Email" name="Email" label="Email" type="email" required maxLength={100} />
                      <GlassInput id="COBJ2CF24" name="COBJ2CF24" label="Phone" required maxLength={30} />
                      <GlassInput id="COBJ2CF23" name="COBJ2CF23" label="Location" required maxLength={255} />
                    </div>
                  </motion.div>

                  {/* ── Section 2: About You ── */}
                  <motion.div variants={fadeUp}>
                    <SectionHeader icon={<BriefcaseIcon />} title="About You & Your Business" />
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                      <GlassSelect id="COBJ2CF9" name="COBJ2CF9" label="What best describes you?">
                        <option value="-None-">Select an option</option>
                        <option value="Founder / Co-Founder">Founder / Co-Founder</option>
                        <option value="CEO / CXO">CEO / CXO</option>
                        <option value="Sales / Marketing Professional">Sales / Marketing Professional</option>
                        <option value="Developer / Tech">Developer / Tech</option>
                        <option value="Freelancer">Freelancer</option>
                        <option value="Student">Student</option>
                        <option value="Other">Other</option>
                      </GlassSelect>

                      <GlassSelect id="COBJ2CF14" name="COBJ2CF14" label="What stage is your business in?">
                        <option value="-None-">Select an option</option>
                        <option value="Just an idea">Just an idea</option>
                        <option value="Early stage">Early stage</option>
                        <option value="Growing">Growing</option>
                        <option value="Scaling">Scaling</option>
                        <option value="Established">Established</option>
                      </GlassSelect>

                      <GlassSelect id="COBJ2CF15" name="COBJ2CF15" label="What's your primary goal right now?">
                        <option value="-None-">Select an option</option>
                        <option value="Generate more leads">Generate more leads</option>
                        <option value="Increase sales conversions">Increase sales conversions</option>
                        <option value="Reduce operational cost">Reduce operational cost</option>
                        <option value="Automate repetitive work">Automate repetitive work</option>
                        <option value="Scale business faster">Scale business faster</option>
                      </GlassSelect>

                      <GlassSelect id="COBJ2CF16" name="COBJ2CF16" label="What is your biggest challenge currently?">
                        <option value="-None-">Select an option</option>
                        <option value="Not getting enough leads">Not getting enough leads</option>
                        <option value="Leads are not converting">Leads are not converting</option>
                        <option value="Team is slow / inefficient">Team is slow / inefficient</option>
                        <option value="High marketing cost (CPL)">High marketing cost (CPL)</option>
                        <option value="Manual work taking too much time">Manual work taking too much time</option>
                      </GlassSelect>
                    </div>
                  </motion.div>

                  {/* ── Section 3: AI & Marketing ── */}
                  <motion.div variants={fadeUp}>
                    <SectionHeader icon={<RocketIcon />} title="AI & Marketing Intelligence" />
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                      <GlassSelect id="COBJ2CF12" name="COBJ2CF12" label="Are you currently using AI in your business?">
                        <option value="-None-">Select an option</option>
                        <option value="Yes, extensively">Yes, extensively</option>
                        <option value="Yes, but limited use">Yes, but limited use</option>
                        <option value="Tried but didn't work">Tried but didn&rsquo;t work</option>
                        <option value="Planning to start">Planning to start</option>
                        <option value="Not using at all">Not using at all</option>
                      </GlassSelect>

                      <GlassSelect id="COBJ2CF11" name="COBJ2CF11" label="Where do you want to use AI the most?">
                        <option value="-None-">Select an option</option>
                        <option value="Lead generation">Lead generation</option>
                        <option value="Sales automation">Sales automation</option>
                        <option value="Customer support">Customer support</option>
                        <option value="Operations / workflow automation">Operations / workflow automation</option>
                        <option value="Content & marketing">Content & marketing</option>
                      </GlassSelect>

                      <GlassSelect id="COBJ2CF10" name="COBJ2CF10" label="How is your current marketing performance?">
                        <option value="-None-">Select an option</option>
                        <option value="Getting good leads consistently">Getting good leads consistently</option>
                        <option value="Leads are coming but quality is poor">Leads are coming but quality is poor</option>
                        <option value="Inconsistent results">Inconsistent results</option>
                        <option value="Not getting leads at all">Not getting leads at all</option>
                        <option value="Not running marketing yet">Not running marketing yet</option>
                      </GlassSelect>

                      <GlassSelect id="COBJ2CF13" name="COBJ2CF13" label="What's your monthly marketing budget?">
                        <option value="-None-">Select an option</option>
                        <option value="Less than ₹25K">Less than ₹25K</option>
                        <option value="₹25K – ₹1L">₹25K – ₹1L</option>
                        <option value="₹1L – ₹5L">₹1L – ₹5L</option>
                        <option value="₹5L+">₹5L+</option>
                        <option value="Not decided">Not decided</option>
                      </GlassSelect>

                      <GlassSelect id="COBJ2CF8" name="COBJ2CF8" label="Want a free AI strategy call after the webinar?">
                        <option value="-None-">Select an option</option>
                        <option value="Yes">Yes</option>
                        <option value="No">No</option>
                      </GlassSelect>
                    </div>
                  </motion.div>

                  {/* Hidden field: MA Lead Source — Do not remove this code. */}
                  <div style={{ display: "none" }}>
                    <select id="COBJ2CF25" name="COBJ2CF25" defaultValue="Maxtron Academy CU">
                      <option value="-None-">-None-</option>
                      <option value="Maxtron Academy CU">Maxtron Academy CU</option>
                    </select>
                  </div>
                  <input type="text" name="aG9uZXlwb3Q" value="" style={{ display: "none" }} readOnly />

                  {/* ── Action Buttons ── */}
                  <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-3 pt-2">
                    <button
                      type="submit"
                      id="formsubmit"
                      className="group relative flex-1 py-3.5 rounded-xl font-semibold text-white text-sm overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/25 active:scale-[0.98]"
                      style={{
                        background: "linear-gradient(135deg, #6366f1 0%, #8b5cf6 50%, #a855f7 100%)",
                      }}
                    >
                      <span className="relative z-10 flex items-center justify-center gap-2">
                        Submit Application
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}
                          className="transition-transform duration-300 group-hover:translate-x-1">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                        </svg>
                      </span>
                      {/* Shimmer effect */}
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                        style={{ background: "linear-gradient(90deg, transparent 0%, rgba(255,255,255,.12) 50%, transparent 100%)" }} />
                    </button>
                    <button
                      type="reset"
                      className="py-3.5 px-8 rounded-xl font-medium text-sm text-gray-400 hover:text-white transition-all duration-200"
                      style={{
                        background: "rgba(255,255,255,.04)",
                        border: "1px solid rgba(255,255,255,.08)",
                      }}
                    >
                      Reset
                    </button>
                  </motion.div>
                </motion.div>

                {/* Do not remove this code. — Form submission script */}
                <script
                  dangerouslySetInnerHTML={{
                    __html: `
                    function addAriaSelected989313000001929001(){
                      var optionElem = event.target;
                      var previousSelectedOption = optionElem.querySelector('[aria-selected=true]');
                      if (previousSelectedOption) { previousSelectedOption.removeAttribute('aria-selected'); }
                      optionElem.querySelectorAll('option')[optionElem.selectedIndex].ariaSelected = 'true';
                    }
                    function validateEmail989313000001929001(){
                      var form = document.forms['WebForm989313000001929001'];
                      var emailFld = form.querySelectorAll('[ftype=email]');
                      for(var i = 0; i < emailFld.length; i++){
                        var emailVal = emailFld[i].value;
                        if((emailVal.replace(/^\\s+|\\s+$/g,'')).length != 0){
                          var atpos = emailVal.indexOf('@');
                          var dotpos = emailVal.lastIndexOf('.');
                          if(atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= emailVal.length){
                            alert('Please enter a valid email address.');
                            emailFld[i].focus();
                            return false;
                          }
                        }
                      }
                      return true;
                    }
                    function checkMandatory989313000001929001(){
                      var mndFileds = new Array('NAME','Email','COBJ2CF23','COBJ2CF24');
                      var fldLangVal = new Array('Full Name','Email','Location','Phone');
                      for(var i = 0; i < mndFileds.length; i++){
                        var fieldObj = document.forms['WebForm989313000001929001'][mndFileds[i]];
                        if(fieldObj){
                          if(((fieldObj.value).replace(/^\\s+|\\s+$/g,'')).length == 0){
                            if(fieldObj.type == 'file'){ alert('Please select a file to upload.'); fieldObj.focus(); return false; }
                            alert(fldLangVal[i] + ' cannot be empty.');
                            fieldObj.focus();
                            return false;
                          } else if(fieldObj.nodeName == 'SELECT'){
                            if(fieldObj.options[fieldObj.selectedIndex].value == '-None-'){
                              alert(fldLangVal[i] + ' cannot be none.');
                              fieldObj.focus();
                              return false;
                            }
                          } else if(fieldObj.type == 'checkbox'){
                            if(fieldObj.checked == false){
                              alert('Please accept ' + fldLangVal[i]);
                              fieldObj.focus();
                              return false;
                            }
                          }
                          try{ if(fieldObj.name == 'Last Name'){ name = fieldObj.value; } } catch(e){}
                        }
                      }
                      if(!validateEmail989313000001929001()) return false;
                      var urlparams = new URLSearchParams(window.location.search);
                      if(urlparams.has('service') && (urlparams.get('service') === 'smarturl')){
                        var webform = document.getElementById('webform989313000001929001');
                        var service = urlparams.get('service');
                        var smarturlfield = document.createElement('input');
                        smarturlfield.setAttribute('type','hidden');
                        smarturlfield.setAttribute('value',service);
                        smarturlfield.setAttribute('name','service');
                        webform.appendChild(smarturlfield);
                      }
                      document.querySelector('.crmWebToEntityForm .formsubmit').setAttribute('disabled',true);
                      return true;
                    }
                    $(document).ready(function(){
                      $('#webform989313000001929001').submit(function(e){
                        var ismandatory = checkMandatory989313000001929001();
                        e.preventDefault();
                        if(ismandatory){
                          if(typeof _wfa_track != 'undefined' && _wfa_track.wfa_submit){ _wfa_track.wfa_submit(e); }
                          var formData = new FormData(this);
                          $.ajax({
                            url:'https://crm.zoho.in/crm/WebForm',
                            type:'POST',
                            data:formData,
                            cache:false,
                            contentType:false,
                            processData:false,
                            success:function(data){
                              var splashinfodom = document.getElementById('wf_splash_info');
                              if(splashinfodom) splashinfodom.innerText = data.actionvalue;
                              document.getElementById('webform989313000001929001').reset.click();
                              document.querySelector('.crmWebToEntityForm .formsubmit').removeAttribute('disabled');
                            },
                            error:function(data){ alert('An error occurred. Please try again.'); }
                          });
                        }
                      });
                    });
                  `,
                  }}
                />
              </form>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Custom scrollbar + form styles */}
      <style jsx global>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(255,255,255,.1);
          border-radius: 3px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(255,255,255,.2);
        }
        /* Make option text dark so it's readable on native OS dropdown backgrounds */
        select option {
          color: #1a1a2e;
          background: #ffffff;
        }
      `}</style>
    </AnimatePresence>
  );
}

/* ─── Section Header ─── */
function SectionHeader({ icon, title }: { icon: React.ReactNode; title: string }) {
  return (
    <div className="flex items-center gap-2.5 mb-1">
      <div className="text-indigo-400">{icon}</div>
      <h3 className="text-sm font-semibold text-white/80 uppercase tracking-wider">{title}</h3>
      <div className="flex-1 h-px ml-2" style={{ background: "linear-gradient(90deg, rgba(99,102,241,.3) 0%, transparent 100%)" }} />
    </div>
  );
}

/* ─── GlassInput ─── */
function GlassInput({
  id, name, label, type = "text", required, maxLength,
}: {
  id: string; name: string; label: string; type?: string; required?: boolean; maxLength?: number;
}) {
  const [focused, setFocused] = useState(false);
  return (
    <div className="space-y-1.5">
      <label htmlFor={id} className="block text-xs font-medium text-gray-400 tracking-wide">
        {label}
        {required && <span className="text-indigo-400 ml-0.5">*</span>}
      </label>
      <input
        id={id}
        name={name}
        type={type}
        maxLength={maxLength}
        aria-required={required}
        aria-label={name}
        {...(type === "email" ? { ftype: "email", autoComplete: "off" } as any : {})}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        className="w-full px-4 py-3 rounded-xl text-sm text-white placeholder-gray-500 outline-none transition-all duration-300"
        style={{
          background: focused ? "rgba(255,255,255,.07)" : "rgba(255,255,255,.04)",
          border: focused ? "1px solid rgba(99,102,241,.5)" : "1px solid rgba(255,255,255,.08)",
          boxShadow: focused ? "0 0 0 3px rgba(99,102,241,.1), 0 0 20px rgba(99,102,241,.05)" : "none",
        }}
        placeholder={`Enter your ${label.replace(" *", "").toLowerCase()}`}
      />
    </div>
  );
}

/* ─── GlassSelect ─── */
function GlassSelect({
  id, name, label, children,
}: {
  id: string; name: string; label: string; children: React.ReactNode;
}) {
  const [focused, setFocused] = useState(false);
  return (
    <div className="space-y-1.5">
      <label htmlFor={id} className="block text-xs font-medium text-gray-400 tracking-wide">
        {label}
      </label>
      <div className="relative">
        <select
          id={id}
          name={name}
          aria-label={name}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          className="w-full appearance-none px-4 py-3 pr-10 rounded-xl text-sm text-white outline-none transition-all duration-300 cursor-pointer"
          style={{
            background: focused ? "rgba(255,255,255,.07)" : "rgba(255,255,255,.04)",
            border: focused ? "1px solid rgba(99,102,241,.5)" : "1px solid rgba(255,255,255,.08)",
            boxShadow: focused ? "0 0 0 3px rgba(99,102,241,.1), 0 0 20px rgba(99,102,241,.05)" : "none",
          }}
        >
          {children}
        </select>
        {/* Custom dropdown arrow */}
        <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
          </svg>
        </div>
      </div>
    </div>
  );
}