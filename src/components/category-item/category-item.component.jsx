import "./category-item.styles.scss"

export const CategoryItem = (props) => {
 const {imageUrl,title } = props.category;
 return (
          <div  className="category-container">
          <div
            className="background-image"
            style={{
              backgroundImage: `url(${imageUrl})`,
            }}
          />
          <div className="category-body-container">
            <h2>{title}</h2>
            <p>show now</p>
          </div>
        </div>
 )
}