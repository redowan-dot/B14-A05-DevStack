function Footer() {
  return (
    <footer className="bg-gray-700 text-gray-300 mt-16">
      <div className="max-w-7xl mx-auto px-4 py-12 grid sm:grid-cols-2 md:grid-cols-4 gap-8">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <img className="h-8 w-auto object-contain" src="/assets/logo-text.png" alt="DevStack Logo" />
          </div>
          <p className="text-sm mb-4">
            Explore technologies and build your own custom development
            stack.
          </p>
          <div className="flex gap-4 text-sm">
            <a href="#" className="hover:text-white">GitHub</a>
            <a href="#" className="hover:text-white">Twitter</a>
            <a href="#" className="hover:text-white">LinkedIn</a>
          </div>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-3">Product</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-white">Technologies</a></li>
            <li><a href="#" className="hover:text-white">Projects</a></li>
            <li><a href="#" className="hover:text-white">Pricing</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-3">Company</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-white">About</a></li>
            <li><a href="#" className="hover:text-white">Contact</a></li>
            <li><a href="#" className="hover:text-white">Careers</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-3">Legal</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-white">Privacy</a></li>
            <li><a href="#" className="hover:text-white">Terms</a></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-800 text-center py-4 text-sm">
        © 2026 Dev Stack. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
