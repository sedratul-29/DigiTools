import DigiTool_1 from "../../assets/products/DigiTools (1).png";
import "./Footer.css"
const Footer = () => {
    return (
        <div className="py-15 px-15 lg:px-[200px] lg:pt-[120px] bg-[#101727]">
            <div className="grid grid-cols-2 lg:grid-cols-4 items-center space-x-12 lg:border-1 border-white">
                <div className="mb-15">
                    <img src={DigiTool_1} alt="" className="mb-4" />
                    <p className="text-white text-xs font-light lg:font-normal lg:text-base opacity-80 leading-6">Premium digital tools for creators,<br />professionals, and businesses. Work smarter<br />with our suite of powerful tools.</p>
                </div>
                <div>
                    <ul className="text-white space-y-4">
                        <li className="font-medium text-xl leading-7">Product</li>
                        <li className="reusable_css_in_Footer">Features</li>
                        <li className="reusable_css_in_Footer">Pricing</li>
                        <li className="reusable_css_in_Footer">Templates</li>
                        <li className="reusable_css_in_Footer">Integrations</li>
                    </ul>
                </div>
                <div>
                    <ul className="text-white space-y-4">
                        <li className="font-medium text-xl leading-7">Company</li>
                        <li className="reusable_css_in_Footer">About</li>
                        <li className="reusable_css_in_Footer">Blog</li>
                        <li className="reusable_css_in_Footer">Careers</li>
                        <li className="reusable_css_in_Footer">Press</li>
                    </ul>
                </div>
                <div>
                    <ul className="text-white space-y-4">
                        <li className="font-medium text-xl leading-7 ">Resources</li>
                        <li className="reusable_css_in_Footer">Documentation</li>
                        <li className="reusable_css_in_Footer">Help Center</li>
                        <li className="reusable_css_in_Footer">Community</li>
                        <li className="reusable_css_in_Footer">Contact</li>
                    </ul>
                </div>
                <div>
                    <p>Social Links</p>
                    <div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;