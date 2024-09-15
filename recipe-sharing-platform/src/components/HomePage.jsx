import React from 'react';
import { Link } from 'react-router-dom';  // Import Link from react-router-dom

const recipes = [
  {
    id: 1,
    title: 'Spaghetti Bolognese',
    summary: 'A classic Italian pasta dish...',
    image: '/path-to-image/spaghetti.jpg',
  },
  {
    id: 2,
    title: 'Chicken Curry',
    summary: 'A delicious and spicy chicken curry...',
    image: '/path-to-image/curry.jpg',
  },
  // Add more recipes here
];

function HomePage() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-8">Recipe Sharing Platform</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {recipes.map((recipe) => (
          <div key={recipe.id} className="bg-white shadow-md rounded-lg overflow-hidden">
            <img
              src={recipe.image}
              alt={recipe.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-bold mb-2">{recipe.title}</h2>
              <p className="text-gray-600 mb-4">{recipe.summary}</p>
              {/* Wrap the link around the button or the recipe title */}
              <Link to={`/recipe/${recipe.id}`} className="text-blue-500 hover:underline">
                View Recipe
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomePage;

