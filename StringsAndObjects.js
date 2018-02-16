// Question 1 - String Manipulation
// You are to implement the following functions:

// upperCase - 10pts

// This function takes a single string and returns a copy of the string with all alphabets converted to uppercase characters.

//  Note: You can not use the built-in `toUpperCase` function.
// lowerCase - 10pts

// This function takes a single string and returns a copy of the string with all alphabets converted to lowercase characters.

// Note: You can not use the built-in `toLowerCase` function.
// sentenceCase - 15pts

// This function takes two arguments: a single string (str) and an array of strings (unconditionallyCapitalized[]). This function returns a copy of str with the first letter of the first word capitalized, and all other words lower case, except for words that are unconditionally capitalized, such as proper nouns and "I". The unconditionallyCapitalized array contains all words that should be unconditionally capitalized.
// capitalizedCase - 10pts

// This function takes a single string and returns a copy of the string with the first character of each word converted to uppercase.
// alternatingCase - 10pts

// This function takes a single string and returns a copy of the string comprised of characters that alternate between lower and uppercase.
// titleCase - 15pts

// This function takes two arguments: a single string (str) and an array of strings (lowercaseWords[]). It returns a copy of str with the initial letter of each word capitalized. After the first word in the string, however, articles, conjunctions, and prepositions not more than five letters long should all be lower case. The lowercaseWords array contains all words that should be lowercased.
// inverseCase - 10pts

// This function takes a single string and returns a copy of the string with the first letter of each word lowercased, and all other letters in the word uppercased.
//     NOTE: For these functions, consider each word to be separated by one or more white-space characters.
// Next, use the following function to generate output.

// NOTE: The output of this function will be used to grade your assignment.

function upperCase(str){

  let upper = [];

  for(i = 0; i < str.length; i++) {

    let upperCase = str.charCodeAt(i);

        if (upperCase < 97){

            upper += str.substr(i, 1);

        }
        else{

            upper += String.fromCharCode(upperCase - 32);
        }

  }
  return upper;

}


function lowerCase(str){

  let lower = [];

  for(i = 0; i < str.length; i++) {

    let lowerCase = str.charCodeAt(i);

        if (lowerCase < 65 || lowerCase >90){

            lower += str.substr(i, 1);

        }

        else{

            lower += String.fromCharCode(lowerCase + 32);

        }

  }
  // let lowerSpace = upper.split("");

  return lower;

}

function sentenceCase(str, unconditionallyCapitalized){

    let lower = lowerCase(str);
    let sentence = str.split(" ");

        sentence[0]= sentence[0].charAt(0).toUpperCase() + sentence[0].substr(1);

          for (i = 0; i < sentence.length; i++) {

                if(!(unconditionallyCapitalized.indexOf(sentence[i]))){  

                        sentence[i] = sentence[i].charAt(0).toUpperCase()+ sentence[i].substr(1);
                }
        }
      return sentence.join(' ');

}

function capitalizedCase(str){

    let lower = lowerCase(str);
    let sentence = str.split(" ");

    sentence[0]= sentence[0].charAt(0).toUpperCase() + sentence[0].substr(1);

              for (i = 0; i < sentence.length; i++) { 

                sentence[i] = sentence[i].charAt(0).toUpperCase()+ sentence[i].substr(1);
        }

    return sentence.join(' ');

}

function alternatingCase(str){

    let lower = lowerCase(str);
    let sentence = str.split("");

        for( i = 0; i < sentence.length; i+=3){

            sentence[i] = sentence[i].toUpperCase();

        }

    return sentence.join('');

}

function titleCase(str, lowercaseWords){

    let lower = lowerCase(str);
    let sentence = lower.split("");

    sentence[0] = sentence[0].charAt(0).toUpperCase();
    sentence[0] = sentence[0]+ sentence[0].substr(1);

            for( i = 0; i < sentence.length; i++){

                    sentence[i] = sentence[i].charAt(0).toUpperCase()+sentence[i].substr(1);

            }
    return sentence.join("");


}

