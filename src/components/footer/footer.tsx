import { MdOutlineLanguage } from "react-icons/md";

const Footer = () => {
    return(
        <div className="w-[90%] flex flex-col justify-center items-center">
            <div className="w-full h-[1px] bg-gray-600 flex justify-center items-center mb-14">
                <div className="bg-[#F3F4F6] text-[#60696C] px-2 text-sm">Resumes recruiters love</div>
            </div>

            <div className="w-full flex md:flex-col lg:flex-row gap-y-4 items-center justify-evenly text-[#384347] text-sm">
                <div className="">
                    <span>Enhancv.All Rights Reserved.</span>
                </div>

                <div>
                    <ul className="flex items-center gap-x-8">
                        <li className="">Resume Examples</li>
                        <li className="flex items-center gap-x-2"><span>.</span> <span>Upgrade</span></li>
                        <li className="flex items-center gap-x-2"><span>.</span> <span>Terms</span></li>
                        <li className="flex items-center gap-x-2"><span>.</span> <span>Privacy</span></li>
                        <li className="flex items-center gap-x-2"><span>.</span> <span>Blog</span></li>
                        <li className="flex items-center gap-x-2"><span>.</span> <span>help@enhancv</span></li>
                        <li className="flex items-center gap-x-2"><span>.</span> <span>Log Out</span></li>
                    </ul>
                </div>

                <div className="flex items-center text-[#384347] text-sm">
                    <span className="">Language</span>
                    <div className=""><MdOutlineLanguage /></div>
                </div>
            </div>

            <div className="text-[#60696C] text-xs mt-3 mx-auto">This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply.</div>
        </div>
    )
}

export default Footer;