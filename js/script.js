// Event listeners for buttons
document.getElementById('solve').addEventListener("click", solve);

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
    console.log("Removed candidate " + value + " at " + row + ":" + col +"!");
}

// Remove all candidates at location except value
function removeOtherCandidates(row, col) {
    let value = document.querySelector('[data-row="' + row + '"][data-col="' + col + '"]').value;
    document.querySelector('[data-row="' + row + '"][data-col="' + col + '"]').dataset.candidates = '[' + value + ']';

    // Debug log
    console.log("Emptied all but " + value + " at " + row + ":" + col +"!");
    console.log(document.querySelector('[data-row="' + row + '"][data-col="' + col + '"]'));
}

// Iterate through inputs trying to solve
function solve() {
    // Iterate through grid removing call candidates in solved inputs
    for(i = 1; i <= 9; i++) {
        for(j = 1; j <= 9; j++) {
            if(isSolved(i, j)) {
                removeOtherCandidates(i, j);
            }
        }
    }
    // Iterate through grid trying to solve unsolved inputs
    for(i = 1; i <= 9; i++) {
        for(j = 1; j <= 9; j++) {
            if(!isSolved(i, j)) {
                // TODO removeCandidatesInRow)(i, j);
                // TODO removeCandidatesInCol(i, j);
                // TODO removeCandidatesInGroup(i, j);
                checkForSingleCandidate(i, j);

                // Debug log
                console.log("Solve attempted at " + i + ":" + j +"!");
            }
        }
    }
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