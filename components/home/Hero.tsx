import Image from "next/image";
import { ArrowDown } from "lucide-react";
export default function Hero() {
    return (
        <section className="border-b border-[var(--border)]">
            <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-12 md:px-6 lg:grid-cols-2 lg:py-20">
                {/* Left content */}
                <div>
                    <p className="mb-4 text-xs font-bold uppercase tracking-[0.25em] text-[var(--accent)]">
                        Workout Library
                    </p>

                    <h1 className="font-display max-w-2xl text-5xl font-bold uppercase leading-[0.95] tracking-tight sm:text-6xl lg:text-7xl">
                        Train With Intent.
                        <br />
                        Log Every Set.
                    </h1>

                    <p className="mt-6 max-w-xl text-sm leading-7 text-[var(--muted)] sm:text-base">
                        FitLog is a dark, no-nonsense gym companion: pick a lift, lock
                        it into today&apos;s plan, and watch the week&apos;s work add up.
                    </p>

                    <a
                        href="#library"
                        className="mt-8 inline-flex items-center gap-2 bg-[var(--accent)] px-5 py-3 rounded-xl text-sm font-bold uppercase text-black transition hover:opacity-90"
                    >
                        Browse Workouts
                        <ArrowDown size={17} />
                    </a>
                </div>

                {/* Right image */}
                <div className="w-full">
                    <Image
                        src="/images/banner.png"
                        alt="FitLog workout training"
                        width={800}
                        height={600}
                        priority
                        className="h-auto w-full"
                    />
                </div>
            </div>
        </section>
    );
}