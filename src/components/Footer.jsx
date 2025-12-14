import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-gradient-to-b from-[#0b0f1a] to-[#0f172a] text-gray-400">
      <div className="max-w-7xl mx-auto px-6 py-16">

        {/* Top Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12">

          {/* Brand */}
          <div>
            <img
              src="https://saasinfosolutions.com/wp-content/uploads/2020/11/saaslogonew-2.jpg"
              alt="SaaS Info Solutions"
              className="h-9 mb-4"
            />
            <p className="text-sm leading-relaxed">
              Empowering businesses with scalable, secure, and reliable
              digital solutions designed for long-term success.
            </p>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="hover:text-white transition">Home</Link></li>
              <li><Link to="/about" className="hover:text-white transition">About Us</Link></li>
              <li><Link to="/featured-products" className="hover:text-white transition">Featured Products</Link></li>
              <li><Link to="/contact" className="hover:text-white transition">Contact Us</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-sm">
              <li>Employee Productivity Monitoring</li>
              <li>SaaS Solutions</li>
              <li>Asset Management</li>
              <li>Asset Management</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-sm">
              <li>Email: info@saasinfosolutions.com</li>
              <li>Phone: +91-XXXXXXXXXX</li>
              <li>India</li>
            </ul>
          </div>

        </div>

        {/* Divider */}
        <div className="border-t border-white/10 mt-12 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm">

          <p>
            © {new Date().getFullYear()} SaaS Info Solutions. All rights reserved.
          </p>

          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition">Privacy Policy</a>
            <a href="#" className="hover:text-white transition">Terms</a>
          </div>

        </div>
      </div>
    </footer>
  );
}

export default Footer;

