window.addEventListener('load', function(){
    function isPalindrome(str) {
        var letterCounts = {};
        var letter;
        var palindromeSum = 0;
        str = str.toLowerCase();
        for (var i = 0; i < str.length; i++) {
            letter = str[i];
            letterCounts[letter] = letterCounts[letter] || 0;
            letterCounts[letter]++;
        }
        for (var letterCount in letterCounts) {
            palindromeSum += letterCounts[letterCount] % 2;
        }
        return palindromeSum < 2;
    }    
    const input = document.getElementById("palindrom");
    const ispalin = document.getElementById("ispalindrom");
    input.addEventListener('keyup', function() {
        ispalin.innerHTML = input.value + " is " + (isPalindrome(input.value) ? 'een' : 'geen') + " palindrome";
    })
})