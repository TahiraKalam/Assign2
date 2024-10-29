import Nav from "./components/nav";
export default function Home() {
  return (
   
    <div className="bg-[#252B42] w-[1440px] h-[1132px] top-[-590] left-[-720]">
       <Nav />
      <div className="container top-[104px] left-[197px] w-[1800px] h-[1028px] pb-[80px] pt-[80px] gap-20 grid justify-items-center">
        <div className="row w-[701px] h-[496px] flex flex-row justify-evenly">
          <div className="main w-[699px] h-[496px] pt-40px pb-40px gap-40px">
            <h5 className="w-[77px] h-[24px] font-montserrat font-[700] text-[16px] leading-[24px] tracking-tight text-[#23A6F0] pl-[250px] ml-[80px]">
              Welcome
            </h5>
            <h1 className="w-[542px] h-[160px] font-montserrat font-[700] text-[58px] leading-[80px] tracking-tight text-center text-[#FFFFFF] ml-[80px]">
              Selling on the internet like a pro
            </h1>
            <h4 className="w-[536px] h-[60px] mt-10 font-montserrat font-[400] text-[20px] leading-[30px] tracking-tight ml-[80px] text-center text-[#FFFFFF]">
              We know how large objects will act, but things on a small scale
              just do not act that way.
            </h4>
            <div className="cta w-[365px] h-[52px] gap-10 flex justify-evenly pl-[90px] mt-10 ml-[80px]">
              <div className="button Md w-[193px] h-[52px] rounded-[5px] pr-[40px] pt-[15px] pr-[40px] pl-[40px] pb-[15px] gap-[10px] bg-[#23A6F0]">
                <button className="w-[113px] h-[22px] font-montserrat font-[700] text-[14px] leading-[22px] tracking-tight text-center text-[#FFFFFF]">
                  Get Quote Now
                </button>
              </div>
              <div className="button Md w-[162px] h-[52px] rounded-[5px] pt-15px pr-40px pb-15px pl-40px gap-10 border-1 border-solid text-[#23A6F0] ring-1 ring-inset p-[15px] gap-[10px] flex justify-center ">
              <button className="w-[200px] h-[22px] font-montserrat font-[700] text-[14px] leading-[22px] tracking-tight text-center text-[#23A6F0]">
                    Learn More
                  </button>
              </div>
            </div>
            <div>
        <div className="w-[815px] flex gap-5 justify-evenly mt-28 pr-[45px]">
          <div className="w=[328] h-[292] bg-[#FFFFFF] gap-5 pr-[20px]">
            <div className="w-[70] h-[76] bg-[#FFDCD1] rounded-[10px] mt-5 ml-5"></div>
            <h3 className="font-montserrate font-[700] pt-5 pl-5 text-[#252B42] ">
              training Courses
            </h3>
            <div className="h-[2] w-[50] bg-[#E74040] mt-5 ml-5"></div>
            <p className="text-[#737373] font-montserrate mt-5 ml-5 ">
              The gradual accumulation of information about atomic and
              small-scale behaviour...
            </p>
          </div>

          <div className="w=[328] h-[292] bg-[#FFFFFF] gap-5">
            <div className="w-[70] h-[76] bg-[#B9EAA8] rounded-[10px] mt-5 ml-5"></div>
            <h3 className="font-montserrate font-[700] pt-5 pl-5 text-[#252B42]">
              training Courses
            </h3>
            <div className="h-[2] w-[50] bg-[#E74040] mt-5 ml-5 "></div>
            <p className="text-[#737373] font-montserrate mt-5 ml-5 ">
              The gradual accumulation of information about atomic and
              small-scale behaviour...
            </p>
          </div>

          <div className="w=[328] h-[292] bg-[#23A6F0] gap-5">
            <div className="w-[70] h-[76] bg-[#FFFFFF] rounded-[10px] mt-5 ml-5"></div>
            <h3 className="font-montserrate font-[700] pt-5 pl-5 text-[#FFFFFF]">
              training Courses
            </h3>
            <div className="h-[2] w-[50] bg-[#E74040] mt-5 ml-5"></div>
            <p className="text-[#FFFFFF] font-montserrate mt-5 ml-5 ">
              The gradual accumulation of information about atomic and
              small-scale behaviour...
            </p>
          </div>
        </div>
      </div>
          </div>
        </div>
      </div>
      <div className="md:max-w-[1046px] md:h-[292px] md:gap-30"></div>


      
    </div>
  );
}
