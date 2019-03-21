import React from 'react'

const Footer = () => (
  <div className="w-full footer bg-white h-auto pin-b">
    <div className="container px-4 lg:mx-auto py-12">
      <div className="px-2">
        <div className="flex flex-wrap -mx-2">
          <div className="w-full flex lg:w-1/4 px-2 pb-4 flex items-center justify-center lg:justify-left">
            {/* <Logo /> */}
          </div>
          <div className="w-full flex justify-center flex-col lg:w-1/4 px-2 pb-4">
            <p className="text-gold-dark font-semibold">LIBRARY</p>
            <ul className="list-reset my-5">
              <li className="text-brown mb-3">
                <a
                  href=""
                  className="no-underline text-brown hover:text-white trans-30"
                >
                  Latest &amp; Featured
                </a>
              </li>
              <li className="text-brown mb-3">
                <a
                  href=""
                  className="no-underline text-brown hover:text-white trans-30"
                >
                  Library Index
                </a>
              </li>
            </ul>
          </div>
          <div className="w-full flex justify-center flex-col  lg:w-1/4 px-2 pb-4">
            <p className="text-gold font-semibold">DISCUSS</p>
            <ul className="list-reset my-5">
              <li className="mb-3">
                <a
                  href=""
                  className="no-underline text-brown hover:text-white trans-30"
                >
                  Discussion forums
                </a>
              </li>
              <li className="text-brown mb-3">
                <a
                  href=""
                  className="no-underline text-brown hover:text-white trans-30"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
          <div className="w-full flex justify-center flex-col lg:w-1/4 px-2 pb-4">
            <p className="text-gold font-semibold">EXTRAS</p>
            <ul className="list-reset my-5">
              <li className="mb-3">
                <a
                  href=""
                  className="no-underline text-brown hover:text-white trans-30"
                >
                  FAQ
                </a>
              </li>
              <li className="text-grey-light mb-3">
                <a
                  href=""
                  className="no-underline text-brown hover:text-white trans-30"
                >
                  Testimonials
                </a>
              </li>
              <li className="text-grey-light mb-3">
                <a
                  href=""
                  className="no-underline text-brown hover:text-white trans-30"
                >
                  Terms of Service
                </a>
              </li>
              <li className="text-grey-light mb-3">
                <a
                  href=""
                  className="no-underline text-brown hover:text-white trans-30"
                >
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default Footer
