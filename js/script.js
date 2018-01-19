
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
    console.log(document.querySelector('[data-row="' + row + '"][data-col="' + col + '"]'));
}

// Event listeners for buttons
document.getElementById('solve').addEventListener("click", solve);


// Iterate through inputs trying to solve
function solve() {
    for(i = 1; i <= 9; i++) {
        for(j = 1; j <= 9; j++) {
            if(!isSolved(i, j)) {
            //removeCandidatesInRow)(i, j);
            //removeCandidatesInCol(i, j);
            //removeCandidatesInGroup(i, j);
            checkForSingleCandidate(i, j);

            // Debug log
            console.log(i.toString() + ":" + j.toString());
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