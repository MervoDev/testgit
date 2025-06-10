export default function Hero() {
  return (
    <div className="w-full min-h-screen bg-gray-800 bg-gradient-to-b from-gray-800 to-gray-900 flex flex-col items-center justify-center text-center pt-20 px-4 rounded-3xl">
      <h2 className="text-4xl font-bold text-white mb-4">Qui sommes-nous ?</h2>
      <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-8">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
         Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </p>
      <a
        href="#services"
        className="inline-block bg-white text-gray-800 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition duration-300"
      >
        Découvrir nos services
      </a>
    </div>
  );
}
