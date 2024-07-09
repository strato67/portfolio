import Link from "next/link";
import { socials } from "./properties";

export default function Contact() {
    return (
        <>
            <div
                className="min-h-fit w-full flex flex-col items-center justify-center gap-8 border-transparent  px-2 bg-violet-900 pb-6 pt-12"
                id="contact"
            >
        <div
          className=" text-4xl font-bold   text-center lg:text-start"

        >
          Contact
          <div className="font-normal text-base  text-violet-300 mt-1">
            <p>Have any questions or inquiries? Let&#39;s connect!</p>
          </div>
        </div>


                <div className="flex gap-4">
                    {Object.keys(socials).map((social, index) => {
                        const IconComponent = socials[social].icon;

                        return (
                            <Link
                                href={socials[social].url}
                                key={index}
                                target="_blank"
                                className="hover:scale-105 inline-flex h-16 w-16 animate-shimmer items-center justify-center rounded-full border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
                            >
                                <IconComponent className="scale-150" />
                            </Link>
                        );
                    })}
                </div>


                <div className="mb-auto ">
                    <p>Copyright © Saaransh Sharma</p>
                </div>
            </div>
        </>
    );
}
