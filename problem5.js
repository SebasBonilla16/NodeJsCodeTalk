/*
What is a async/await?
    Feature that provides a more concise and synch-looking syntax for handling async ops. Built on promises and allows
    you to write async code that looks similar to sync code, making it easier to understand

Why is async/await useful?
    Provides a readable way to write async code compared to callback functions or promises. Simplifies error handling,
    allows you to chain async ops in a more readable manner using "await" keywords, generally easier compared to code
    using callbacks or raw promises, as the code allows for more synchronous flow

What are pro/cons to using async/await?
    Pros: Improved readability, simplified error handling, linear flow, easier to debug

    Cons: Limited browser suppost, requires understanding of promises

Please code some examples of async/await to show to the class.
Make sure to go into detail as you explain your code to the class. */


// Fetching character data asynchronously
async function fetchCharacterData(characterId) {
    try {
      // Fetch character data from an anime API
      const characterResponse = await fetch(`https://anime-api.com/characters/${characterId}`);
      const characterData = await characterResponse.json();
  
      // Check if character data exists
      if (!characterData) {
        throw new Error('Character not found');
      }
  
      // Fetch abilities data for the character
      const abilitiesResponse = await fetch(`https://anime-api.com/abilities/${characterData.name}`);
      const abilitiesData = await abilitiesResponse.json();
  
      // Check if abilities data exists
      if (!abilitiesData) {
        throw new Error('Abilities not found');
      }
  
      // Return the character and abilities data
      return { character: characterData, abilities: abilitiesData };
    } catch (error) {
      // Handle errors
      console.error('Error fetching character data:', error);
      // Re-throw the error to propagate it to the caller
      throw error;
    }
  }
  
  // Call the function to fetch character data
  fetchCharacterData(123)
    .then(data => {
      // Log the character and abilities data
      console.log('Character:', data.character);
      console.log('Abilities:', data.abilities);
    })
    .catch(error => {
      // Handle any errors that occurred during the async/await operations
      console.error('Error:', error);
    });
  