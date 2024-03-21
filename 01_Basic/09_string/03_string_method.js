/* 

--> String Method
(1) length                              --> find String Length
(2) toUpperCase()                       --> lowercase string conver in the uppercase
(3) toLowerCase()                       --> uppercase string conver in the lowevase
(4) slice(start : number, end number)
(5) replace(str, new_str)               --> only one string value replace  
(6) replaceAll(str, new_str)            --> all same string word replace
(7) trim()                              --> all While splace is remove
(8) trimStart()                         --> all While splace is remove
(9) trimEnd()                          --> all While splace is remove
(10) concat()                           --> joint two string
(11) padeStart(), padeEnd()
(12) repeat()                           --> repeat any string
(13) charAt()
(14) charCodeAt()
(15) split()                            --> સ્ટ્રીંગ ના ટુકડા કરવા

*/

// (1) lenght
let str1 = "This is Javascript Language.";          // start 1
console.log(">> String Length :", str1.length);

// (2) toUpperCase()
let str2 = "javascript";
console.log(">> toUpperCase() :", str2.toUpperCase());

// (3) toLowerCase()
let str3 = "JAVASCRIPT";
console.log(">> toLowerCase() :", str3.toLowerCase());

// (4) slice
let str4 = "This is JavaScript Language";
console.log(">> slice :", str4.slice(8, 18));
console.log(">> slice :", str4.slice(0, 4));
console.log(">> slice :", str4.slice(19, 27));
console.log(">> slice :", str4.slice(-8, -1));
console.log(">> slice :", str4.slice(-8));
console.log(">> slice :", str4.slice(5));

// (5) replace(old_str, new_str)
let str5 = "This is js Language. js";
console.log(">> replace :", str5.replace("js", "JavaScript"));

// (6) replaceAll(old_str, new_str);
let str6 = "This is js language. js language is use in the website and js is Frontend Language."
console.log(">> replaceAll", str6.replaceAll("js", "JavaScript"));

// (7) trim()
// (8) trimStart()
// (9) trimEnd()
let str7 = "            This is Trim                ";
console.log(">> trim() :", str7.trim());                       // remove while space
console.log(">> trimStart() :", str7.trimStart());             // remove while space
console.log(">> trimEnd() :", str7.trimEnd());                 // remove while space

// (10) concat()
let str8 = "This is";
let str9 = " Javascript";
let str10 = " Language";
console.log(">> concat() :", str8.concat(str9, str10));
console.log(">> concat() :", str8.concat(str9, " programming", str10));

// (11) padStart(), padEnd()
let str11 = "JS";
console.log(">> padStart :", str11.padStart(15, "*"));
console.log(">> padEnd() :", str11.padEnd(15, "$"));

// (13) repeat()
let str12 = "Hi How are you ? ";
// let str12 = "Hi How are you ? \n";
console.log(">> repeat() :", str12.repeat(5));

// (14) charAt()
let str13 = "JavaScript";
console.log("charAt() : ", str13.charAt(0));
console.log("charAt() : ", str13.charAt(1));
console.log("charAt() : ", str13.charAt(2));
console.log("charAt() : ", str13.charAt(4));
console.log("charAt() : ", str13.charAt(5));
console.log("charAt() : ", str13.charAt(6));
console.log("charAt() : ", str13.charAt(7));
console.log("charAt() : ", str13.charAt(8));
console.log("charAt() : ", str13.charAt(9));
// charAt second method use []
console.log("charAt() use [] : ", str13[0]);
console.log("charAt() use [] : ", str13[1]);


// (15) charCodeAt()
let str14 = "JavaScript";
console.log("charCodeAt() :", str14.charCodeAt(0));
console.log("charCodeAt() :", str14.charCodeAt(1));
console.log("charCodeAt() :", str14.charCodeAt(2));
console.log("charCodeAt() :", str14.charCodeAt(3));
console.log("charCodeAt() :", str14.charCodeAt(4));
console.log("charCodeAt() :", str14.charCodeAt(5));
console.log("charCodeAt() :", str14.charCodeAt(6));
console.log("charCodeAt() :", str14.charCodeAt(7));
console.log("charCodeAt() :", str14.charCodeAt(8));
console.log("charCodeAt() :", str14.charCodeAt(9));

// (16) split() - સ્ટ્રીંગ ના ટુકડા કરવા
let str15 = "This is JavaScript Language";
let str16 = str15.split("");
console.log(">> typeof str16 :", typeof str16);
console.log(">> split() :", str15.split(""));
console.log(">> split() :", str15.split("i"));
console.log(">> split() :", str15.split("t"));
console.log(">> split() :", str15.split("a"));