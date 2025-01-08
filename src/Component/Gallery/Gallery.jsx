import img1 from '../../../public/17escape-penang.webp'
import img2 from '../../../public/18entopia.webp'
import img3 from '../../../public/20bird-park.webp'
import img4 from '../../../public/21tech-dome.webp'
import img5 from '../../../public/22wonderfood-museum.webp'
import img6 from '../../../public/23little-india.webp'
export default function Gallery(){
    return (
        <div className="flex justify-center data-center min-h-screen">
        <section className="mt-[128px] grid md:grid-cols-2 lg:grid-cols-3 gap-x-3 gap-y-4 justify-data-center mb-10">
          <img class="w-full h-[220px] rounded-[10px]" src={img1}/>
          <img class="w-full h-[220px] rounded-[10px]" src={img2}/>
          <img class="w-full h-[220px] rounded-[10px]" src={img3}/>
          <img class="w-full h-[220px] rounded-[10px]" src={img4}/>
          <img class="w-full h-[220px] rounded-[10px]" src={img5}/>
          <img class="w-full h-[220px] rounded-[10px]" src={img6}/>
        </section>
      </div>
    );
}