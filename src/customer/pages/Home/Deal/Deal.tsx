import DealCart from "./DealCart";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useAppSelector } from "../../../../State/Store";
// import Slider from "react-slick";

const Deal = () => {
     const { customer } = useAppSelector((store) => store);
     const settings = {
          dots: true,
          infinite: true,
          speed: 500,
          slidesToShow: 3,
          slidesToScroll: 3,
     };

     return (
          <div className='py-5 lg:px-20'>
               <div className='flex items-center justify-between'>
                    {customer.homePageData?.deals.slice(0, 6).map((item) => (
                         <DealCart item={item} />
                    ))}
               </div>
          </div>
     );
};

export default Deal;
