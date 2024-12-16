'use client';
export default function Header(){
    return (           

        <header className="bg-white shadow-md">
            <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                <div className="text-2xl font-bold">Furniro</div>
                <nav className="space-x-4">
                    <a href="/" className="text-gray-700">Home</a>
                    <a href="#" className="text-gray-700">Shop</a>
                    <a href="#" className="text-gray-700">Blog</a>
                    <a href="#" className="text-gray-700">Contact</a>
                </nav>
                <div className="space-x-4">
                    <i className="fas fa-search text-gray-700"></i>
                    <i className="fas fa-user text-gray-700"></i>
                    <i className="fas fa-heart text-gray-700"></i>
                    <i className="fas fa-shopping-cart text-gray-700"></i>
                </div>
            </div>
        </header>
        )
}