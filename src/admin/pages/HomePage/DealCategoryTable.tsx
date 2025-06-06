import { useAppSelector } from "../../../State/Store";
import HomeCategoryTable from "./HomeCategoryTable";

const DealCategoryTable = () => {
     const { customer } = useAppSelector((store) => store);

     return (
          <div>
               <HomeCategoryTable data={customer.homePageData?.dealCategories || []} />
          </div>
     );
};

export default DealCategoryTable;
