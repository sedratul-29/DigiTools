import BannerPic from "../../assets/products/banner.png"
import Play from "../../assets/products/Play.png"
const Banner_1 = () => {
    return (
        <div className="flex items-center px-[200px] py-[60px] gap-[60px]">
            <div className="">
                <div className="space-y-4 mb-[30px]">
                    <div className="bg-[#E1E7FF]">
                        <button>
                            <a href="" className="font-medium text-base bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent">New: AI-Powered Tools Available</a>
                        </button>
                    </div>

                    <h1 className="opacity-90 font-extrabold text-[70px] text-[#101727] leading-21">Supercharge Your<br />Digital Workflow</h1>

                    <p className="text-[18px] text-[#627382] font-normal opacity-100 leading-8">Access premium AI tools, design assets, templates, and productivity<br />
                        software—all in one place. Start creating faster today.<br />
                        Explore Products<br />
                    </p>
                </div>
                <div className="flex items-center gap-4 ">
                    <button className="bg-linear-to-r from-[#4F39F6] from-0% to-[#9514FA] to-100% px-4 py-[12.5px] rounded-[100px] font-bold text-base px-[16px] py-[15px] text-white">Explore Products</button>

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