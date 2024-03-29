import ProfilePic from "../assets/profile.jpeg";

export default function Header() {
  return (
    <header className="flex flex-col sm:flex-row justify-center items-center mt-8 mb-8 md:mb-16">
      <img
        className="mr-8 mb-8 w-44 h-60 object-contain rounded-full"
        src={ProfilePic}
        alt="Andres profile picture"
      />
      <div className="flex flex-col">
        <p className="text-white text-md md:text-md lg:text-lg">
          Hi there, this is
        </p>
        <h1 className="text-white text-lg md:text-2xl lg:text-3xl">
          Andres Hugueth
        </h1>
      </div>
    </header>
  );
}
