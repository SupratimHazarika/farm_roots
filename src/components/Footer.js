import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-gray-50 py-8 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
        <div>
          <h5 className="text-lg font-semibold text-green-900 mb-4">ABOUT US</h5>
          <ul className="space-y-2">
            <li><a href="#" className="text-gray-700 hover:underline">Our Story</a></li>
            <li><a href="#" className="text-gray-700 hover:underline">Careers</a></li>
            <li><a href="#" className="text-gray-700 hover:underline">Contact Us</a></li>
            <li><a href="#" className="text-gray-700 hover:underline">Locate Stores</a></li>
            <li><a href="#" className="text-gray-700 hover:underline">Own Grown</a></li>
            <li><a href="#" className="text-gray-700 hover:underline">Garden Services & Maintenance</a></li>
          </ul>
        </div>

        <div>
          <h5 className="text-lg font-semibold text-green-900 mb-4">CUSTOMER CARE</h5>
          <ul className="space-y-2">
            <li><a href="#" className="text-gray-700 hover:underline">Take The Plant Quiz</a></li>
            <li><a href="#" className="text-gray-700 hover:underline">Track Order</a></li>
            <li><a href="#" className="text-gray-700 hover:underline">Shipping Policy</a></li>
            <li><a href="#" className="text-gray-700 hover:underline">Terms and Conditions</a></li>
            <li><a href="#" className="text-gray-700 hover:underline">Privacy Policy</a></li>
            <li><a href="#" className="text-gray-700 hover:underline">FAQs</a></li>
            <li><a href="#" className="text-gray-700 hover:underline">Terms of Service</a></li>
            <li><a href="#" className="text-gray-700 hover:underline">Refund Policy</a></li>
          </ul>
        </div>

        <div>
          <h5 className="text-lg font-semibold text-green-900 mb-4">OFFERS & REWARDS</h5>
          <ul className="space-y-2">
            <li><a href="#" className="text-gray-700 hover:underline">Plant Parent Rewards Club</a></li>
            <li><a href="#" className="text-gray-700 hover:underline">Ugaoo Coupons</a></li>
          </ul>
        </div>

        <div>
          <h5 className="text-lg font-semibold text-green-900 mb-4">GET IN TOUCH</h5>
          <p className="text-gray-700">
            Call: <a href="tel:+918087087224" className="hover:underline">+91-8087087224</a>
          </p>
          <p className="text-gray-700">
            Email: <a href="mailto:support@ugaoo.com" className="hover:underline">support@ugaoo.com</a>
          </p>
        </div>

        <div>
          <h5 className="text-lg font-semibold text-green-900 mb-4">SIGN UP FOR OUR NEWSLETTER</h5>
          <p className="text-gray-700 mb-4">
            For plant care tips, our featured plant of the week, exclusive offers, and discounts.
          </p>
          <form className="flex">
            <input type="email" placeholder="Enter email address" className="border rounded-l px-4 py-2 w-full" />
            <button type="submit" className="bg-green-900 text-white px-4 py-2 rounded-r">→</button>
          </form>
          <div className="flex space-x-4 mt-4">
            <a href="#" className="text-gray-700 hover:text-green-900"><i className="fab fa-facebook"></i></a>
            <a href="#" className="text-gray-700 hover:text-green-900"><i className="fab fa-x"></i></a>
            <a href="#" className="text-gray-700 hover:text-green-900"><i className="fab fa-instagram"></i></a>
            <a href="#" className="text-gray-700 hover:text-green-900"><i className="fab fa-linkedin"></i></a>
            <a href="#" className="text-gray-700 hover:text-green-900"><i className="fab fa-youtube"></i></a>
          </div>
        </div>
      </div>
      <div className="text-center mt-8 text-gray-600">
        <a href="#" className="hover:underline">SITEMAP</a>
      </div>
    </footer>
  )
}

export default Footer