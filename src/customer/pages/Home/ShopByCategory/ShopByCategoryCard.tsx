import "./ShopByCategory.css";
import { HomeCategory } from "../../../../types/homeCategoryTypes";

const ShopByCategoryCard = ({ item }: { item: HomeCategory }) => {
     return (
          <div className='flex gap-3 flex-col justify-center items-center group cursor-pointer'>
               <div className='custom-border lg:w-[249px] lg:h-[249px] w-[150px] h-[150px] rounded-full bg-primary-color'>
                    <img
                         className='rounded-full group-hover:scale-95 transition-transform transform-duration-700 object-cover object-top w-full h-full'
                         src={item.image}
                         alt=''
                    />
               </div>

               <h1>{item.name}</h1>
          </div>
     );
};

export default ShopByCategoryCard;
