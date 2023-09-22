import React from "react";

export const Login = () => {
  return (
    <div className="bg-white flex flex-row justify-center w-full">
      <div className="bg-white overflow-hidden w-[1920px] h-[1080px]">
        <div className="relative w-[3017px] h-[2163px] top-[-149px] left-[-400px]">
          <div className="w-[3017px] h-[2163px] absolute top-0 left-0">
            <div className="relative w-[1920px] h-[1080px] top-[149px] left-[400px]">
              <img
                className="w-[1920px] h-[932px] object-cover absolute top-0 left-0"
                alt="Background"
                src="background.png"
              />
              <img className="absolute w-[1920px] h-[355px] top-[725px] left-0" alt="Vector" src="vector.svg" />
            </div>
          </div>
          <div className="absolute w-[810px] h-[950px] top-[214px] left-[961px]">
            <div className="relative w-[800px] h-[950px] bg-[#00000080] rounded-[50px]">
              <div className="w-[329px] top-[64px] left-[218px] text-[96px] leading-[76.8px] absolute [font-family:'Montserrat-Bold',Helvetica] font-bold text-white text-center tracking-[-0.30px] whitespace-nowrap">
                LOGIN
              </div>
              <div className="absolute w-[500px] h-[74px] top-[278px] left-[149px] bg-white rounded-[40px] shadow-[5px_5px_4px_#00000040]">
                <img
                  className="absolute w-[39px] h-[40px] top-[16px] left-[20px]"
                  alt="Mdi user outline"
                  src="mdi-user-outline.svg"
                />
                <div className="absolute w-[279px] top-[20px] left-[94px] [font-family:'Montserrat-Regular',Helvetica] font-normal text-[#cccccc] text-[40px] tracking-[-0.30px] leading-[32.0px] whitespace-nowrap">
                  Username
                </div>
              </div>
              <div className="absolute w-[500px] h-[74px] top-[382px] left-[149px] bg-white rounded-[40px] shadow-[5px_5px_4px_#00000040]">
                <img
                  className="absolute w-[39px] h-[40px] top-[16px] left-[20px]"
                  alt="Mdi password"
                  src="mdi-password.svg"
                />
                <div className="absolute w-[259px] top-[23px] left-[94px] [font-family:'Montserrat-Regular',Helvetica] font-normal text-[#cccccc] text-[40px] tracking-[-0.30px] leading-[32.0px] whitespace-nowrap">
                  Password
                </div>
              </div>
              <div className="absolute w-[400px] h-[59px] top-[574px] left-[199px] bg-[#6779d3] rounded-[40px] shadow-[5px_5px_4px_#00000040]">
                <div className="top-[14px] left-[142px] text-[40px] leading-[32.0px] absolute [font-family:'Montserrat-Bold',Helvetica] font-bold text-white text-center tracking-[-0.30px] whitespace-nowrap">
                  Login
                </div>
              </div>
              <p className="absolute top-[657px] left-[251px] [font-family:'Montserrat-Regular',Helvetica] font-normal text-transparent text-[20px] text-center tracking-[-0.30px] leading-[16.0px] whitespace-nowrap">
                <span className="text-[#bfbfbf]">Dont have account?&nbsp;&nbsp;&nbsp;&nbsp; </span>
                <span className="text-[#5473b5]">Sign up</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login
