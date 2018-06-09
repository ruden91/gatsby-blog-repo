webpackJsonp([72903801124583],{1028:function(e,s){e.exports={data:{contentfulBlogPost:{title:"[codewars] Decode the Morse code",id:"c31WsnpaT1moMMUisoKeyIs",tags:["general"],categories:["algorithm"],publishDate:"2018-06-02T00:00+09:00",heroImage:{sizes:{base64:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEASABIAAD/2wBDAAMCAgMCAgMDAwMEAwMEBQgFBQQEBQoHBwYIDAoMDAsKCwsNDhIQDQ4RDgsLEBYQERMUFRUVDA8XGBYUGBIUFRT/2wBDAQMEBAUEBQkFBQkUDQsNFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBT/wAARCAALABQDAREAAhEBAxEB/8QAGAAAAgMAAAAAAAAAAAAAAAAAAwQFCAn/xAAnEAABAwMDBAEFAAAAAAAAAAABAgMEBREhAAYSBxMxQVEVIlJxkf/EABcBAAMBAAAAAAAAAAAAAAAAAAIDBAX/xAAgEQEAAgICAQUAAAAAAAAAAAABAAIDERIhUQQxQXGB/9oADAMBAAIRAxEAPwDRmo7jqsJlgxdtzZ5W2hSk99pCkEqsUquq1wM4JGf2RhgJ2yhi43ZWVJUTtWY3xWU3XIatb8vtJNs/F8HGhdAu4zHUtcrbofmSVMqqJ0BmRPb+mSXOV4zj2UgKIB9eQL+Pek1eRtJT6nFTBlceK/INd+ev36gdqVGRUqQ09Jc7jhWU8rAYx8aLxJk0saqKlFDqORCTg8TY/wBGgs+8OhKVdbdjUhfUCdzRLdOTydnyFnKlKOSu9rk49eBjTK2QjdE//9k=",aspectRatio:1.8083623693379791,src:"//images.ctfassets.net/hu4faubeotg0/6hBUhX5xKgUs0WAGGQOK8k/9b9aed31763f88e8668bb1a6a9e69236/codewars.jpg?w=1280&q=50",srcSet:"//images.ctfassets.net/hu4faubeotg0/6hBUhX5xKgUs0WAGGQOK8k/9b9aed31763f88e8668bb1a6a9e69236/codewars.jpg?w=320&h=177&q=50 320w,\n//images.ctfassets.net/hu4faubeotg0/6hBUhX5xKgUs0WAGGQOK8k/9b9aed31763f88e8668bb1a6a9e69236/codewars.jpg?w=519&h=287&q=50 519w",sizes:"(max-width: 1280px) 100vw, 1280px"}},body:{childMarkdownRemark:{html:"<p>In this kata you have to write a simple Morse code decoder. While the Morse code is now mostly superceded by voice and digital data communication channels, it still has its use in some applications around the world.\nThe Morse code encodes every character as a sequence of \"dots\" and \"dashes\". For example, the letter A is coded as ·−, letter Q is coded as −−·−, and digit 1 is coded as ·−−−. The Morse code is case-insensitive, traditionally capital letters are used. When the message is written in Morse code, a single space is used to separate the character codes and 3 spaces are used to separate words. For example, the message <b>HEY JUDE</b> in Morse code is <b>···· · −·−−   ·−−− ··− −·· ·</b>.</p>\n<p><b>NOTE</b>: Extra spaces before or after the code have no meaning and should be ignored.</p>\n<p>In addition to letters, digits and some punctuation, there are some special service codes, the most notorious of those is the international distress signal SOS (that was first issued by Titanic), that is coded as <b>···−−−···</b>. These special codes are treated as single special characters, and usually are transmitted as separate words.</p>\n<p>Your task is to implement a function that would take the morse code as input and return a decoded human-readable string.</p>\n<p>For example:</p>\n<pre><code>decodeMorse('.... . -.--   .--- ..- -.. .')\n//should return \"HEY JUDE\"\n</code></pre>\n<p>NOTE: For coding purposes you have to use ASCII characters . and -, not Unicode characters.</p>\n<p>The Morse code table is preloaded for you as a dictionary, feel free to use it. In CoffeeScript, C++, Go, JavaScript, PHP, Python, Ruby and TypeScript, the table can be accessed like this: MORSE<em>CODE['.--'], in Java it is MorseCode.get(\".--\"), in C# it is MorseCode.Get(\".--\") (returns string), in Haskell the codes are in a Map String String and can be accessed like this: morseCodes ! \".--\", in Elixir it is morse</em>codes variable, in Rust it is self.morse_code.</p>\n<p>All the test strings would contain valid Morse code, so you may skip checking for errors and exceptions. In C#, tests will fail if the solution code throws an exception, please keep that in mind. This is mostly because otherwise the engine would simply ignore the tests, resulting in a \"valid\" solution.</p>\n<p>Good luck!</p>\n<p>After you complete this kata, you may try yourself at Decode the Morse code, advanced.</p>\n<p>My answer</p>\n<pre><code>decodeMorse = function(morseCode){\n  morseCode = morseCode.trim();\n  let refinedData = morseCode.split('   ');\n  let result = [];\n  \n  for (let i = 0; i &#x3C; refinedData.length; i++) {\n    let temp = refinedData[i].split(' ');\n    for (let j = 0; j &#x3C; temp.length; j++) {\n      if (MORSE_CODE[temp[j]]) {\n        result.push(MORSE_CODE[temp[j]]);\n      }\n    }\n    \n    if (i !== refinedData.length - 1) {\n    result.push(' ');\n    }\n  }\n  return result.join('');\n}\n</code></pre>\n<p>Best practice</p>\n<pre><code>decodeMorse = function(morseCode){\n  function decodeMorseLetter(letter) {\n    return MORSE_CODE[letter];\n  }\n  function decodeMorseWord(word) {\n    return word.split(' ').map(decodeMorseLetter).join('');\n  }\n  return morseCode.trim().split('   ').map(decodeMorseWord).join(' ');\n}\n</code></pre>\n<p>너무 구리게 풀었다.. 더 생각좀 하고 풀어야지..ㅎㅎ</p>"}}}},pathContext:{slug:"codewars-decode-the-morse-code"}}}});
//# sourceMappingURL=path---blog-codewars-decode-the-morse-code-1856739b414c33a622a5.js.map