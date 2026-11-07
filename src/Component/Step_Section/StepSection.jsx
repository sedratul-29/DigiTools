import pic1 from "../../assets/products/User.png"
import pic2 from "../../assets/products/Package.png"
import pic3 from "../../assets/products/Rocket.png"
const StepSection = () => {
    return (
        <div className="px-[200px] py-[120px] bg-[#F1F1F1]">
            <div className="text-center mb-10">
                <h1 className="font-extrabold text-5xl text-[#101727] mb-4">Get Started in 3 Steps</h1>
                <p className="font-normal text-base text-[#627382] leading-5">Start using premium digital tools in minutes, not hours.</p>
            </div>
            <div className="flex items-center gap-7.5">
                <div className="card bg-base-100 w-96 shadow-sm rounded-2xl">
                    <div className="flex justify-end items-center pr-5 pt-5">
                        <span className="font-bold text-[14px] text-white  bg-linear-to-r from-[#4F39F6] to-[#9514FA] w-10 h-10 rounded-[1000px] px-[12px] py-[10.5px] ">01</span>
                    </div>
                    <figure className="px-10 pt-10">
                        <img
                            src={pic2}
                            alt="Package"
                            className="rounded-xl "
                        />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title font-bold text-2xl text-[#101727] mb-2">Create Account</h2>
                        <p className="font-normal text-base text-[#627382] leading-5 mb-[60px]">Sign up for free in seconds. No credit card<br />required to get started.</p>
                    </div>
                </div>
                <div className="card bg-base-100 w-96 shadow-sm rounded-2xl">
                    <div className="flex justify-end items-center pr-5 pt-5">
                        <span className="font-bold text-[14px] text-white  bg-linear-to-r from-[#4F39F6] to-[#9514FA] w-10 h-10 rounded-[1000px] px-[12px] py-[10.5px] ">02</span>
                    </div>
                    <figure className="px-10 pt-10">
                        <img
                            src={pic2}
                            alt="Package"
                            className="rounded-xl"
                        />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title font-bold text-2xl text-[#101727] mb-2">Choose Products</h2>
                        <p className="font-normal text-base text-[#627382] leading-5 mb-[60px]">Browse our catalog and select the tools<br />that fit your needs.</p>
                    </div>
                </div>
                <div className="card bg-base-100 w-96 shadow-sm rounded-2xl">
                    <div className="flex justify-end items-center pr-5 pt-5">
                        <span className="font-bold text-[14px] text-white  bg-linear-to-r from-[#4F39F6] to-[#9514FA] w-10 h-10 rounded-[1000px] px-[12px] py-[10.5px] ">03</span>
                    </div>
                    <figure className="px-10 pt-10">
                        <img
                            src={pic3}
                            alt="Rocket"
                            className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title font-bold text-2xl text-[#101727] mb-2">Start Creating</h2>
                        <p className="font-normal text-base text-[#627382] leading-5 mb-[60px]">Download and start using your premium<br />tools immediately.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StepSection;