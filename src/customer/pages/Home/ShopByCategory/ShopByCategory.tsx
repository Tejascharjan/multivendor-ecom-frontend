import { useAppSelector } from "../../../../State/Store";
import ShopByCategoryCard from "./ShopByCategoryCard";

const ShopByCategory = () => {
     const { customer } = useAppSelector((store) => store);
     return (
          <div className='flex flex-wrap justify-between lg:px-20 gap-7'>
               {customer.homePageData?.shopByCategories.map((item) => (
                    <ShopByCategoryCard item={item} />
               ))}
               ;
          </div>
     );
};

export default ShopByCategory;
