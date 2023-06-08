/* 
What is a callback?
    A function that is passed as an argument to another function and is called inside that function. Used to handle
    async ops in JS, which lets code execution to continue while waiting for the async task to complete

What is callback hell?
    A.K.A THE PYRAMID OF DOOM, happens when many many aysnc ops are nested inside one another as callbacks, which leads
    to deeply nested and complex structures of code. Happens when aysnc ops depend on the result of previous async ops
    which cuases the code to be difficult to read, understand and maintain

Why does callback hell occur and why should we avoid callback hell?
    It occurs cuase older versions of JS use callbacks as the primary way to handle async code. A lot of times those
    async ops were written with nested callbacks which resulted in deeply nested code blocks, which made it challenging
    to follow the flow ot the code being executed and handle errors

    It should be avoided because it hinders code maintainability and readability, which in turn increases the chance of bugs.;l
    Also makes error handling more complex and can lead to a lack of code reuse


Please code an example of callback hell to show to the class. 
Make sure to go into detail as you explain your code to the class */


function fetchCharacter(characterId, callback) {
    setTimeout(() => {
      // Simulating fetching character data asynchronously
      const characters = {
        1: 'Gon Freecss',
        2: 'Killua Zoldyck',
        3: 'Kurapika',
        4: 'Leorio Paradinight'
      };
  
      if (characters[characterId]) {
        // Invoke the callback with character data
        callback(null, characters[characterId]);
      } else {
        // Invoke the callback with an error
        callback('Character not found', null);
      }
    }, 2000);
  }
  
  function fetchAbilities(character, callback) {
    setTimeout(() => {
      // Simulating fetching character abilities asynchronously
      const abilities = {
        'Gon Freecss': ['Jajanken', 'Enhancement'],
        'Killua Zoldyck': ['Godspeed', 'Lightning'],
        'Kurapika': ['Chain Jail', 'Scarlet Eyes'],
        'Leorio Paradinight': ['Warp Punch', 'Medical Knowledge']
      };
  
      if (abilities[character]) {
        // Invoke the callback with abilities data
        callback(null, abilities[character]);
      } else {
        // Invoke the callback with an error
        callback('Abilities not found', null);  
      }
    }, 1500);
  }
  
  // Fetch character data and abilities using callbacks (callback hell)
  fetchCharacter(1, (error, character) => {
    if (error) {
      console.error('Error fetching character:', error);
    } else {
      fetchAbilities(character, (error, abilities) => {
        if (error) {
          console.error('Error fetching abilities:', error);
        } else {
          console.log('Character:', character);
          console.log('Abilities:', abilities);
        }
      });
    }
  });
  