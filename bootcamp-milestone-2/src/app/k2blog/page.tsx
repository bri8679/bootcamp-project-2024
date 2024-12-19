import Image from "next/image";

export default function K2Blog() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold text-center mb-4">Hellweek</h1>
      <Image
        src="/images/k2.jpg"
        alt="Hellweek"
        width={400}
        height={300}
        className="mx-auto mb-4"
      />
      <p className="text-lg text-center mb-8">
        K2 is a non audition kpop dance club on campus that performs at various
        events throughout the year. They normally practice 7-9 4 days a week.
        However the week before a performance, also known as hellweek, they
        practice every night from 6-9 in order to make sure the piece is clean.
      </p>
    </div>
  );
}
