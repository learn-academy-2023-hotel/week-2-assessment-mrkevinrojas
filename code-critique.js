// ASSESSMENT 2: Coding Critique with AI

// Enter the following prompt into ChatGPT or similar AI tool.

// Prompt: Create a function that takes in a string and logs the index of the first vowel.

// Copy and paste the code output here.

function indexOfFirstVowel(inputString) {
    const vowels = "aeiouAEIOU"; // Define a string containing all vowels
    for (let i = 0; i < inputString.length; i++) {
      const char = inputString[i];
      if (vowels.includes(char)) {
        console.log(`Index of the first vowel: ${i}`);
        return; // Stop the loop once the first vowel is found
      }
    }
    console.log("No vowels found in the string.");
  }

  //I am not surprised by what chatGPT outputted because it is an approach I would of taken if I was not restricted to useing 'return' in line 15 since it 'breaks' out of the loop once the iteration is true the first time.  I like that it set a constant with the vowels in lowercase and uppercase characters, that way when you loop through the string, it will check if that value at that index is in the const 'vowels'.  We see that the AI also stores each character temporatily in the const char in line 12 and then in line 13 checks to see whether it is True or False.  If it is true, it breaks out of the loop since the goal is to find the first occurence.  If it is flase, it will just move on to the next character and check if it is truthy.  In the end, if there are no vowels, it will log 'no vowels found in the string' from the function.  
  
  // Example usage:
  indexOfFirstVowel("Hello, world!"); // Output: Index of the first vowel: 1
  indexOfFirstVowel("rhythm"); // Output: No vowels found in the string.
  

// Critique the code output. 
// Things to consider in your critique: Were you surprised by the output? Was the output what you expected? Is the correct output being rendered? What do you like about the code? What do you dislike? Are there best practices that are not being followed? Would you take a different approach? What did you learn? 