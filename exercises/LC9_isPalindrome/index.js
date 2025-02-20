// Determine whether an integer is a palindrome. An integer is
// a palindrome when it reads the same backward as forward.
// Solve this WITHOUT converting the integer to a string.
// -------------------------------------------------------------
// function isPalindrome(121) --> true
// function isPalindrome(-121) --> false
// function isPalindrome(10) --> false

function isPalindrome(x) {
    x = String(x).toLowerCase().replace(/[\W_]/g, "");
    let left = 0
    let right = x.length -1 

    while (left < right) {
        if(x[left] === x[right]) {
            left++
            right--
        }else {
            return false 
        }
    }
    return true 
}

module.exports = isPalindrome;
