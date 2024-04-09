const Left = () => {
  return (
    <div className=" z-20  bg-[#252945] fixed flex flex-col justify-between pb-6 w-[103px] h-[100vh] rounded-t-[20px] rounded-br-[20px]  ">
      <img src="img-1.svg" alt="" />
      <div className="flex items-center flex-col gap-7">
        <img src="moon.svg" alt="" />
        <div className="w-full h-[1px] bg-[#494E6E]"></div>
         <img src="person.svg" alt="" />
      </div>
    </div>
  );
};

export default Left;
