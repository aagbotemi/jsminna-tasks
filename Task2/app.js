//replaceString function
const replaceString = (word, search, replaceWith) => {
    console.log((word).replace(search, replaceWith));
}
replaceString('KalAkuata', /a/gi, 'e');

//changeCase function
const changeCase = (sentence, caseWord) => {
    if (caseWord == 'upper') {
        console.log(sentence.toUpperCase());
    } else if (caseWord == 'lower') {
        console.log(sentence.toLowerCase());
    }
}
changeCase('satunklampa', 'upper');

//trimEdges function
const trimEdges = (sentence) => {
    console.log(sentence.trim());
}
trimEdges("   salmond     ");

//extractString function
const extractString = (sentence, start, end) => {
    console.log(sentence.substring(start, end));
}
extractString("Adele, great singer", 7, 17);

//getInitials function
const getInitials = name => {
    console.log(name.split(' ').map((n) => n[0]).join('').toUpperCase());
}
getInitials("brendan eich");