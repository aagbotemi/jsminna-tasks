//replaceString function
const replaceString = (word, search, replaceWith) => {
    return (word).replace(search, replaceWith);
}
console.log(replaceString('KalAkuata', /a/gi, 'e'));

//changeCase function
const changeCase = (sentence, caseWord) => {
    if (caseWord == 'upper') {
        return sentence.toUpperCase();
    } else if (caseWord == 'lower') {
        return sentence.toLowerCase();
    }
}
console.log(changeCase('satunklampa', 'upper'));

//trimEdges function
const trimEdges = (sentence) => {
    return sentence.trim();
}
console.log(trimEdges("   salmond     "));

//extractString function
const extractString = (sentence, start, end) => {
    return sentence.substring(start, end);
}
console.log(extractString("Adele, great singer", 7, 17));

//getInitials function
const getInitials = name => {
    const wordArray = name.split(' ');
    const firstName = wordArray[0];
    const lastName = wordArray[1];
    return (firstName.charAt(0) + lastName.charAt(0)).toUpperCase();
}
console.log(getInitials("brendan eich"));