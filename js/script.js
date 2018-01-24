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
                checkForSingleCandidate(i, j);

                // Debug log
                console.log('Solve attempted at ' + i + ':' + j + '!');
            }
        }
    }
}

function eliminateCorrespondingCandidates(row, col) {
    
    /* Eliminate candidates in group */

    // Get value at location
    let location = document.querySelector('[data-row="' + row + '"][data-col="' + col + '"]');
    let value = location.value;
    // Get parent
    let parentDiv = (location.parentElement);
    // Get all siblings
    let inputCollection = parentDiv.children;
    console.log(inputCollection);
    // Convert HTMLCollection to an array
    let inputArray = Array.from(inputCollection);
    console.log(inputArray);
    // Remove solved inputs from array
    let result = inputArray.filter(element => !(isSolved(element.dataset.row, element.dataset.col)));
    console.log(result);
    // Remove value from remaining candidates
    result.forEach(function(element){
        removeCandidate(parseInt(element.dataset.row), parseInt(element.dataset.col), parseInt(value));
    })
    // Debug log
    console.log(result);


    // TODO eliminate candidates in row
    // TODO eliminate candidates in col

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
    console.log('Removed candidate ' + value + ' at ' + row + ':' + col + '!');
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
    return document.querySelector('[data-row="' + row + '"][data-col="' + col + '"]').value ? true : false;
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