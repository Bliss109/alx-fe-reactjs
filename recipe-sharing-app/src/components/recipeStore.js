import create from 'zustand';

const useRecipeStore = create(set => ({
  recipes: [],
  favorites: [],
  
  // Action to add a recipe to favorites
  addFavorite: (recipeId) => set(state => ({ 
    favorites: [...state.favorites, recipeId] 
  })),
  
  // Action to remove a recipe from favorites
  removeFavorite: (recipeId) => set(state => ({
    favorites: state.favorites.filter(id => id !== recipeId)
  })),
  
  // Action to generate recommendations
  recommendations: [],
  generateRecommendations: () => set(state => {
    // Example recommendation logic: Recommend a recipe if it's not already a favorite
    const recommended = state.recipes.filter(recipe =>
      !state.favorites.includes(recipe.id) && Math.random() > 0.5
    );
    return { recommendations: recommended };
  }),
}));

export default useRecipeStore;

