import img1 from "/17escape-penang.webp";
import img2 from "/18entopia.webp";
import img3 from "/20bird-park.webp";
import img4 from "/21tech-dome.webp";
import img5 from "/22wonderfood-museum.webp";
import img6 from "/23little-india.webp";
export default function Gallery() {
  return (
    <div className="flex justify-center">
      <section
        className="mt-[42px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 
                     gap-x-3 sm:gap-x-6 gap-y-6 md:gap-y-8 lg:gap-y-10
                     mb-10 w-full max-w-7xl px-4 sm:px-8"
      >
        {/* I added a small px-4 padding to the section itself for small screens, 
        but kept your original container padding (px-8) for larger screens if it exists on the parent. */}

        <img
          className="w-full h-[220px] object-cover rounded-[10px]"
          src={img1}
        />
        <img
          className="w-full h-[220px] object-cover rounded-[10px]"
          src={img2}
        />
        <img
          className="w-full h-[220px] object-cover rounded-[10px]"
          src={img3}
        />
        <img
          className="w-full h-[220px] object-cover rounded-[10px]"
          src={img4}
        />
        <img
          className="w-full h-[220px] object-cover rounded-[10px]"
          src={img5}
        />
        <img
          className="w-full h-[220px] object-cover rounded-[10px]"
          src={img6}
        />
      </section>
    </div>
  );
}
