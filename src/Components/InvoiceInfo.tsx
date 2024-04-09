import { collection, doc, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"
import { db } from "./Firebase";


const InvoiceInfo = () => {

  const [invoices, setInvoices] = useState<any[]>([]);

  useEffect(() => {
    async function getData() {
      let invoiceArr: any = [];
      const snap = await getDocs(collection(db, "invoice"));
      snap.forEach(doc => {
       
        invoiceArr.push({ id: doc.id, ...doc.data() });
      });

      setInvoices(invoiceArr);
    }
    getData();
    {
      // console.log(setInvoices);
    }
  }, []);
 

  const navigate = useNavigate();

  const handleClickInfo = (e: any) => {

    navigate("/invoice");
  }

  return (
    <div className=" mt-16">
     {invoices?<ul className="flex flex-col gap-4">
        {invoices.map((invoice) => (
          <li key={invoice.id} onClick={handleClickInfo} className="bg-white border border-[#F8F8FB] cursor-pointer hover:border-[#7C5DFA] py-4 pr-6 pl-8 flex items-center justify-between rounded-lg ">
            <p className=" font-bold text-[15px] leading-[15px] tracking-[-0.25px] text-[#7E88C3]">
              #<span className="text-[#0C0E16]">RT3080</span>
            </p>
            <p className=" text-[#888EB0] font-medium text-[13px] leading-[15px] tracking-[-0.1px]">
              Due {invoice.data.invoiceDate}
            </p>
            <p className=" text-[#888EB0] font-medium text-[13px] leading-[15px] tracking-[-0.1px]">{invoice.data.name}</p>
            <p className=" font-bold text-[15px] leading-[24px] tracking-[-0.25px] text-[#0C0E16]">£ {(invoice.data.price0&&invoice.data.itemCount0)?invoice.data.price0*invoice.data.itemCount0:"0"}</p>
            <div className="w-[104px] h-10 bg-[rgba(51,214,160,0.16)] flex items-center justify-center gap-2 rounded-lg ">
              <div className="w-2 h-2 rounded-full bg-[#33D69F]"></div>
              <p className="font-bold text-[15px] leading-[15px] tracking-[-0.25px] text-[#33D69F]">Paid</p>
            </div>
            <img src="right.svg" alt="" />
          </li>
        ))}
      </ul>:<p>hjghj</p>} 
    </div>
  );
};

export default InvoiceInfo;
