document.getElementById("numerologyForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const numerologyNumber = calculateNumerology(name);
    
    document.getElementById("result").textContent = `Your Numerology Number is: ${numerologyNumber}`;
});

function calculateNumerology(name) {
    let sum = 0;
    name = name.toLowerCase();
    for (let char of name) {
        if (/[a-z]/.test(char)) {
            sum += char.charCodeAt(0) - 96; // 'a' = 1, 'b' = 2, ...
        }
    }

    // Reduce the sum to a single digit (except for 11, 22, and 33)
    while (sum > 9 && sum !== 11 && sum !== 22 && sum !== 33) {
        sum = sum % 10 + Math.floor(sum / 10);
    }

    return sum;
}
