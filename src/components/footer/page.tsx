import Link from "next/link";
import React from "react";

function Footer() {
  return (
    <>
      <div className="w-full px-4 md:px-14 pt-6 md:pt-[25px]" id="footer">
        <h1 className="font-poppins font-bold text-2xl text-center mb-6 md:mb-[10px] mt-4 md:mt-[25px] text-color2">
          Contact me
        </h1>

        <footer className="bg-base-200 text-base-content border-t border-base-300 px-4 md:px-10 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <aside className="flex flex-col md:flex-row items-center md:items-start gap-4">
              <Link href="#">
                <img
                  src="/images/logo.jpg"
                  alt="Logo"
                  className="w-16 md:w-[50px] "
                />
              </Link>
              <p className="font-light text-sm text-center md:text-left text-color2">
                Temukan suasana baru untuk ngopi di
                <br />
                Nuju Space
              </p>
            </aside>

            <nav className="w-full md:w-auto">
              <div className="flex justify-center md:justify-end gap-4">
                <Link href="https://api.whatsapp.com/send/?phone=6281368413969&text&type=phone_number&app_absent=0">
                  <img
                    src="/images/footer/apple.png"
                    alt="Whatsapp"
                    className="w-8 md:w-[30px]"
                  />
                </Link>
                <Link href="https://www.instagram.com/nuju__space?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==">
                  <img
                    src="/images/footer/ig.png"
                    alt="Instagram"
                    className="w-8 md:w-[30px]"
                  />
                </Link>
              </div>
            </nav>
          </div>
        </footer>
      </div>
    </>
  );
}

export default Footer;
