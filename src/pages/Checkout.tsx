import pic from "../assets/Paystack-mark-white-twitter.png";
import { BsWalletFill } from "react-icons/bs";
import { AiOutlineSafety } from "react-icons/ai";
import { useState } from "react";

const checkout = () => {
  const change = (numb: number) => {
    const w = numb.toString();
    const x = w.split(".");
    x[0] = x[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");

    return x.join(".");
  };

  const validateInput = (e: any) => {
    const input = e.target;
    const inputValue = input.value;

    input.value = inputValue.replace(/\D/g, "");
  };

  const [state, setState] = useState<number>(0);
  const [changer, setChanger] = useState<any>();

  return (
    <div className="w-full bg-[#FBF8F6] flex items-center justify-center ">
      <div
        className="w-[600px] min-h-[400px] rounded-3xl bg-white p-3 mt-[50px] mb-[30px
        ]"
        style={{
          boxShadow:
            "rgba(255, 255, 255, 1)2px 2px 0px -14px, rgba(0, 0, 0, 0.3) 2px 2px 0px -14px",
        }}
      >
        {/* image part */}
        <div className="flex">
          <img
            src=""
            alt=""
            className="w-[150px] h-[100px] rounded-md border object-cover"
          />
          <div className="ml-[10px] flex  justify-center flex-col">
            <div className=" text-[17px]">
              You're supporting{" "}
              <span className="font-bold">Education Fund</span>
            </div>
            <div className="text-[15px] font-light">
              Your donation will benefit{" "}
              <span className="font-bold">Abeg.org</span>{" "}
            </div>
          </div>
        </div>
        {/* input part */}
        <div className="mt-[30px]">
          <div className="font-bold">Enter your donation</div>
          <div className="w-full h-[80px] pl-[10px]  pr-[10px] border rounded-md outline-none mt-[5px] flex items-center">
            <div className="flex flex-col">
              <div className="font-bold text-[20px]">$</div>
              <div className="font-bold text-[20px]">USD</div>
            </div>
            <input
              type="text"
              onInput={validateInput}
              maxLength={7}
              className="h-[100%] w-[85%]  pl-[20px] outline-none text-[30px] font-bold text-right appearance-none focus:border-indigo-500
        "
              onChange={(e: any) => {
                setState(e.target.value);
              }}
            />
            <div className="font-bold text-[30px] ">
              {" "}
              <span className="mb-[10px]"> .</span>00
            </div>
          </div>
        </div>

        <hr className="mt-[30px]" />
        {/* payment method */}
        <div className="mt-[20px]">
          <div className="font-semibold text-[18px]">Payment methods</div>
          <div className="w-full h-[180px] border rounded-md mt-[20px] ">
            <div className="flex items-center w-full h-[90px] border-b pl-[30px] hover:cursor-pointer duration-300 ">
              <input
                type="radio"
                name="payment"
                value="Paystack"
                className="hover:cursor-pointer"
                onChange={(e: any) => {
                  setChanger(e.target.value);
                }}
              />
              <img src={pic} alt="" className="w-[30px] h-[30px] ml-[20px]" />
              <div className="text-[20px] font-normal ml-[20px]">Paystack</div>
            </div>

            <div className="flex items-center w-full h-[90px] -b pl-[30px] hover:cursor-pointer duration-300 ">
              <input
                type="radio"
                value="Wallet"
                name="payment"
                className="hover:cursor-pointer"
                onChange={(e: any) => {
                  setChanger(e.target.value);
                }}
              />
              <BsWalletFill className="text-[30px] ml-[20px]" />
              <div className="text-[20px] font-normal ml-[20px]">Wallet</div>
            </div>
          </div>
        </div>

        {/* <select name="" id="" >
          <option value="" className="w-full">
          <div className="flex items-center w-full h-[90px] border-b pl-[30px] hover:cursor-pointer duration-300 ">
              <input
                type="radio"
                className="hover:cursor-pointer"
                onChange={(e: any) => {
                  setChanger(e.target.value);
                }}
              />
              <img src={pic} alt="" className="w-[30px] h-[30px] ml-[20px]" />
              <div className="text-[20px] font-normal ml-[20px]">Paystack</div>
            </div>
          </option>
          <option value="">
            wallet
          </option>
        </select> */}

        <hr className="mt-[30px]" />

        <div className="font-bold text-[20px] mt-[20px]">Your donation</div>
        <div className="flex justify-between mt-[20px] items-center">
          <div className="font-medium text-[17px]">Your donation</div>
          <div className="flex justify-end font-medium text-[17px]">
            {" "}
            ${change(state)}.00
          </div>
        </div>
        {/* button */}
        <div className="mt-[20px]">
          {changer === "Paystack" && (
            <button
              className="w-full h-[60px] rounded-md hover:cursor-pointer
        duration-300 bg-[dodgerblue] text-white text-[20px] flex justify-center items-center"
            >
              Paystack
            </button>
          )}
          {changer === "Wallet" && (
            <button
              className="w-full h-[60px] rounded-md hover:cursor-pointer mt-1
          duration-300 bg-black text-white text-[20px] flex justify-center items-center"
            >
              Wallet
            </button>
          )}
        </div>

        <div className="mt-[20px] font-light ">
          By continuing, you agree with{" "}
          <span className="font-medium underline cursor-pointer">
            Abeg terms
          </span>{" "}
          and{" "}
          <span className="font-medium underline cursor-pointer">
            privacy notice.
          </span>
          <br />
          Learn more about{" "}
          <span className="font-medium underline cursor-pointer">
            pricing and fees.
          </span>
        </div>

        <hr className="mt-[30px]" />

        <div className="flex justify-center mt-[20px] pb-2">
          <div>
            <AiOutlineSafety className="text-[30px]" />
          </div>
          <div className="ml-[10px]">
            <div className="mb-[5px] font-semibold text-[16px]">
              Abeg protects your donation
            </div>
            <div className="text-[13px] font-medium">
              We guarantee you a full refund for up to a year in the rare case
              that fraud occurs. See our{" "}
              <span className="font-medium underline cursor-pointer">
                Abeg Giving Guarantee.
              </span>{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default checkout;

{
  /* <input
  type="number"
  id="myNumberInput"
  name="myNumberInput"
  min="1"
  max="100"
  step="1"
  class="appearance-none w-24 px-3 py-2 rounded-md border border-gray-300 focus:border-indigo-500"
> */
}
