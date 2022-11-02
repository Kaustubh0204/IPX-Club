import Image from 'next/image'
import ipxLogo from '../public/images/ipx-logo.png'

const Navbar = () => {

    return (
        <div>

            <nav className="sticky bg-black md:px-8 py-6 text-white flex items-center justify-between">
                <a className="md:mx-8 mx-5 cursor-pointer">
                    <Image
                        src={ipxLogo}
                        alt="IPX Logo"
                        className="h-12 w-auto"
                    />
                </a>
                <div className="flex items-center justify-between text:sm md:text-base">
                    <a
                        className="mx-2 md:mx-4 md:px-6 px-2 py-2"
                        style={{
                            background:
                                "radial-gradient(86.07% 145.35% at 28.05% 86.07%,#3e67ff 0%,#e47298 100%)"
                        }}
                    >
                        Get Early Access
                    </a>
                </div>
            </nav>

        </div>

    )

}

export default Navbar;