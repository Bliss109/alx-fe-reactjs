import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import data from '../data.json';

function RecipeDetail() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    const recipeDetail = data.find((r) => r.id === parseInt(id));
    setRecipe(recipeDetail);
  }, [id]);

  if (!recipe) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">{recipe.title}</h1>
      <img src={recipe.image} alt={recipe.title} className="w-full h-auto mb-6" />
      <p className="mb-4">{recipe.summary}</p>
      <h2 className="text-xl font-bold">Ingredients</h2>
      <ul className="list-disc list-inside mb-4">
        {recipe.ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
      <h2 className="text-xl font-bold">Instructions</h2>
      <p>{recipe.instructions}</p>
    </div>
  );
}

export default RecipeDetail;
