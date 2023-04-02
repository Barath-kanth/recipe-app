import styles from './recipe.module.css';
export const Recipe = ({title,calories,image,ingredients}) => {
return(
    <div className={styles.recipe}>
        <h1>{title}</h1>
        <ol>
            {ingredients.map(ingredient =>
                (
                    <li>{ingredient.text}</li>
                )

                )}
        </ol>
        <p>{calories}</p>
        <img className={styles.recipeImage} src={image} alt="" />
    </div>
)
}