function inverseCase(str){

    let upper = upperCase(str);
    let sentence = upper.split("");

        for( i = 0; i < sentence.length; i+=2){

            sentence[i] = sentence[i].toLowerCase();

        }

    return sentence.join('');


}


function runStringFunctions(){

    console.log(" QUESTION 1: ");

    let str = 'I watched the storm, so beautiful yet terrific. The face of the moon was in shadow.'
    
    let unconditionallyCapitalized = ['I', 'Moon', 'Shadow']
    let lowercaseWords = ['the', 'of', 'in', 'an']
    
    console.log( 'upperCase: ', upperCase(str) )
    console.log( 'lowerCase: ', lowerCase(str) )
    console.log( 'sentenceCase: ', sentenceCase(str, unconditionallyCapitalized) )
    console.log( 'capitalizedCase: ', capitalizedCase(str) )
    console.log( 'alternatingCase: ', alternatingCase(str) )
    console.log( 'titleCase: ', titleCase(str, lowercaseWords) )
    console.log( 'inverseCase: ', inverseCase(str) )
}

runStringFunctions(); 
// Below is the expected output:

// upperCase: I WATCHED THE STORM, SO BEAUTIFUL YET TERRIFIC. THE FACE OF THE MOON WAS IN SHADOW.
// lowerCase: i watched the storm, so beautiful yet terrific. the face of the moon was in shadow.
// sentenceCase: I watched the storm, so beautiful yet terrific. The face of the Moon was in Shadow.
// capitalizedCase: I Watched The Storm, So Beautiful Yet Terrific. The Face Of The Moon Was In Shadow.
// alternatingCase: i wAtChEd tHe sToRm, So bEaUtIfUl yEt tErRiFiC. tHe fAcE Of tHe mOoN WaS In sHaDoW.
// titleCase: I Watched the Storm, So Beautiful Yet Terrific. The Face of the Moon Was in Shadow.
// inverseCase: i wATCHED tHE sTORM, sO bEAUTIFUL yET tERRIFIC. tHE fACE oF tHE mOON wAS iN sHADOW.



// Question 2 - Objects
// You are to implement the following functions:

// getCharacterFrequency - 10pts

// This function takes a single string (str) argument and returns an object.
// The object's properties will be the unique letters present in str.
// The value of each property will be the frequency of each character present in the string.
// NOTE: Uppercase and Lowercase letters should be grouped in the same count. For example, the word Babble would result in the following object:

// {
//     "B" : 3,  // This count includes upper and lowercase B's
//     "a" : 1,
//     "l" : 1,
//     "e" : 1
// }


function getCharacterFrequency(str){

let charFrequency = {};
    for ( i = 0; i < str.length; i++) {

        let stringLetter = str.charAt(i);

        if (charFrequency[stringLetter]) {

           charFrequency[stringLetter]++;

        } else {

           charFrequency[stringLetter] = 1;

        }
    }

    return charFrequency;

}




// printCharacterFrequency - 10pts

// This function will take a single object. The object should be of the type returned by getCharacterFrequency.
// This function will display each character and it's corresponding frequency.
// Each character should be surrounded by quotation marks in your output.
// Your output should account for singular and plural values. For example, the word Foo would result in:
//     'F' occurs 1 time.
//     'o' occurs 2 times.
// Next, use the following function to generate output.


function printCharacterFrequency(obj){

    for( i in obj){

        console.log("'"+ i +"' occurs", obj[i], "time(s)");

    }


}

// NOTE: The output of this function will be used to grade your assignment.

function runCharacterFunctions(){

    console.log(" QUESTION 2: ");

    let str = 'Hello, World!'
    
    let frequencyObj = getCharacterFrequency( str )
    
    printCharacterFrequency( frequencyObj )

}

runCharacterFunctions();


