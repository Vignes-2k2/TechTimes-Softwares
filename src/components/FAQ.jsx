import Faq from "./Content/Data/FAQ"


const FAQ = () => {
  return (
    <div className="w-full mt-[54px] mb-10" id="Frequently-Asked-Questions">
      <h1 className="text-[28px] font-bold mb-8">Frequently Asked Questions</h1>
      {
        Faq.map((faq,key)=>{
          return(
            <div key={key} className="gap-2 flex flex-col">
              <p className="font-bold text-[16px] leading-8">Q.   {faq.q}</p>
              <p className="leading-8 text-justify">A.   {faq.a}</p>
            </div>
            
          )
        })
      }
      </div>
  )
}

export default FAQ