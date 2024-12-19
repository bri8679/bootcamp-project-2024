import Image from "next/image";

export default function UmBlog() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold text-center mb-4">Hellweek</h1>
      <Image
        src="/images/um.png"
        alt="Hellweek"
        width={400}
        height={300}
        className="mx-auto mb-4"
      />
      <p className="text-lg text-center mb-8">
        United Movement is a non audition dance club on campus that performs at
        various events throughout the year. They normally practice 9-11 pm on
        Sundays, Tuesdays, and Thursdays. However the week before a performance,
        also known as hellweek, they practice every night from 9 to whenever the
        piece is clean enoguh with the latest cap being 2:30 AM.
      </p>
    </div>
  );
}
