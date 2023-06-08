/* What is a promise? 
    A JS Object that represents a completion or failure of a async operation and it's value. Alternative to
    using callback functions for handling async code

What are promises used for?
    Used for handling async operations such as fetching data from an API, reading files, making database queries,
    or perform any other non-blocking Input/Output tasks

What are pro/cons to using a promise? Please code some examples of promises to show to the class.
    Pros: Provides a more readable way of writing async code, have built-in error handling with .catch() method,
        can be chained using .then() to perform async ops more concise and organized, allows better control 
        over the flow of async ops like .all(), .race(), and .finally()
    
    Cons: Older browsers may lack support for promises, slightly more complex as it introduces new syntax and concepts

    Make sure to go into detail as you explain your code to the class. */




// Function to fetch character data from the anime API
function fetchCharacter(characterId) {
    return new Promise((resolve, reject) => {
      // Make a request to the anime API to fetch character data
      fetch(`https://anime-api.com/characters/${characterId}`)
        // Convert the response to JSON
        .then(response => response.json())
        // Resolve the promise with the character data
        .then(data => resolve(data))
        // Reject the promise if an error occurs during the request
        .catch(error => reject(error));
    });
  }
  
  // Function to fetch character quotes from the anime API
  function fetchCharacterQuotes(character) {
    return new Promise((resolve, reject) => {
      // Make a request to the anime API to fetch character quotes
      fetch(`https://anime-api.com/quotes/${character.name}`)
        // Convert the response to JSON
        .then(response => response.json())
        // Resolve the promise with the character and quotes data
        .then(data => resolve({ character, quotes: data }))
        // Reject the promise if an error occurs during the request
        .catch(error => reject(error));
    });
  }
  
  // Fetch character data and character quotes using promises
  fetchCharacter(123)
    .then(character => fetchCharacterQuotes(character))
    .then(data => {
      // Print the character name and quotes
      console.log(`Character: ${data.character.name}`);
      console.log('Quotes:', data.quotes);
    })
    .catch(error => {
      // Print any errors that occur during promise chain
      console.error('Error:', error);
    });
  