import Image from 'next/image'
import ipxLogo from '../public/images/ipx-logo.png'

const Cookie = () => {

    function showcookie() {
        document.getElementById("cookieDiv").classList.add("slide-in-bottom");
        document.getElementById("cookieDiv").classList.remove("slide-out-bottom");

        // document.getElementById("main").classList.add("opacity-50");
        // document.getElementById("main").classList.remove("opacity-100");
    }
    function hidecookie() {
        document.getElementById("cookieDiv").classList.add("slide-out-bottom");
        document.getElementById("cookieDiv").classList.remove("slide-in-bottom");

        // document.getElementById("main").classList.add("opacity-100");
        // document.getElementById("main").classList.remove("opacity-50");
    }
    

    return (

        <div>

            <div
                id="cookieDiv"
                className="z-20 py-4 fixed bottom-0 flex flex-col max-w-full bg-gray-600 visible bg-clip-padding shadow-sm outline-none 
    transition duration-300 ease-in-out text-gray-200 left-0 right-0 border-none max-h-full show"
            >
                <div className="p-4 small grid grid-flow-row sm:grid-flow-col">
                    <div className="w-full">
                        By clicking “Allow All”, you agree to the storing of cookies on your
                        device to enhance site navigation, analyze site usage, and assist in our
                        marketing efforts. Cookie Notice
                    </div>
                    <br/> 
                    <div className="w-full max-sm:flex">
                        <a className="mx-4 md:mx-4 underline md:px-4 py-2 font-medium text-sm">
                            Customize Settings
                        </a>
                        <a
                            className="mx-4 md:mx-4 px-4 py-2 font-medium text-sm cursor-pointer text-center"
                            onClick={hidecookie}
                            style={{
                                background:
                                    "radial-gradient(86.07% 145.35% at 28.05% 86.07%,#3e67ff 0%,#e47298 100%)"
                            }}
                        >
                            Accept All
                        </a>
                        <a
                            className="mx-4 md:mx-4 px-4 py-2 font-medium text-sm bg-[#6A6A6A] cursor-pointer text-center"
                            onClick={hidecookie}
                        >
                            Disable All
                        </a>
                    </div>
                </div>
            </div>

            <button
                onClick={showcookie}
                className="z-10 fixed bottom-0  inline-block px-6 py-2.5 btn-primary text-white font-medium text-xs leading-tight uppercase hover:shadow-lg"
                style={{
                    background:
                        "radial-gradient(86.07% 145.35% at 28.05% 86.07%,#3e67ff 0%,#e47298 100%)"
                }}
            >
                Show Cookie Policy
            </button>



        </div>

    )


}

export default Cookie



