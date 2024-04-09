import Left from "../Components/Left";

const Invoice = () => {
  return (
    <div className="flex">
      <Left />
      <div className="container">
        <div className=" w-20 flex items-center mb-[46px] gap-[22px] font-bold text-[15px] leading-[15px] tracking-[-0.25px] text-[#0C0E16]">
          <img src="Left.svg" alt="" />
          <p>Go back</p>
        </div>

        <div className="py-5 px-8 rounded-[10px] bg-white flex justify-between mb-6">
          <div className="flex items-center gap-5">
            <p className="font-medium text-[13px] leading-[15px] tracking-[-0.1px] text-[#858BB2]">
              Status
            </p>
            <div className="w-[104px] h-10 bg-[rgba(51,214,160,0.16)] flex py-[10px] items-center justify-center gap-2 rounded-lg ">
              <div className="w-2 h-2 rounded-full mb-[2.5px] bg-[#33D69F]"></div>
              <p className="font-bold h-[15px] text-[15px] leading-[15px] tracking-[-0.25px] text-[#33D69F]">
                Paid
              </p>
            </div>
          </div>
          <div className=" flex gap-2">
            <button className=" font-bold w-[73px] h-12 bg-[#F9FAFE] text-[#7E88C3] rounded-full">
              Edit
            </button>
            <button className=" font-bold w-[89px] h-12 bg-[#EC5757] text-[#FFFFFF] rounded-full">
              Delete
            </button>
            <button className=" font-bold px-6 h-12 bg-[#7C5DFA] text-[#FFFFFF] rounded-full">
              Mark as Paid
            </button>
          </div>
        </div>

        <div className="bg-white px-12 py-[50px] rounded-[10px] ">
          <div className="flex justify-between mb-[21px]">
            <div>
              <p className=" font-bold text-[15px] leading-[15px] tracking-[-0.25px] text-[#7E88C3]">
                #<span className="text-[#0C0E16]">RT3080</span>
              </p>
              <p className="font-medium text-[13px] leading-[15px] tracking-[-0.1px] text-[#7E88C3] mt-3">
                Graphic Design
              </p>
            </div>
            <div className="font-medium text-[13px] leading-[18px] tracking-[-0.1px] text-[#7E88C3] text-end">
              <p>19 Union Terrace</p>
              <p>London</p>
              <p>E1 3EZ</p>
              <p>United Kingdom</p>
            </div>
          </div>

          <div className=" flex gap-[118px]">
            <div>
              <p className="text-[#7E88C3] font-medium text-[13px] leading-[15px] tracking-[-0.1px] mb-[13px] ">
                Invoice Date
              </p>
              <p className="mb-[31px] text-[#0C0E16] font-bold text-[15px] leading-[20px] tracking-[-0.25px]  ">
                21 Aug 2021
              </p>
              <p className="text-[#7E88C3] font-medium text-[13px] leading-[15px] tracking-[-0.1px] mb-[13px] ">
                Payment Due
              </p>
              <p className="mb-[31px] text-[#0C0E16] font-bold text-[15px] leading-[20px] tracking-[-0.25px]  ">
                20 Sep 2021
              </p>
            </div>
            <div>
              <p className="text-[#7E88C3] font-medium text-[13px] leading-[15px] tracking-[-0.1px] mb-[13px] ">
                Bill To
              </p>
              <p className="text-[#0C0E16] font-bold text-[15px] leading-[20px] tracking-[-0.25px] mb-2 ">
                Alex Grim
              </p>

              <div>
                <p className="text-[#7E88C3] font-medium text-[13px] leading-[18px] tracking-[-0.1px] ">
                  84 Church Way
                </p>
                <p className="text-[#7E88C3] font-medium text-[13px] leading-[18px] tracking-[-0.1px] ">
                  Bradford
                </p>
                <p className="text-[#7E88C3] font-medium text-[13px] leading-[18px] tracking-[-0.1px] ">
                  BD1 9PB
                </p>
                <p className="text-[#7E88C3] font-medium text-[13px] leading-[18px] tracking-[-0.1px] ">
                  United Kingdom
                </p>
              </div>
            </div>
            <div>
              <p className="text-[#7E88C3] font-medium text-[13px] leading-[15px] tracking-[-0.1px] mb-[13px] ">
                Sent to
              </p>
              <p className="text-[#0C0E16] font-bold text-[15px] leading-[20px] tracking-[-0.25px]  ">
                alexgrim@mail.com
              </p>
            </div>
          </div>

          <div className="mt-12 bg-[#F9FAFE] px-8 py-[33px] rounded-t-lg">
              <table className="w-full">
                <thead>
                <tr className=" font-medium text-[13px] leading-[18px] tracking-[-0.1px] text-[#7E88C3] ">
                  <th className="text-start">Item Name</th>
                  <th className="text-center">QTY.</th>
                  <th className="text-end">Price</th>
                  <th className="text-end">Total</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                  <td className="pt-8 text-start font-bold text-[15px] leading-[15x] tracking-[-0.25px] text-[#0C0E16]">Banner Design</td>
                  <td className="pt-8 text-center font-bold text-[15px] leading-[15x] tracking-[-0.25px] text-[#7E88C3]">1</td>
                  <td className="pt-8 text-end font-bold text-[15px] leading-[15x] tracking-[-0.25px] text-[#7E88C3]">£ 156.00</td>
                  <td className="pt-8 text-end font-bold text-[15px] leading-[15x] tracking-[-0.25px] text-[#0C0E16]">£ 156.00</td>
                </tr>
                <tr>
                  <td className="pt-8 text-start font-bold text-[15px] leading-[15x] tracking-[-0.25px] text-[#0C0E16]">Banner Design</td>
                  <td className="pt-8 text-center font-bold text-[15px] leading-[15x] tracking-[-0.25px] text-[#7E88C3]">1</td>
                  <td className="pt-8 text-end font-bold text-[15px] leading-[15x] tracking-[-0.25px] text-[#7E88C3]">£ 156.00</td>
                  <td className="pt-8 text-end font-bold text-[15px] leading-[15x] tracking-[-0.25px] text-[#0C0E16]">£ 156.00</td>
                </tr>
                </tbody>
              </table>
          </div>
          <div className="px-8 py-6 bg-[#373B53] flex justify-between items-center  rounded-b-lg">
            <p className="font-medium text-[13px] leading-[18x] tracking-[-0.1px] text-white ">Amount Due</p>
           <p className="font-bold text-[24px] leading-[32px] tracking-[-0.5px] text-white ">£ 556.00</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Invoice;
