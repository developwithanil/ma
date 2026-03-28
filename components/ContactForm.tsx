"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";

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
    transition: { type: "spring" as const, damping: 28, stiffness: 300 },
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
  const [phone, setPhone] = useState<string | undefined>("");

  useEffect(() => {
    if (!isOpen) return;
    

    const script1 = document.createElement("script");
    script1.src = "https://ajax.googleapis.com/ajax/libs/jquery/3.6.4/jquery.min.js";
    script1.async = true;

    const script2 = document.createElement("script");
    script2.src =
      "https://crm.zohopublic.in/crm/WebFormAnalyticsServeServlet?rid=9d72e8e4a83ddf6710dc640422b92413437df7dc7a41719b21e27b557d1f4136d1a2e4ee00224b170298264a9e41f5e3gid9602f15fde17915572c1c8e3a1ecf321550d631f2848013d7d91d70e5a188ec3gid11834b3c17d504440cdfb682f7b83016266a5650e3ecc7ab6a9f1c3c5d15f91egid44407ee3d5548c175f62da7ff9e504e0adf80873e7c3c5630fa0a4422caf0aef&tw=2f1df4d997d1dca9463107b8d71e2a07328b964b31217f0aef9c96a512c3c3b8";

    document.body.appendChild(script1);
    script1.onload = () => {
      document.body.appendChild(script2);

      // Inject Zoho CRM form submission logic after jQuery is available
      const formScript = document.createElement("script");
      formScript.textContent = `
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
                  if(splashinfodom) splashinfodom.innerText = data.actionvalue || 'Form submitted successfully!';
                  document.getElementById('webform989313000001929001').reset.click();
                  var submitBtn = document.querySelector('.crmWebToEntityForm .formsubmit');
                  if(submitBtn) submitBtn.removeAttribute('disabled');
                  
                  // Dispatch custom event to tell React to show the success toast
                  window.dispatchEvent(new CustomEvent('zoho-form-submitted'));
                },
                error:function(data){ alert('An error occurred. Please try again.'); }
              });
            }
          });
        });
      `;
      document.body.appendChild(formScript);
    };

    return () => {
      try { document.body.removeChild(script1); } catch {}
      try { document.body.removeChild(script2); } catch {}
    };
  }, [isOpen]);

  useEffect(() => {
    const handleFormSubmit = () => setSubmitted(true);
    window.addEventListener('zoho-form-submitted', handleFormSubmit);
    return () => window.removeEventListener('zoho-form-submitted', handleFormSubmit);
  }, []);

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
        style={{ background: "rgba(0,0,0,.5)" }}
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
            background: "#ffffff",
            border: "1px solid #CFCFCF",
            boxShadow: "0 25px 60px rgba(0,0,0,.15)",
          }}
        >

          {/* Scrollable inner */}
          <div className="relative z-10 overflow-y-auto max-h-[92vh] custom-scrollbar">

            {/* ── Header ── */}
            <div className="sticky top-0 z-20 px-6 sm:px-8 py-5 flex items-center justify-between bg-white border-b border-[#CFCFCF]">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center text-white"
                  style={{ background: "#331568" }}>
                  <SparklesIcon />
                </div>
                <div>
                  <h2 className="text-lg font-bold text-[#0E061D] tracking-tight">Maxtron Academy</h2>
                  <p className="text-xs text-[#6B6B6B]">{submitted ? "Success" : "Fill in your details to get started"}</p>
                </div>
              </div>
              <button
                onClick={onClose}
                className="w-9 h-9 rounded-full flex items-center justify-center text-[#6B6B6B] hover:text-[#0E061D] hover:bg-[#F3F3F3] transition-all duration-200"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* ── Body (Form or Success) ── */}
            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  className="py-16 sm:py-24 flex flex-col items-center justify-center text-center px-6"
                >
                  <motion.div 
                    initial={{ scale: 0 }} 
                    animate={{ scale: 1 }} 
                    transition={{ type: "spring", delay: 0.1, stiffness: 200, damping: 20 }}
                    className="w-24 h-24 mb-6 rounded-full bg-emerald-50 flex items-center justify-center" 
                    style={{ border: "8px solid #F0FFF4" }}
                  >
                    <div className="w-16 h-16 bg-emerald-500 rounded-full flex items-center justify-center shadow-lg shadow-emerald-500/30">
                      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth={3.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                  </motion.div>
                  <motion.h3 
                    initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
                    className="text-2xl sm:text-3xl font-bold text-[#0E061D] mb-3 tracking-tight"
                  >
                    Application Submitted!
                  </motion.h3>
                  <motion.p 
                    initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
                    className="text-[#6B6B6B] max-w-sm mb-10 text-sm sm:text-base leading-relaxed"
                  >
                    Thank you for reaching out! Your form has been submitted and our team will connect with you soon.
                  </motion.p>
                  <motion.button
                    initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}
                    onClick={onClose}
                    className="py-3.5 px-10 rounded-xl font-semibold text-white shadow-xl hover:-translate-y-0.5 transition-all duration-300 active:scale-95"
                    style={{ background: "#331568", boxShadow: "0 10px 25px -5px rgba(51, 21, 104, 0.4)" }}
                  >
                    Done
                  </motion.button>
                </motion.div>
              ) : (
                <motion.div
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="px-6 sm:px-8 pb-8"
                >
                  <form id="webform989313000001929001" name="WebForm989313000001929001" acceptCharset="UTF-8">
                {/* Do not remove this code. — Hidden Fields */}
                <input type="text" style={{ display: "none" }} name="xnQsjsdp" value="064997bdf0f6dd63810d4ca31da9bf9bbeb8ecc3f3769a19a5911534497a4b34" readOnly />
                <input type="hidden" name="zc_gad" id="zc_gad" value="" />
                <input type="text" style={{ display: "none" }} name="xmIwtLD" value="4b17bb81f314e3d09175ab4586ef31f2bad79f05a6ee2134a4608e08d0e815ee601f82bbda66b5c9750168e3760ad8da" readOnly />
                <input type="text" style={{ display: "none" }} name="actionType" value="Q3VzdG9tTW9kdWxlMg==" readOnly />
                <input type="text" style={{ display: "none" }} name="returnURL" value="null" readOnly />

                <motion.div variants={stagger} initial="hidden" animate="visible" className="space-y-7">

                  {/* ── Section 1: Personal Info ── */}
                  <motion.div variants={fadeUp}>
                    <SectionHeader icon={<UserIcon />} title="Personal Information" />
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                      <GlassInput id="NAME" name="NAME" label="Full Name" required maxLength={120} />
                      <GlassInput id="Email" name="Email" label="Email" type="email" required maxLength={100} />
                      {/* International Phone Input */}
                      <div className="space-y-1.5">
                        <label htmlFor="COBJ2CF24" className="block text-xs font-medium text-[#6B6B6B] tracking-wide">
                          Phone<span className="text-red-500 ml-0.5">*</span>
                        </label>
                        <PhoneInput
                          international
                          defaultCountry="IN"
                          value={phone}
                          onChange={(val) => setPhone(val || "")}
                          className="glass-phone-input"
                        />
                        {/* Hidden field syncs phone value to Zoho CRM */}
                        <input type="hidden" id="COBJ2CF24" name="COBJ2CF24" value={phone || ""} />
                      </div>
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
                      className="group relative flex-1 py-3.5 rounded-xl font-semibold text-white text-sm overflow-hidden transition-all duration-300 hover:opacity-90 active:scale-[0.98]"
                      style={{ background: "#331568" }}
                    >
                      <span className="relative z-10 flex items-center justify-center gap-2">
                        Submit Application
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}
                          className="transition-transform duration-300 group-hover:translate-x-1">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                        </svg>
                      </span>
                    </button>
                    <button
                      type="reset"
                      className="py-3.5 px-8 rounded-xl font-medium text-sm text-[#6B6B6B] hover:text-[#0E061D] transition-all duration-200"
                      style={{
                        background: "#F3F3F3",
                        border: "1px solid #CFCFCF",
                      }}
                    >
                      Reset
                    </button>
                  </motion.div>
                </motion.div>

              </form>
            </motion.div>
            )}
            </AnimatePresence>
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
          background: #CFCFCF;
          border-radius: 3px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #ABABAB;
        }

        /* ── International Phone Input light theme ── */
        .glass-phone-input {
          display: flex !important;
          align-items: center;
          width: 100%;
          padding: 8px 14px;
          border-radius: 12px;
          border: 1px solid #CFCFCF;
          background: #F9F9F9;
          transition: all 0.3s;
        }
        .glass-phone-input:focus-within {
          border-color: #331568;
          background: #fff;
          box-shadow: 0 0 0 3px rgba(51,21,104,.1);
        }
        .glass-phone-input .PhoneInputCountry {
          margin-right: 10px;
        }
        .glass-phone-input .PhoneInputCountrySelect {
          background: transparent;
          color: #0E061D;
          border: none;
          outline: none;
        }
        .glass-phone-input .PhoneInputCountryIconImg {
          width: 24px;
          height: 16px;
          border-radius: 2px;
        }
        .glass-phone-input .PhoneInputCountrySelectArrow {
          color: #6B6B6B;
          border-color: #6B6B6B;
          opacity: 1;
        }
        .glass-phone-input input {
          background: transparent !important;
          border: none !important;
          color: #0E061D !important;
          font-size: 14px;
          outline: none !important;
          box-shadow: none !important;
          padding: 4px 0 !important;
          width: 100%;
        }
        .glass-phone-input input::placeholder {
          color: #ABABAB;
        }
      `}</style>
    </AnimatePresence>
  );
}

/* ─── Section Header ─── */
function SectionHeader({ icon, title }: { icon: React.ReactNode; title: string }) {
  return (
    <div className="flex items-center gap-2.5 mb-1">
      <div className="text-[#331568]">{icon}</div>
      <h3 className="text-sm font-semibold text-[#0E061D] uppercase tracking-wider">{title}</h3>
      <div className="flex-1 h-px ml-2" style={{ background: "linear-gradient(90deg, #CFCFCF 0%, transparent 100%)" }} />
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
      <label htmlFor={id} className="block text-xs font-medium text-[#6B6B6B] tracking-wide">
        {label}
        {required && <span className="text-red-500 ml-0.5">*</span>}
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
        className="w-full px-4 py-3 rounded-xl text-sm text-[#0E061D] placeholder-[#ABABAB] outline-none transition-all duration-300"
        style={{
          background: focused ? "#fff" : "#F9F9F9",
          border: focused ? "1px solid #331568" : "1px solid #CFCFCF",
          boxShadow: focused ? "0 0 0 3px rgba(51,21,104,.1)" : "none",
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
      <label htmlFor={id} className="block text-xs font-medium text-[#6B6B6B] tracking-wide">
        {label}
      </label>
      <div className="relative">
        <select
          id={id}
          name={name}
          aria-label={name}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          className="w-full appearance-none px-4 py-3 pr-10 rounded-xl text-sm text-[#0E061D] outline-none transition-all duration-300 cursor-pointer"
          style={{
            background: focused ? "#fff" : "#F9F9F9",
            border: focused ? "1px solid #331568" : "1px solid #CFCFCF",
            boxShadow: focused ? "0 0 0 3px rgba(51,21,104,.1)" : "none",
          }}
        >
          {children}
        </select>
        {/* Custom dropdown arrow */}
        <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-[#6B6B6B]">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
          </svg>
        </div>
      </div>
    </div>
  );
}