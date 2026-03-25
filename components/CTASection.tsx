'use client'

const CTASection = () => {
  return (
    <section className="w-full bg-[#E6E6E6]">
      <div className="max-w-[96rem] mx-auto px-5 md:px-16 py-16 md:py-24 text-center">

        <h2 className="text-2xl md:text-4xl font-medium text-[#242424] mb-10">
          Start Your AI Transformation
        </h2>

        <div className="flex justify-center">
          <button className="relative w-[190px] h-[50px] bg-black text-white rounded-md">

            <span className="absolute top-2 left-4 text-sm">
              Apply Now
            </span>

            <span className="absolute bottom-2 right-4">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M10 6.66675L13.3334 10.0001L10 13.3334" stroke="#fff" strokeWidth="1.3" strokeLinecap="round"/>
                <path d="M2.66626 2.66675V7.33342C2.66626 8.04067 2.94721 8.71894 3.44731 9.21903C3.9474 9.71914 4.62568 10.0001 5.33292 10.0001H13.3329" stroke="#fff" strokeWidth="1.3" strokeLinecap="round"/>
              </svg>
            </span>

          </button>
        </div>

      </div>
    </section>
  )
}

export default CTASection