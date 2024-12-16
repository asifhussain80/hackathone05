'use client';
export default function Footer()
{
    return (
        <footer className="bg-white py-8">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
                <h3 className="text-xl font-bold">Furniro.</h3>
                <p className="mt-4">400 University Drive Suite 200 Coral Gables, FL 33134 USA</p>
            </div>
            <div>
                <h3 className="text-xl font-bold">Links</h3>
                <ul className="mt-4 space-y-2">
                    <li><a href="./" className="text-gray-600">Home</a></li>
                    <li><a href="#" className="text-gray-600">Shop</a></li>
                    <li><a href="/about" className="text-gray-600">About</a></li>
                    <li><a href="#" className="text-gray-600">Contact</a></li>
                </ul>
            </div>
            <div>
                <h3 className="text-xl font-bold">Help</h3>
                <ul className="mt-4 space-y-2">
                    <li><a href="#" className="text-gray-600">Payment Options</a></li>
                    <li><a href="#" className="text-gray-600">Returns</a></li>
                    <li><a href="#" className="text-gray-600">Privacy Policies</a></li>
                </ul>
            </div>
            <div>
                <h3 className="text-xl font-bold">Newsletter</h3>
                <div className="mt-4">
                    <input type="email" placeholder="Enter Your Email Address" className="border border-gray-300 p-2 w-full" />
                    <button className="mt-2 bg-yellow-600 text-white px-4 py-2 w-full">SUBSCRIBE</button>
                </div>
            </div>
        </div>
        <div className="text-center mt-8 text-gray-600">
            2023 Furniro. All rights reserved
        </div>
    </footer>

    )
}