import InvoiceHeader from "../Components/InvoiceHeader"
import InvoiceInfo from "../Components/InvoiceInfo"
import Left from "../Components/Left"


const Invoices = () => {


  return (
   
      <div className="flex transition-all data-dark-mode">
      <Left />
      <div className="container">
      <InvoiceHeader />
      <InvoiceInfo /> 
      </div>
      </div>
   
  )
}

export default Invoices