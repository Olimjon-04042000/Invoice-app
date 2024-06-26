import { useState } from "react";


const Edit = ({setEdit}:any) => {

  const closeModal=(e:any)=>{
    if (e.target === e.currentTarget) {
      setEdit(false);
    }
  }

  
const [addItem, setAddItem]=useState(0);



const handleClickAddItem=()=>{
setAddItem(addItem+1);
}

const handleDelBtn=(index:number)=>{

  const newList=[...Array(addItem)].filter((_,i)=>i!==index);
  setAddItem(newList.length);
}

  return (
    <div
      onClick={closeModal}
      className=" absolute  bg-[#00000068] w-[1520px]  z-10 left-[-777px] top-[-158px] "
    >
      <div className=" w-[719px] rounded-r-[20px] pt-[60px]    pb-8 pl-[159px] pr-14 bg-white ">
        <h1 className="mb-[46px] font-bold text-[24px] leading-[32px] tracking-[-0.5px] text-[#0C0E16] ">
        Edit #XM9141
        </h1>
        <div>
          <p className="font-bold text-[15px] leading-[15px] tracking-[-0.25px] text-[#7C5DFA] mb-[30px]">
            Bill From
          </p>
          <label>
            <p className="font-medium text-[13px] leading-[15px] tracking-[-0.1px] text-[#7E88C3] mb-3 ">
              Street Address
            </p>
            <input
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
                type="text"
                className="input input-bordered w-full max-w-xs"
              />
            </label>
            <label className="flex flex-col gap-3 w-[152px]">
              <span className="font-medium text-[13px] leading-[15px] tracking-[-0.1px] text-[#7E88C3] ">
                Post Code
              </span>
              <input
                type="text"
                className="input input-bordered w-full max-w-xs"
              />
            </label>
            <label className="flex flex-col gap-3 w-[152px]">
              <span className="font-medium text-[13px] leading-[15px] tracking-[-0.1px] text-[#7E88C3] ">
                Country
              </span>
              <input
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
              type="text"
              className="input input-bordered w-[504px] mb-9"
            />
          </label>
          <label>
            <p className="font-medium text-[13px] leading-[15px] tracking-[-0.1px] text-[#7E88C3] mb-3 ">
              Client’s Email
            </p>
            <input
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
                type="text"
                className="input input-bordered w-full max-w-xs"
              />
            </label>
            <label className="flex flex-col gap-3 w-[152px]">
              <span className="font-medium text-[13px] leading-[15px] tracking-[-0.1px] text-[#7E88C3] ">
                Post Code
              </span>
              <input
                type="text"
                className="input input-bordered w-full max-w-xs"
              />
            </label>
            <label className="flex flex-col gap-3 w-[152px]">
              <span className="font-medium text-[13px] leading-[15px] tracking-[-0.1px] text-[#7E88C3] ">
                Country
              </span>
              <input
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
              <input type="date" className="input input-bordered mb-9 w-full" />
            </label>
            <label className="w-[240px]">
              <p className="font-medium text-[13px] leading-[15px] tracking-[-0.1px] text-[#7E88C3] mb-3 ">
                Payment Terms
              </p>
              <select className="select  select-bordered w-full max-w-xs">
                <option className="my-8 h-5 bg-white hover:bg-white hover:text-[#7C5DFA]   font-bold text-[15px] leading-[15px] tracking-[-0.25px] text-[#0C0E16]">
                  Net 1 Day
                </option>
                <br />
                <option className="my-8 h-5 bg-white   font-bold text-[15px] leading-[15px] tracking-[-0.25px] text-[#0C0E16]">
                  Net 7 Days
                </option>
                <option className="my-8 h-5 bg-white   font-bold text-[15px] leading-[15px] tracking-[-0.25px] text-[#0C0E16]">
                  Net 14 Days
                </option>
                <option
                  className="my-8 h-5 bg-white   font-bold text-[15px] leading-[15px] tracking-[-0.25px] text-[#0C0E16]"
                  selected
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
              type="text"
              className="input input-bordered w-[504px] mb-9"
            />
          </label>
          <h2 className="font-bold text-[18px] leading-[32px] tracking-[-0.38px] text-[#777F98] mb-3 ">
            Item List
          </h2>
          <div className="flex gap-6 mb-2">
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
            {[...Array(addItem)].map((_,index)=>(
              <li key={index} className="flex items-center justify-between mb-5">
              <input type="text" className="input input-bordered w-[214px] " />
              <input
                defaultValue=""
                type="number"
                className="input input-bordered w-[46px] "
              />
              <input type="number" className="input input-bordered w-[100px]" />
              <p className="font-bold text-[15px] leading-[15px] tracking-[-0.25px] text-[#888EB0] ">
                0
              </p>
              <img onClick={()=>handleDelBtn(index)} className="cursor-pointer" src="del-btn.svg" alt="" />
            </li>
            ))}
          </ul>
          <button onClick={handleClickAddItem} className="font-bold w-full h-12 mb-6 rounded-full text-[15px] leading-[15px] tracking-[-0.25px] text-[#7E88C3] bg-[#F9FAFE] hover:bg-[#DFE3FA]">
            + Add New Item
          </button>
          <div className="flex justify-end">
          
            <div className="flex gap-4">
            <button onClick={closeModal} className="font-bold  h-12  w-24 rounded-full text-[15px] leading-[15px] tracking-[-0.25px] text-[#7E88C3] bg-[#F9FAFE] hover:bg-[#DFE3FA]">Cancel</button>
              <button className="font-bold w-[128px] h-12 rounded-full text-[15px] leading-[15px] tracking-[-0.25px] text-white bg-[#7C5DFA] hover:bg-[#9277FF] ">
              Save Changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Edit