import img1 from '/17escape-penang.webp'
import img2 from '/18entopia.webp'
import img3 from '/20bird-park.webp'
import img4 from '/21tech-dome.webp'
import img5 from '/22wonderfood-museum.webp'
import img6 from '/23little-india.webp'
export default function Gallery(){
    return (
        <div className="flex justify-center data-center min-h-screen">
        <section className="mt-[42px] grid md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-8 justify-data-center mb-10">
          <img className="w-full h-[220px] rounded-[10px]" src={img1}/>
          <img className="w-full h-[220px] rounded-[10px]" src={img2}/>
          <img className="w-full h-[220px] rounded-[10px]" src={img3}/>
          <img className="w-full h-[220px] rounded-[10px]" src={img4}/>
          <img className="w-full h-[220px] rounded-[10px]" src={img5}/>
          <img className="w-full h-[220px] rounded-[10px]" src={img6}/>
        </section>
      </div>
    );
}