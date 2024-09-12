const LOCAL_STORAGE_KEY = 'cats'; // Key to store cats in local storage

export const addCat = (cat) => {
  // Retrieve existing cats or initialize as an empty array
  const existingCats = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) || [];

  // Add the new cat to the array
  existingCats.push(cat);

  // Save the updated array back to local storage
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(existingCats));
};

// Function to get all cats
export const getAllCats = () => {
  return JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) || [];
};

// Function to get a cat by ID
export const getCatById = (id) => {
  const cats = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) || [];
  return cats.find(cat => cat.id === id);
};

// Function to delete a cat by ID
export const deleteCatById = (id) => {
    // Retrieve existing cats or initialize as an empty array
    const existingCats = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) || [];
  
    // Filter out the cat with the given ID
    const updatedCats = existingCats.filter(cat => cat.id !== id);
  
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(updatedCats));
  };
