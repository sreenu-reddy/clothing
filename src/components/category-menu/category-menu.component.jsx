import { CategoryItem } from "../category-item/category-item.component";
import "./category-menu.styles.scss"

export const CategoryMenu =(props) => {
 const categories = props.categories;
 return (
      <div className="categories-container">
      {categories.map((category) => (
        <CategoryItem key={category.id} category={category} />
      ))}
    </div>
 )
}