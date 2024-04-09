import {useNavigate} from "react-router-dom"


const InvoiceInfo = () => {

  const navigate=useNavigate();

  const handleClickInfo=(e:any)=>{

navigate("/invoice");
  }

  return (
    <div className=" mt-16">
      <ul className="flex flex-col gap-4">
        <li onClick={handleClickInfo} className="bg-white border border-[#F8F8FB] cursor-pointer hover:border-[#7C5DFA] py-4 pr-6 pl-8 flex items-center justify-between rounded-lg ">
          <p className=" font-bold text-[15px] leading-[15px] tracking-[-0.25px] text-[#7E88C3]">
            #<span className="text-[#0C0E16]">RT3080</span>
          </p>
          <p className=" text-[#888EB0] font-medium text-[13px] leading-[15px] tracking-[-0.1px]">
            Due 19 Aug 2021
          </p>
          <p className=" text-[#888EB0] font-medium text-[13px] leading-[15px] tracking-[-0.1px]">Jensen Huang</p>
          <p className=" font-bold text-[15px] leading-[24px] tracking-[-0.25px] text-[#0C0E16]">£ 1,800.90</p>
          <div className="w-[104px] h-10 bg-[rgba(51,214,160,0.16)] flex items-center justify-center gap-2 rounded-lg ">
            <div className="w-2 h-2 rounded-full bg-[#33D69F]"></div>
            <p className="font-bold text-[15px] leading-[15px] tracking-[-0.25px] text-[#33D69F]">Paid</p>
          </div>
          <img src="right.svg" alt="" />
        </li>
        <li className="bg-white py-4 pr-6 pl-8 flex items-center justify-between rounded-[10px] ">
          <p className=" font-bold text-[15px] leading-[15px] tracking-[-0.25px] text-[#7E88C3]">
            #<span className="text-[#0C0E16]">RT3080</span>
          </p>
          <p className=" text-[#888EB0] font-medium text-[13px] leading-[15px] tracking-[-0.1px]">
            Due 19 Aug 2021
          </p>
          <p className=" text-[#888EB0] font-medium text-[13px] leading-[15px] tracking-[-0.1px]">Jensen Huang</p>
          <p className=" font-bold text-[15px] leading-[24px] tracking-[-0.25px] text-[#0C0E16]">£ 1,800.90</p>
          <div className="w-[104px] h-10 bg-[rgba(51,214,160,0.16)] flex items-center justify-center gap-2 rounded-lg ">
            <div className="w-2 h-2 rounded-full bg-[#33D69F]"></div>
            <p className="font-bold text-[15px] leading-[15px] tracking-[-0.25px] text-[#33D69F]">Paid</p>
          </div>
          <img src="right.svg" alt="" />
        </li>
        <li className="bg-white py-4 pr-6 pl-8 flex items-center justify-between rounded-lg ">
          <p className=" font-bold text-[15px] leading-[15px] tracking-[-0.25px] text-[#7E88C3]">
            #<span className="text-[#0C0E16]">RT3080</span>
          </p>
          <p className=" text-[#888EB0] font-medium text-[13px] leading-[15px] tracking-[-0.1px]">
            Due 19 Aug 2021
          </p>
          <p className=" text-[#888EB0] font-medium text-[13px] leading-[15px] tracking-[-0.1px]">Jensen Huang</p>
          <p className=" font-bold text-[15px] leading-[24px] tracking-[-0.25px] text-[#0C0E16]">£ 1,800.90</p>
          <div className="w-[104px] h-10 bg-[rgba(51,214,160,0.16)] flex items-center justify-center gap-2 rounded-lg ">
            <div className="w-2 h-2 rounded-full bg-[#33D69F]"></div>
            <p className="font-bold text-[15px] leading-[15px] tracking-[-0.25px] text-[#33D69F]">Paid</p>
          </div>
          <img src="right.svg" alt="" />
        </li>
        <li className="bg-white py-4 pr-6 pl-8 flex items-center justify-between rounded-lg ">
          <p className=" font-bold text-[15px] leading-[15px] tracking-[-0.25px] text-[#7E88C3]">
            #<span className="text-[#0C0E16]">RT3080</span>
          </p>
          <p className=" text-[#888EB0] font-medium text-[13px] leading-[15px] tracking-[-0.1px]">
            Due 19 Aug 2021
          </p>
          <p className=" text-[#888EB0] font-medium text-[13px] leading-[15px] tracking-[-0.1px]">Jensen Huang</p>
          <p className=" font-bold text-[15px] leading-[24px] tracking-[-0.25px] text-[#0C0E16]">£ 1,800.90</p>
          <div className="w-[104px] h-10 bg-[rgba(51,214,160,0.16)] flex items-center justify-center gap-2 rounded-lg ">
            <div className="w-2 h-2 rounded-full bg-[#33D69F]"></div>
            <p className="font-bold text-[15px] leading-[15px] tracking-[-0.25px] text-[#33D69F]">Paid</p>
          </div>
          <img src="right.svg" alt="" />
        </li>
        <li className="bg-white py-4 pr-6 pl-8 flex items-center justify-between rounded-lg ">
          <p className=" font-bold text-[15px] leading-[15px] tracking-[-0.25px] text-[#7E88C3]">
            #<span className="text-[#0C0E16]">RT3080</span>
          </p>
          <p className=" text-[#888EB0] font-medium text-[13px] leading-[15px] tracking-[-0.1px]">
            Due 19 Aug 2021
          </p>
          <p className=" text-[#888EB0] font-medium text-[13px] leading-[15px] tracking-[-0.1px]">Jensen Huang</p>
          <p className=" font-bold text-[15px] leading-[24px] tracking-[-0.25px] text-[#0C0E16]">£ 1,800.90</p>
          <div className="w-[104px] h-10 bg-[rgba(51,214,160,0.16)] flex items-center justify-center gap-2 rounded-lg ">
            <div className="w-2 h-2 rounded-full bg-[#33D69F]"></div>
            <p className="font-bold text-[15px] leading-[15px] tracking-[-0.25px] text-[#33D69F]">Paid</p>
          </div>
          <img src="right.svg" alt="" />
        </li>
        <li className="bg-white py-4 pr-6 pl-8 flex items-center justify-between rounded-lg ">
          <p className=" font-bold text-[15px] leading-[15px] tracking-[-0.25px] text-[#7E88C3]">
            #<span className="text-[#0C0E16]">RT3080</span>
          </p>
          <p className=" text-[#888EB0] font-medium text-[13px] leading-[15px] tracking-[-0.1px]">
            Due 19 Aug 2021
          </p>
          <p className=" text-[#888EB0] font-medium text-[13px] leading-[15px] tracking-[-0.1px]">Jensen Huang</p>
          <p className=" font-bold text-[15px] leading-[24px] tracking-[-0.25px] text-[#0C0E16]">£ 1,800.90</p>
          <div className="w-[104px] h-10 bg-[rgba(51,214,160,0.16)] flex items-center justify-center gap-2 rounded-lg ">
            <div className="w-2 h-2 rounded-full bg-[#33D69F]"></div>
            <p className="font-bold text-[15px] leading-[15px] tracking-[-0.25px] text-[#33D69F]">Paid</p>
          </div>
          <img src="right.svg" alt="" />
        </li>
        <li className="bg-white py-4 pr-6 pl-8 flex items-center justify-between rounded-lg ">
          <p className=" font-bold text-[15px] leading-[15px] tracking-[-0.25px] text-[#7E88C3]">
            #<span className="text-[#0C0E16]">RT3080</span>
          </p>
          <p className=" text-[#888EB0] font-medium text-[13px] leading-[15px] tracking-[-0.1px]">
            Due 19 Aug 2021
          </p>
          <p className=" text-[#888EB0] font-medium text-[13px] leading-[15px] tracking-[-0.1px]">Jensen Huang</p>
          <p className=" font-bold text-[15px] leading-[24px] tracking-[-0.25px] text-[#0C0E16]">£ 1,800.90</p>
          <div className="w-[104px] h-10 bg-[rgba(51,214,160,0.16)] flex items-center justify-center gap-2 rounded-lg ">
            <div className="w-2 h-2 rounded-full bg-[#33D69F]"></div>
            <p className="font-bold text-[15px] leading-[15px] tracking-[-0.25px] text-[#33D69F]">Paid</p>
          </div>
          <img src="right.svg" alt="" />
        </li>
      </ul>
    </div>
  );
};

export default InvoiceInfo;
