import Image from "next/image";

export default function Hero() {
  return (
    <section className="text-center max-w-3xl">
      {/* Profile image */}
      <div className="mx-auto mb-6 h-32 w-32 overflow-hidden rounded-full border border-blue-200">
        <Image
          src="/Elibert.png"
          alt="Elibert Hernandez"
          width={128}
          height={128}
          className="object-cover"
          priority
        />
      </div>

      <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900">
        HEY, I&apos;M{" "}
        <span className="uppercase text-blue-600">Elibert</span>
      </h1>

      <p className="mx-auto mt-5 max-w-2xl text-slate-700 leading-relaxed">
        A frontend-focused Web Developer building the Frontend of Websites and Web Applications
        that leads to the success of the overall product.
      </p>
    </section>
  );
}
