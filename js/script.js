/* Event listeners for inputs */

// Event listener for "Submit" button
document.getElementById('solve').addEventListener('click', solve);

// Event listener for all inputs
document.querySelectorAll('input[type=number]').forEach(function (inp) {
    inp.addEventListener('change', function () {
        // Set this input's candidates to only this input's value
        this.dataset.candidates = '[' + this.value + ']';

        // Debug log
        console.log(this);
    });
});

// Iterate through inputs trying to solve
function solve() {
    let solveFoundThisLoop = false;
    do {
        // Reset flag
        solveFoundThisLoop = false;

        // Handle solved inputs
        for (i = 1; i <= 9; i++) {
            for (j = 1; j <= 9; j++) {
                // If solved, eliminate corresponding candidates in other positions
                if (isSolved(i, j)) {
                    eliminateCorrespondingCandidates(i, j);
                }
            }
        }

        // Handle unsolved inputs
        for (i = 1; i <= 9; i++) {
            for (j = 1; j <= 9; j++) {
                // If unsolved, attempt to solve
                if (!isSolved(i, j)) {
                    // Solve input if there's only one candidate
                    trySolveForSingleCandidate(i, j);
                    // If solveFoundThisLoop is false and a new solution has been found, set solveFoundThisLoop to true
                    if (!solveFoundThisLoop && isSolved(i, j)) {
                        solveFoundThisLoop = true;
                    }
                }
            }
        }
        // Debug Log
        console.log("Loop complete!  hasBeenSolved is: " + solveFoundThisLoop);
    } while (solveFoundThisLoop);
}

function eliminateCorrespondingCandidates(row, col) {

    // Get value location from row, col
    const location = document.querySelector('[data-row="' + row + '"][data-col="' + col + '"]');
    
    // Array of all elements in row, column, and group
    let elementsToEliminate = [
        ...document.querySelectorAll('[data-row="' + row + '"], [data-col="' + col + '"]'),
        ...location.parentElement.children
    ]

    // Remove duplicates
    elementsToEliminate = [...new Set(elementsToEliminate)]
    // Remove solved inputs
    elementsToEliminate = elementsToEliminate.filter(element => !(isSolved(element.dataset.row, element.dataset.col)));
    // Remove value from remaining candidates
    elementsToEliminate.forEach(function (element) {
        removeCandidate(parseInt(element.dataset.row), parseInt(element.dataset.col), parseInt(location.value));
    })

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
    location.dataset.candidates = result;
    // Debug log
    console.log(value + " removed from " + row + ":" + col);
}

// If there is only one candidate at location, set that input's value to the candidate and return true
function trySolveForSingleCandidate(row, col) {
    // Select location depending on row and col
    let location = document.querySelector('[data-row="' + row + '"][data-col="' + col + '"]');
    // Parse JSON
    candidates = JSON.parse(location.dataset.candidates);
    // If only one candidate at location, set location's value
    if (candidates.length == 1) {
        location.value = candidates[0];
        return true;
    } else {
        return false;
    }
}

// Returns true if input has a numerical value
function isSolved(row, col) {
    return document.querySelector('[data-row="' + row + '"][data-col="' + col + '"]').value ? true : false;
}

// Block and column/row interaction
// https://www.kristanix.com/sudokuepic/sudoku-solving-techniques.php
function blockColRowInteraction() {
    // For each group
        // For each number (candidate) between 1-9
        // Add to an array the row number of the locations within the group
        // Add to an array the column number of the locations within the group
        // If all numbers in the row array are equal
            // Remove this candidate from all inputs that share that row number
        // If all numbers in the column array are equal
            // Remove this candidate from all inputs that share that column number
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