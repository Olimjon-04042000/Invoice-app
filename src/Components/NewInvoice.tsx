import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { collection, addDoc } from "firebase/firestore"
import { db } from "./Firebase";

const NewInvoice = ({ modal, setModal }: any) => {

  const { register, handleSubmit, formState: { errors } } = useForm();

  const [addItem, setAddItem] = useState(1);
  const [data, setData] = useState({});

 
 

  const hnled = handleSubmit(async (data) => {
    setData(data.id);
    if (data) {
      const ref = await addDoc(collection(db, "invoice"), {
        data
      })
    }
  });
  
  const handleClickDraft=()=>{
  
 }
  


  const closeModal = (e: any) => {
    if (e.target === e.currentTarget) {
      setModal(false);
    }
  };

  const handleClickAddItem = () => {
    setAddItem(addItem + 1);
  }

  const handleDelBtn = (index: number) => {

    const newList = [...Array(addItem)].filter((_, i) => i !== index);
    setAddItem(newList.length);
  }

  return (
    <div
      onClick={closeModal}
      className=" absolute   bg-[#00000068] w-[1520px] z-10 left-[-830px] -top-[77px] "
    >
      <div className=" w-[719px] rounded-r-[20px] pt-[60px]   pb-8 pl-[159px] pr-14 bg-white ">
        <h1 className="mb-[46px] font-bold text-[24px] leading-[32px] tracking-[-0.5px] text-[#0C0E16] ">
          New Invoice
        </h1>
        <div>
          <form onSubmit={hnled}>
            <p className="font-bold text-[15px] leading-[15px] tracking-[-0.25px] text-[#7C5DFA] mb-[30px]">
              Bill From
            </p>
            <label>
              <p className="font-medium text-[13px] leading-[15px] tracking-[-0.1px] text-[#7E88C3] mb-3 ">
                Street Address
              </p>
              <input
                {...register("fromStreet", { required: "This is required." })}
                type="text"
                className="input input-bordered w-[504px] mb-9"
              />
            </label>
            <div className="flex justify-between mb-10">
              <label className="flex flex-col gap-3 w-[152px]">
                <span className="font-medium text-[13px] leading-[15px] tracking-[-0.1px] text-[#7E88C3] ">
                  City
                </span>
                <input
                  {...register("fromCity", { required: "This is required." })}
                  type="text"
                  className="input input-bordered w-full max-w-xs"
                />
              </label>
              <label className="flex flex-col gap-3 w-[152px]">
                <span className="font-medium text-[13px] leading-[15px] tracking-[-0.1px] text-[#7E88C3] ">
                  Post Code
                </span>
                <input
                  {...register("fromPostCode", { required: "This is required." })}
                  type="text"
                  className="input input-bordered w-full max-w-xs"
                />
              </label>
              <label className="flex flex-col gap-3 w-[152px]">
                <span className="font-medium text-[13px] leading-[15px] tracking-[-0.1px] text-[#7E88C3] ">
                  Country
                </span>
                <input
                  {...register("fromCountry", { required: "This is required." })}
                  type="text"
                  className="input input-bordered w-full max-w-xs"
                />
              </label>
            </div>
            <p className="font-bold text-[15px] leading-[15px] tracking-[-0.25px] text-[#7C5DFA] mb-[30px]">
              Bill To
            </p>
            <label>
              <p className="font-medium text-[13px] leading-[15px] tracking-[-0.1px] text-[#7E88C3] mb-3 ">
                Client’s Name
              </p>
              <input
                {...register("name", { required: "This is required." })}
                type="text"
                className="input input-bordered w-[504px] mb-9"
              />
            </label>
            <label>
              <p className="font-medium text-[13px] leading-[15px] tracking-[-0.1px] text-[#7E88C3] mb-3 ">
                Client’s Email
              </p>
              <input
                {...register("email", { required: "This is required." })}
                type="email"
                placeholder="e.g. email@example.com"
                className="input input-bordered w-[504px] mb-9"
              />
            </label>
            <label>
              <p className="font-medium text-[13px] leading-[15px] tracking-[-0.1px] text-[#7E88C3] mb-3 ">
                Street Address
              </p>
              <input
                {...register("toStreet", { required: "This is required." })}
                type="text"
                className="input input-bordered w-[504px] mb-9"
              />
            </label>
            <div className="flex justify-between mb-10">
              <label className="flex flex-col gap-3 w-[152px]">
                <span className="font-medium text-[13px] leading-[15px] tracking-[-0.1px] text-[#7E88C3] ">
                  City
                </span>
                <input
                  {...register("toCity", { required: "This is required." })}
                  type="text"
                  className="input input-bordered w-full max-w-xs"
                />
              </label>
              <label className="flex flex-col gap-3 w-[152px]">
                <span className="font-medium text-[13px] leading-[15px] tracking-[-0.1px] text-[#7E88C3] ">
                  Post Code
                </span>
                <input
                  {...register("toPostCode", { required: "This is required." })}
                  type="text"
                  className="input input-bordered w-full max-w-xs"
                />
              </label>
              <label className="flex flex-col gap-3 w-[152px]">
                <span className="font-medium text-[13px] leading-[15px] tracking-[-0.1px] text-[#7E88C3] ">
                  Country
                </span>
                <input
                  {...register("toCountry", { required: "This is required." })}
                  type="text"
                  className="input input-bordered w-full max-w-xs"
                />
              </label>
            </div>
            <div className="flex justify-between">
              <label className="w-[240px]">
                <p className="font-medium text-[13px] leading-[15px] tracking-[-0.1px] text-[#7E88C3] mb-3 ">
                  Invoice Date
                </p>

                <input type="date"{...register("invoiceDate", { required: "This is required." })} className="input input-bordered mb-9 w-full" />
              </label>
              <label className="w-[240px]">
                <p className="font-medium text-[13px] leading-[15px] tracking-[-0.1px] text-[#7E88C3] mb-3 ">
                  Payment Terms
                </p>
                <select className="select  select-bordered w-full max-w-xs">
                  <option className="my-8 h-5 bg-white hover:bg-white hover:text-[#7C5DFA]   font-bold text-[15px] leading-[15px] tracking-[-0.25px] text-[#0C0E16]">
                    Net 1 Day
                  </option>
                  <option className="my-8 h-5 bg-white   font-bold text-[15px] leading-[15px] tracking-[-0.25px] text-[#0C0E16]">
                    Net 7 Days
                  </option>
                  <option className="my-8 h-5 bg-white   font-bold text-[15px] leading-[15px] tracking-[-0.25px] text-[#0C0E16]">
                    Net 14 Days
                  </option>
                  <option
                    className="my-8 h-5 bg-white   font-bold text-[15px] leading-[15px] tracking-[-0.25px] text-[#0C0E16]"
                    aria-checked
                  >
                    Net 30 Days
                  </option>
                </select>
              </label>
            </div>
            <label>
              <p className="font-medium text-[13px] leading-[15px] tracking-[-0.1px] text-[#7E88C3] mb-3 ">
                Project Description
              </p>
              <input
                {...register("projectDescription", { required: "This is required." })}
                type="text"
                className="input input-bordered w-[504px] mb-9"
              />
            </label>
            <h2 className="font-bold text-[18px] leading-[32px] tracking-[-0.38px] text-[#777F98] mb-3 ">
              Item List
            </h2>
            <div className="flex gap-9 mb-2">
              <p className="font-medium w-[214px] text-[13px] leading-[15px] tracking-[-0.1px] text-[#7E88C3] ">
                Item Name
              </p>
              <p className="font-medium w-[46px] text-[13px] leading-[15px] tracking-[-0.1px] text-[#7E88C3] ">
                Qty.
              </p>
              <p className="font-medium w-[100px] text-[13px] leading-[15px] tracking-[-0.1px] text-[#7E88C3] ">
                Price
              </p>
              <p className="font-medium w-[50px] text-[13px] leading-[15px] tracking-[-0.1px] text-[#7E88C3] ">
                Total
              </p>
            </div>
            <ul>
              {[...Array(addItem)].map((_, index) => (
                <li key={index} className="flex items-center justify-between mb-5">
                  <input type="text" {...register(`itemName${index}`, { required: "This is required." })}
                    className="input input-bordered w-[214px] " />
                  <input
                    {...register(`itemCount${index}`, { required: "This is required." })}
                    defaultValue=""
                    type="number"
                    className="input input-bordered w-[46px] "
                  />
                  <input type="number"{...register(`price${index}`, { required: "This is required." })}
                    className="input input-bordered w-[100px]" />
                  <p className="font-bold text-[15px] leading-[15px] tracking-[-0.25px] text-[#888EB0] ">
                   
                  </p>
                  <img onClick={() => handleDelBtn(index)} className="cursor-pointer" src="del-btn.svg" alt="" />
                </li>
              ))}
            </ul>
            <button onClick={handleClickAddItem} className="font-bold w-full h-12 mb-6 rounded-full text-[15px] leading-[15px] tracking-[-0.25px] text-[#7E88C3] bg-[#F9FAFE] hover:bg-[#DFE3FA]">
              + Add New Item
            </button>
            <div className="flex justify-between">
              <button className="font-bold  h-12  w-24 rounded-full text-[15px] leading-[15px] tracking-[-0.25px] text-[#7E88C3] bg-[#F9FAFE] hover:bg-[#DFE3FA]">Discard</button>
              <div className="flex gap-4 ">
                <button onClick={handleClickDraft} className="font-bold  h-12 w-[133px]  rounded-full text-[15px] leading-[15px] tracking-[-0.25px] text-[#888EB0] bg-[#373B53] hover:bg-[#0C0E16]">Save as Draft</button>
                <input type="submit" className="cursor-pointer font-bold w-[128px] h-12 rounded-full text-[15px] leading-[15px] tracking-[-0.25px] text-white bg-[#7C5DFA] hover:bg-[#9277FF]" />

              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default NewInvoice;
