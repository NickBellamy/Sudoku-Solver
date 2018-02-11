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

        // Eliminate candidates based on solved inputs
        eliminateCorrespondingCandidates();

        // Try to solve
        solveFoundThisLoop = trySolve();

        // Only executes if no solve has been found this loop
        if (!solveFoundThisLoop) {
            // Eliminate candidates based on block  column/row interaction
            blockColRowInteraction();

            // Try to solve
            solveFoundThisLoop = trySolve();
        }

        // Debug Log
        console.log("Loop complete!  hasBeenSolved is: " + solveFoundThisLoop);
    } while (solveFoundThisLoop && !isSudokuComplete());

}

// Loop through all solved inputs and remove their values from corresponding candidates
function eliminateCorrespondingCandidates() {
    for (row = 1; row <= 9; row++) {
        for (col = 1; col <= 9; col++) {
            // If solved, eliminate corresponding candidates in other positions
            if (isSolved(row, col)) {
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
    location.dataset.candidates = result;
    // Debug log
    console.log(value + " removed from " + row + ":" + col);
}

// Loop through all locations; if only one candidate at location, set that input's value to the candidate and return true
function trySolve() {
    let solutionFound = false;
    for (row = 1; row <= 9; row++) {
        for (col = 1; col <= 9; col++) {
            // If unsolved, attempt to solve
            if (!isSolved(row, col)) {
                // Solve input if there's only one candidate
                // Select location depending on row and col
                let location = document.querySelector('[data-row="' + row + '"][data-col="' + col + '"]');
                // Parse JSON
                candidates = JSON.parse(location.dataset.candidates);
                // If only one candidate at location, set location's value
                if (candidates.length == 1) {
                    location.value = candidates[0];
                    solutionFound = true;
                }
            }
        }
    }
    return solutionFound;
}

// Returns true if input has a numerical value
function isSolved(row, col) {
    return document.querySelector('[data-row="' + row + '"][data-col="' + col + '"]').value ? true : false;
}

// Returns true if all inputs have a value
function isSudokuComplete() {
    // Get all inputs of type number
    let results = Array.from(document.querySelectorAll('input[type=number]'));
    // Filter out any inputs that have no value
    results = results.filter(element => element.value.length > 0);

    // Debug Log
    if (results.length === 81) {
        console.log("Sudoku Completed!")
    } else {
        console.log("Sudoku not completed: only " + results.length + "/81 inputs solved!");
    }

    // If the results array has 81 members, the sudoku is complete
    return results.length === 81 ? true : false;
}

// Block and column/row interaction
// https://www.kristanix.com/sudokuepic/sudoku-solving-techniques.php
function blockColRowInteraction() {
    // Create an array of all the groups
    let groups = Array.from(document.getElementsByClassName('group'));
    // For each group
    groups.forEach(function (group) {
        // Create an array of all inputs in the group
        let inputs = Array.from(group.children);
        //Remove solved candidates
        inputs = inputs.filter(input => input.value < 1);
        //For each number (candidate) between 1-9
        for (let candidate = 1; candidate <= 9; candidate++) {
            let locations = [];

            inputs.forEach(function (input) {
                // If the input's candidates contain the candidate
                if (JSON.parse(input.dataset.candidates).includes(candidate)) {
                    // Push the data-col value to locations
                    locations.push([input.dataset.row, input.dataset.col]);
                }
            })

            // When mode = 0; rows are handled.  When mode = 1; columns are handled
            for (let mode = 0; mode <= 1; mode++) {
                // If all line location values in the array are equal
                if (locations.every(location => location[mode] === locations[0][mode]) && locations.length > 1) {

                    // Flatten 2D array into 1D array of line locations
                    let lineLocations = [];
                    locations.forEach(function (element) {
                        // Math.abs(mode-1) returns 1 when mode = 0, and 0 when mode = 1
                        lineLocations.push(parseInt(element[Math.abs(mode - 1)]));
                    })

                    for (let line = 1; line <= 9; line++) {
                        if (!lineLocations.includes(line)) {
                            if (mode === 0) {
                                // Remove this candidate from all inputs that share that row number
                                removeCandidate(locations[0][0], line, candidate);
                            } else {
                                // Remove this candidate from all inputs that share that column number
                                removeCandidate(line, locations[0][1], candidate);
                            }

                        }
                    }
                }
            }
        }
    })
}
