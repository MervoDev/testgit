import Image from 'next/image';
import Nav1 from './Navbar';
export default function ServicesPage() {
  return (
    <main className="flex flex-col items-center justify-center py-10 px-4 text-center mt-24 text-center">
      <h1 className="text-4xl font-bold mb-4">Nos services</h1>
      <p className="text-lg mb-8 max-w-xl">
        Découvrez nos différents services pensés pour répondre à vos besoins avec efficacité et qualité.
      </p>

      <div className="flex flex-wrap justify-center gap-8">
        <div className="w-60">
          <Image
            src="/images/img1.jpg"
            width={400}
            height={2000}
            alt="Service 1"
            className="rounded-md shadow-md"
          />
          <p className="mt-2 text-sm">Service rapide et efficace</p>
        </div>
        <div className="w-60">
          <Image
            src="/images/img2.jpg"
            width={240}
            height={160}
            alt="Service 2"
            className="rounded-md shadow-md"
          />
          <p className="mt-2 text-sm">Qualité assurée</p>
        </div>
        <div className="w-60">
          <Image
            src="/images/img1.jpg"
            width={240}
            height={160}
            alt="Service 3"
            className="rounded-md shadow-md"
          />
          <p className="mt-2 text-sm">Satisfaction garantie</p>
        </div>
        <Nav1/>
      </div>
    </main>
  );
}
