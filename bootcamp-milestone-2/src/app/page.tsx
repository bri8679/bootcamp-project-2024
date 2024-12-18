import Image from "next/image";

export default function Home() {
  return (
    <div>
      <h1 className="page-title text-3xl text-center">About Me</h1>
      <div className="about">
        <div className="about-image flex justify-center">
          <Image
            src="/images/bri.JPG"
            alt="Briana Kirkman"
            width="300"
            height="200"
          />
        </div>
        <div className="about-text font-serif text-center flex justify-center pt-8">
          <div className="max-w-lg">
            <p>
              My name is Briana Kirkman and I am a
              <strong> 3rd year computer Science</strong> student at Cal Poly
              Slo. I have participated in a few hackathons and love to learn
              about programming. In addition to programming, I am also really
              involved in the performing arts.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
