import DigiTool from "../../assets/products/DigiTools.png"
import ShoppingCart from "../../assets/products/shopping-cart.png"
const Header = () => {
    return (
        <div className="lg:flex items-center px-[200px] py-[26px]">
            <div className="lg:mr-[179.5px]">
                <img src={DigiTool} alt="DigiTool Logo" />
            </div>
            <div className="lg:mr-[179.5px]">
                <nav className="lg:flex items-center gap-8 list-none">
                    <li><a href="" className="lg:font-semibold text-base text-[#101727] opacity-90% leading-[120%]">Products</a></li>
                    <li><a href="" className="lg:font-semibold text-base text-[#101727] opacity-90% leading-[120%]">Features</a></li>
                    <li><a href="" className="lg:font-semibold text-base text-[#101727] opacity-90% leading-[120%]">Pricing</a></li>
                    <li><a href="" className="lg:font-semibold text-base text-[#101727] opacity-90% leading-[120%]">Testimonials</a></li>
                    <li><a href="" className="lg:font-semibold text-base text-[#101727] opacity-90% leading-[120%]">FAQ</a></li>
                </nav>
            </div>
            <div className="lg:flex items-center gap-4">
                <img src={ShoppingCart} alt="" />
                <a href="" className="lg:font-semibold text-base text-[#101727] opacity-90% leading-[120%]">Login</a>
                <button className="lg:btn rounded-[10000px] font-semibold text-base text-white bg-linear-to-r from-[#4F39F6] from-0% to-[#9514FA] to-100% px-4 py-[12.5px]">Get Started</button>
            </div>
        </div>
    );
};

export default Header;