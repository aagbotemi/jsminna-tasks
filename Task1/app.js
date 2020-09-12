const returnObject = () => {
    const sentence = 'maDam aYo Who Stays In oYo Was in a Bus to Lagos when Her Son Sold the RaceCar as there are Level to this thing we are Talking about';

    if (sentence) {
        const words = sentence.split(' ');
        const uppercaseWord = words.filter(s => s[0] !== s[0].toLowerCase());
        const ingWord = words.filter(s => s.toLowerCase().slice(s.length - 3) === 'ing');
        const palindrome = words.filter(word => word.toLowerCase() ===
        word.split('').reverse().join('').toLowerCase())
        let me = JSON.stringify({
        uppercaseWord,
        ingWord,
        palindrome
        })
        console.log(me);
    }
}
returnObject();