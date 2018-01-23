/* Event listeners for inputs */

// Event listener for "Submit" button
document.getElementById('solve').addEventListener('click', solve);

// Event listener for all inputs
document.querySelectorAll('input[type=number]').forEach(function(inp) {
    inp.addEventListener('change', function() {
        // Set this input's candidates to only this input's value
        this.dataset.candidates = '[' + this.value + ']';

        // Debug log
        console.log(this);
    });
});

// Iterate through inputs trying to solve
function solve() {
    // Iterate through grid trying to solve unsolved inputs
    for(i = 1; i <= 9; i++) {
        for(j = 1; j <= 9; j++) {
            if(!isSolved(i, j)) {
                // TODO removeCandidatesInRow)(i, j);
                // TODO removeCandidatesInCol(i, j);
                // TODO removeCandidatesInGroup(i, j);
                checkForSingleCandidate(i, j);

                // Debug log
                console.log('Solve attempted at ' + i + ':' + j +'!');
            }
        }
    }
}

// Remove value from candidates at location (row/col)
function removeCandidate(row, col, value) {
    // Select location depending on row and col
    let location = document.querySelector('[data-row="' + row + '"][data-col="' + col + '"]');
    // Parse JSON
    let candidates = JSON.parse(location.dataset.candidates);
    // Remove value from candidates array
    candidates = candidates.filter(item => item !== value);
    // Convert back into JSON object
    let result = JSON.stringify(candidates);
    // Update data-candidates attribute at location
    document.querySelector('[data-row="' + row + '"][data-col="' + col + '"]').dataset.candidates = result;
    
    // Debug log
    console.log('Removed candidate ' + value + ' at ' + row + ':' + col +'!');
}

// If there is only one candidate at location, set that input's value to the candidate
function checkForSingleCandidate(row, col) {
    // Select location depending on row and col
    let location = document.querySelector('[data-row="' + row + '"][data-col="' + col + '"]');
    // Parse JSON
    candidates = JSON.parse(location.dataset.candidates);
    if (candidates.length == 1) {
        document.querySelector('[data-row="' + row + '"][data-col="' + col + '"]').value = candidates[0];
    }
}

// Returns true if input has a numerical value
function isSolved(row, col) {
    return document.querySelector('[data-row="' + row + '"][data-col="' + col + '"]').value ? true: false;
}


/* removeOtherCandidates() not currently needed
but I'm leaving the code in here in case I need it later! */

// // Remove all candidates at location except value
// function removeOtherCandidates(row, col) {
//     let value = document.querySelector('[data-row="' + row + '"][data-col="' + col + '"]').value;
//     document.querySelector('[data-row="' + row + '"][data-col="' + col + '"]').dataset.candidates = '[' + value + ']';

//     // Debug log
//     console.log('Emptied all but ' + value + ' at ' + row + ':' + col +'!');
//     console.log(document.querySelector('[data-row="' + row + '"][data-col="' + col + '"]'));
// }