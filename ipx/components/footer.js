import Image from 'next/image'
import ipxLogo from '../public/images/ipx-logo.png'

const Footer = () => {

    return (
        <div>

            <footer className="text-white absolute inset-x-0 bottom-0">
                <div className="w-full mt-24 mb-8 border-t pt-8 border-gray-600">
                    <div className="grid grid-rows-none grid-flow-col lg:w-9/12 mx-auto relative">
                        <div className="w-full place-content-center items-center">
                            <div className="grid grid-cols-none gap-4 mt-4">
                                <Image
                                    src={ipxLogo}
                                    alt="IPX Logo"
                                    className="align-middle h-12 w-auto"
                                />
                                <div>© 2022</div>
                            </div>
                        </div>
                        <div className="w-full">
                            <div className="pb-4">
                                <span className="border-b-2 pb-4 text-lg">How We Work</span>
                            </div>
                            <div className="grid grid-cols-none gap-4 mt-4">
                                <a href="#">About Us</a>
                                <a href="#">Terms of Use</a>
                                <a href="#">Privacy Policy</a>
                            </div>
                        </div>
                        <div className="w-full">
                            <div className="pb-4">
                                <span className="border-b-2 pb-4 text-lg">Our Social Media</span>
                            </div>
                            <div className="grid grid-cols-none gap-4 mt-4">
                                <a href="#">Facebook</a>
                                <a href="#">Instagram</a>
                                <a href="#">Twitter</a>
                            </div>
                        </div>
                        <div className="w-full">
                            <div className="pb-4">
                                <span className="border-b-2 pb-4 text-lg">Our Support</span>
                            </div>
                            <div className="grid grid-cols-none gap-4 mt-4">
                                <a href="#">FAQs</a>
                                <a href="#">Knowledge Base</a>
                                <a href="#">Contact Us</a>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>


        </div>

    )

}

export default Footer;