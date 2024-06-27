import Image from "next/image";
import { BackgroundBeams } from "@/components/ui/background-beams";

export default function About() {
    return (
        <>
            <div
                className="min-h-screen w-full flex flex-col items-center justify-center gap-16 "
                id="about"
            >

                <h2 className=" text-3xl lg:text-4xl font-bold text-center">
                    About Me
                </h2>

                <div className="flex flex-col md:flex-row gap-16 items-center z-10">
                    <div className="relative inline-flex h-32 w-32 md:h-64  md:w-64 overflow-hidden rounded-full p-[5px] ">
                        <span className="absolute inset-[-1000%] animate-[spin_5s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                        <span className="inline-flex h-full w-full items-center justify-center rounded-full bg-slate-950 px-0 py-0 text-sm text-white backdrop-blur-3xl">
                            <Image
                                src={
                                    "https://avatars.githubusercontent.com/u/43897976?v=4"
                                }
                                width={1024}
                                height={1024}
                                quality={75}
                                loading="lazy"
                                alt="Picture of the author"
                                className="rounded-full self-center justify-center w-full h-full"
                            />
                        </span>
                    </div>
                    <article className="w-96 flex flex-col gap-4 text-lg font-normal">
                        <p>
                            <span className="font-semibold text-xl">Hi! I&#39;m Saaransh Sharma&#44;</span> a software developer and recent
                            graduate in software engineering from Ontario Tech University.{" "}
                        </p>

                        <p>
                            My interests span across web development, mobile development, cloud computing, cybersecurity and information technology.
                            I&#39;m always eager to learn new things and expand my skill set.
                        </p>
                        <p>
                            When
                            I&#39;m not developing, I enjoy working out, gaming, going for drives, and exploring new places.
                        </p>
                    </article>

                </div>
                <BackgroundBeams />
            </div>

        </>
    );
}
