const ALPHABETS = "QWERTYUIOPASDFGHJKLZXCVBNM".split('');


function LetterButtons({text , guessedLetter , onLetterClick}){
    const originalLetters = new Set(text.toUpperCase().split(''));

    const guessedLettersSet = new Set(guessedLetter);

    console.log("guessed letter set is" , guessedLetter);

    // function buttonStyle(letter){
    //     if(guessedLetterSet.has(letter)){
    //         return `${orginalLetters.has(letter) ? 'bg-green-500' : 'bg-red-500'}`;
    //     }
    //     else{
    //         return 'bg-blue-500'
    //     }

        
    // }


    const buttonStyle = function(letter) {
        if(guessedLettersSet.has(letter)) {
            return `${originalLetters.has(letter) ? 'bg-green-500' : 'bg-red-500'}`;
        } else {
            return 'bg-blue-500';
        }
    }


    function handleLetterClick(event){
        const characterOfTheLetter = event.target.value;
        onLetterClick?.(characterOfTheLetter);
    }

    const buttons = ALPHABETS.map(letter =>{
        return(
            <button value = {letter} key={`button-${letter}`} onClick={handleLetterClick} disabled={guessedLettersSet.has(letter)} className={`h-12 w-12 m-1 text-white rounded-md ${buttonStyle(letter)}`}>
            {letter}
            </button>
        )
    });


    return(
        <>
            {buttons}
        </>
    )
}

export default LetterButtons;