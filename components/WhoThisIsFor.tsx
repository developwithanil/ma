'use client'

const WhoThisIsFor = () => {
  return (
    <section className="w-full bg-[#E6E6E6] border-b border-[#CFCFCF]">
      <div className="max-w-[96rem] mx-auto px-5 md:px-16">

        {/* FULL HEIGHT GRID */}
        <div className="grid md:grid-cols-2 items-stretch min-h-[220px] md:min-h-[260px]">

          {/* LEFT */}
          <div className="flex flex-col justify-between py-10 md:py-14 pr-6">
            <h2 className="text-2xl md:text-3xl font-medium text-[#242424]">
              Who This is For
            </h2>

            <div className="flex gap-3 mt-6 text-[#242424]">
              <button className="bg-white text-xs px-3 py-1 rounded">
                Real Impact
              </button>
              <button className="bg-white text-xs px-3 py-1 rounded">
                Build Differently
              </button>
            </div>
          </div>

          {/* RIGHT */}
          <div className="relative flex flex-col justify-between py-10 md:py-14 pl-6">

            {/* PERFECT FULL HEIGHT DIVIDER */}
            <div className="hidden md:block absolute left-0 top-0 h-full w-[1px] bg-[#CFCFCF]" />

            {/* TEXT */}
            <div className="space-y-4 text-sm md:text-base text-[#242424]">
              <p>Founders looking to scale faster with AI</p>
              <p>Business owners wanting to reduce operational costs</p>
              <p>Leaders exploring AI transformation</p>
              <p>Operators who want real execution, not theory</p>
            </div>

            {/* BUTTON */}
            <div className="mt-6">
              <button className="relative w-[180px] h-[48px] bg-black text-white rounded-md">

                <span className="absolute top-2 left-3 text-sm">
                  About Us
                </span>

                <span className="absolute bottom-2 right-3">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M10 6.66675L13.3334 10.0001L10 13.3334" stroke="#fff" strokeWidth="1.3" strokeLinecap="round"/>
                    <path d="M2.66626 2.66675V7.33342C2.66626 8.04067 2.94721 8.71894 3.44731 9.21903C3.9474 9.71914 4.62568 10.0001 5.33292 10.0001H13.3329" stroke="#fff" strokeWidth="1.3" strokeLinecap="round"/>
                  </svg>
                </span>

              </button>
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}

export default WhoThisIsFor