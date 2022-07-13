import React from "react";
import { categories } from "../data";
import CategoryItems from "./CategoryItems";

/**const Container = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-between;
  ${mobile({ padding: "0px", flexDirection:"column" })}
`;
**/
const Categories = () => {
  return (
    <div >
    
    <div className="bg-black h-[400px] font-serif flex p-5 justify-between ">
      {categories.map((item) => (
        <CategoryItems item={item} key={item.id} />
      ))}
    </div>
    </div>
  );
};

export default Categories;