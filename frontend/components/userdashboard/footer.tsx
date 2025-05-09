export function Footer() {
    return (
        <footer className="w-full bg-black text-white py-5 px-3">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">

                <div>
                    <h2 className="text-2xl font-bold mb-4">Servigo</h2>
                    <p className="text-sm">Providing reliable home services since 2024.</p>
                </div>

                {/* Quick Links */}
                <div>
                    <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
                    <ul className="space-y-2 text-sm">
                        <li><a href="#" className="hover:underline">Home</a></li>
                        <li><a href="#" className="hover:underline">Services</a></li>
                        <li><a href="#" className="hover:underline">Contact</a></li>
                        <li><a href="#" className="hover:underline">About Us</a></li>
                    </ul>
                </div>

                {/* Contact & Social */}
                <div>
                    <h3 className="text-xl font-semibold mb-4">Contact</h3>
                    <p className="text-sm mb-2">Email: support@servigo.com</p>
                    <p className="text-sm mb-4">Phone: +91 12345 67890</p>
                    <div className="flex space-x-4">
                        <a href="#" className="hover:text-gray-400">Facebook</a>
                        <a href="#" className="hover:text-gray-400">Twitter</a>
                        <a href="#" className="hover:text-gray-400">Instagram</a>
                    </div>
                </div>
            </div>
            <div className="text-center text-xs mt-10 text-gray-500">
                © {new Date().getFullYear()} servigo. All rights reserved.
            </div>
        </footer>
    );
}
