import React from "react";

export const carditem = () => {
  return (
    <div className="w-[331px] h-[460px]">
      <div className="fixed w-[331px] h-[460px] top-0 left-0">
        <div className="w-[337px] h-[460px]">
          <div className="relative w-[331px] h-[460px] bg-white rounded-[17.71px] shadow-[1px_2px_4px_2px_#00000040]">
            <img
              className="absolute w-[293px] h-[172px] top-[17px] left-[19px]"
              alt="Rectangle"
            //   tempat naruh konten gambar di src ini
              src="rectangle-1.png" 
            //   tempat naruh konten gambar di src ini

            />
            <div className="absolute top-[213px] left-[18px] [font-family:'Montserrat-Regular',Helvetica] font-normal text-black text-[20px] tracking-[0] leading-[normal] whitespace-nowrap">
              Arung Sungai
            </div>
            <p className="absolute w-[322px] top-[255px] left-[9px] [font-family:'Montserrat-Regular',Helvetica] font-normal text-black text-[13px] tracking-[0] leading-[normal]">
              Wisata blablabla
              <br />
              Wisata ini tersedia setiap hari
              <br />
              Wisata blablabla
            </p>
            <div className="absolute w-[120px] h-[40px] top-[370px] left-[19px] bg-[#31737c] rounded-[8px] shadow-[1px_2px_4px_2px_#00000040]">
              <div className="absolute top-[9px] left-[36px] [font-family:'Montserrat-Medium',Helvetica] font-medium text-white text-[18px] tracking-[0] leading-[normal]">
                More
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
