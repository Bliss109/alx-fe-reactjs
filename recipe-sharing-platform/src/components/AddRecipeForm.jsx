import React, { useState } from 'react';

const AddRecipeForm = () => {
  const [formValues, setFormValues] = useState({
    title: '',
    ingredients: '',
    steps: '',
  });

  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  // Validation function
  const validate = () => {
    let formErrors = {};
    if (!formValues.title) {
      formErrors.title = 'Recipe title is required';
    }
    if (!formValues.ingredients) {
      formErrors.ingredients = 'Ingredients are required';
    } else if (formValues.ingredients.split(',').length < 2) {
      formErrors.ingredients = 'Please list at least two ingredients';
    }
    if (!formValues.steps) {
      formErrors.steps = 'Preparation steps are required';
    }

    setErrors(formErrors);
    return Object.keys(formErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      // If form is valid, submit the data (for now, just log it)
      console.log('Form submitted:', formValues);
      // You can reset form values after submission if needed
      setFormValues({
        title: '',
        ingredients: '',
        steps: '',
      });
      setErrors({});
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Add a New Recipe</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="title" className="block text-sm font-medium text-gray-700">
            Recipe Title
          </label>
          <input
            type="text"
            name="title"
            id="title"
            value={formValues.title}
            onChange={handleInputChange}
            className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm ${
              errors.title ? 'border-red-500' : ''
            }`}
          />
          {errors.title && <p className="text-red-500 text-sm">{errors.title}</p>}
        </div>

        <div className="mb-4">
          <label htmlFor="ingredients" className="block text-sm font-medium text-gray-700">
            Ingredients (separate by commas)
          </label>
          <textarea
            name="ingredients"
            id="ingredients"
            value={formValues.ingredients}
            onChange={handleInputChange}
            className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm ${
              errors.ingredients ? 'border-red-500' : ''
            }`}
          />
          {errors.ingredients && (
            <p className="text-red-500 text-sm">{errors.ingredients}</p>
          )}
        </div>

        <div className="mb-4">
          <label htmlFor="steps" className="block text-sm font-medium text-gray-700">
            Preparation Steps
          </label>
          <textarea
            name="steps"
            id="steps"
            value={formValues.steps}
            onChange={handleInputChange}
            className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm ${
              errors.steps ? 'border-red-500' : ''
            }`}
          />
          {errors.steps && <p className="text-red-500 text-sm">{errors.steps}</p>}
        </div>

        <button
          type="submit"
          className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-600"
        >
          Add Recipe
        </button>
      </form>
    </div>
  );
};

export default AddRecipeForm;

