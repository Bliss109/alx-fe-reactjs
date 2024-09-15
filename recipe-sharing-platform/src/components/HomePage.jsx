import React, {useState, useEffect} from 'react';

const HomePage = () => {
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
      fetch('/data.json')
        .then((response) => response.json())
        .then((data) => setRecipes(data));
    }, []);
  
    return (
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold mb-8 text-center">Recipe Sharing Platform</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {recipes.map((recipe) => (
            <div key={recipe.id} className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg">
              <img src={recipe.image} alt={recipe.title} className="w-full h-40 object-cover" />
              <div className="p-4">
                <h2 className="text-xl font-bold">{recipe.title}</h2>
                <p className="text-gray-600">{recipe.summary}</p>
                <a href={`/recipes/${recipe.id}`} className="text-blue-500 hover:underline">View Recipe</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    ); 
};

export default HomePage;