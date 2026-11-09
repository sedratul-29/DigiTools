import BannerPic from "../../assets/products/banner.png"
import Play from "../../assets/products/Play.png"
const Banner_1 = () => {
    return (
        <div className="flex flex-col  px-4 py-6 lg:flex lg:flex-row lg:items-center lg:px-[200px] lg:py-[60px] lg:gap-[60px]">
            <div className="mb-4 lg:mb-0">
                <div className="mb-3 space-y-2 lg:space-y-4 lg:mb-[30px]">
                    <div className="">
                        <span className="bg-[#E1E7FF] px-4 py-2 rounded-[1000px]">
                            <a href="" className="font-medium text-base bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent">New: AI-Powered Tools Available</a>
                        </span>
                    </div>

                    <h1 className="font-bold text-[35px] opacity-90 text-[#101727] lg:font-extrabold lg:text-[70px] lg:leading-21">Supercharge Your<br />Digital Workflow</h1>

                    <p className="text-base text-[#627382] font-light opacity-100 leading-7 lg:text-[18px] lg:font-normal lg:leading-8">Access premium AI tools, design assets, templates, and productivity<br />
                        software—all in one place. Start creating faster today.<br />
                        Explore Products<br />
                    </p>
                </div>
                <div className="flex items-center gap-4 ">
                    <button className="bg-linear-to-r from-[#4F39F6] to-[#9514FA]  text-white font-normal text-xs px-4 py-4 lg:px-[16px]  rounded-[100px] lg:py-[15px] lg:font-bold lg:text-base ">Explore Products</button>

                    <button className="flex items-center gap-2.5 px-4 py-3.75 border-1 rounded-[100px] border-solid [border-image:linear-gradient(to_right,#4F39F6,#9514FA)_1]"><img src={Play} alt="Play Button" /><span className="bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent font-bold text-base">Watch Demo</span></button>
                </div>
            </div>
            <div>
                <img src={BannerPic} alt="Banner Picture" className="rounded-[8px]" />
            </div>
        </div>
    );
};

export default Banner_1;