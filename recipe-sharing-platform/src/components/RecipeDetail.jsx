import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

function RecipeDetail() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    // Fetch the recipe data based on the ID from params (replace with your data source)
    fetch('/path-to-your-data/data.json')
      .then((response) => response.json())
      .then((data) => {
        const selectedRecipe = data.find((r) => r.id === parseInt(id));
        setRecipe(selectedRecipe);
      });
  }, [id]);

  if (!recipe) return <div>Loading...</div>;

  return (
    <div className="container mx-auto p-4">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-6 mb-6">
        <h1 className="text-4xl font-bold mb-4 text-center">{recipe.title}</h1>
        <img
          src={recipe.image}
          alt={recipe.title}
          className="w-full h-80 object-cover rounded-lg mb-6 shadow-md"
        />
        <div className="mb-6">
          <h2 className="text-2xl font-semibold mb-3">Ingredients</h2>
          <ul className="list-disc pl-6 shadow-md bg-gray-50 p-4 rounded-lg">
            {recipe.ingredients.map((ingredient, index) => (
              <li key={index} className="text-gray-700 py-1">{ingredient}</li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-3">Instructions</h2>
          <p className="text-gray-600 shadow-md bg-gray-50 p-4 rounded-lg">{recipe.instructions}</p>
        </div>
      </div>
    </div>
  );
}

export default RecipeDetail;

