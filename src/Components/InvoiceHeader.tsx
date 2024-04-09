import React, { useState, useEffect } from "react";
import NewInvoice from "./NewInvoice";

const InvoiceHeader = () => {
  const [filter, setFilter] = useState(false);
  const [modal, setModal] = useState(false);


  useEffect(() => {
    const handleOutsideClick = (e:any) => {
      if (filter && !e.target.closest(".filter-btn")&&!e.target.closest(".filter-dropdown")) {
        setFilter(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [filter]);

  const handleClickFilter = () => {
    setFilter(!filter);
  };

  const handleNewInvoice=()=>{
setModal(!modal);

  }

  return (
    <div className="flex h-[55px] justify-between ">
      <div>
        <h1 className="font-bold text-[36px] text-[#0C0E16] leading-[33.12px] tracking-[-1.13px]">
          Invoices
        </h1>
        <p className="mt-[4.9px] font-medium text-[13px] text-[#888EB0] leading-4 tracking-[-0.1px]">
          There are 7 total invoices
        </p>
      </div>
      <div className="flex gap-7 relative">
        <p
          onClick={handleClickFilter}
          className="flex filter-btn cursor-pointer items-center h-12 gap-3 font-bold text-[15px] leading-[15px] tracking-[-0.25px]"
        >
          Filter by status
          <img
            className="w-[11px] h-[7px]"
            src={!filter ? "img-2.svg" : "open.svg"}
            alt=""
          />
        </p>
        {/* Filter dropdown */}
        {filter && (
          <div className="absolute top-[50px] right-[135px] bg-white shadow-lg rounded-md w-[192px] p-6 filter-dropdown ">
            <div className="form-control">
              <label id="draft" className="label p-0 justify-normal gap-7 cursor-pointer">
                <input
                  name="draft"
                  type="checkbox"
                  defaultChecked
                  className="w-4 h-4 checkbox checkbox-primary rounded-[2px] border-[#DFE3FA] hover:border bg-[#DFE3FA]"
                />
                <span className="font-bold pt-1 text-[15px] -ml-2 leading-[15x] tracking-[-0.25px] text-[#0C0E16]">
                  Draft
                </span>
              </label>
            </div>
            <div className="form-control">
              <label id="pending" className="label p-0 justify-normal gap-7 cursor-pointer">
                <input
                  name="pending"
                  type="checkbox"
                  defaultChecked
                  className="w-4 h-4 checkbox checkbox-primary rounded-[2px] border-[#DFE3FA] hover:border bg-[#DFE3FA]"
                />
                <span className="font-bold pt-1 text-[15px] -ml-2 leading-[15x] tracking-[-0.25px] text-[#0C0E16]">
                  Pending
                </span>
              </label>
            </div>
            <div className="form-control">
              <label id="paid" className="label p-0 justify-normal gap-7 cursor-pointer">
                <input
                  name="paid"
                  type="checkbox"
                  defaultChecked
                  className="w-4 h-4 checkbox checkbox-primary rounded-[2px] border-[#DFE3FA] hover:border bg-[#DFE3FA]"
                />
                <span className="font-bold pt-1 text-[15px] -ml-2 leading-[15x] tracking-[-0.25px] text-[#0C0E16]">
                  Paid
                </span>
              </label>
            </div>
          </div>
        )}
        {/* Add invoice */}
        <div onClick={handleNewInvoice} className="btn relative bg-[#7C5DFA] hover:bg-[#9277FF] cursor-pointer rounded-full w-[150px] flex justify-between items-center p-2 pr-4 h-12">
          <div className="w-8 h-8 flex bg-white rounded-full items-center justify-center">
            <img className="w-[10px]" src="+.svg" alt="" />
          </div>
          <p className="font-bold text-[15px] leading-[15px] tracking-[-0.25px] text-white">
            New Invoice
          </p>
        </div>
        {modal&&<NewInvoice modal={modal} setModal={setModal}/>}
      </div>
    </div>
  );
};

export default InvoiceHeader;
