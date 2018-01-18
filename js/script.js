
// Remove value from candidates at location (row/col)
function removeCandidate(row, col, value) {
    // Select location depending on row and col ([0] needed as querySelectorAll retrurns an array)
    let location = document.querySelectorAll('[data-row="' + row + '"], [data-col="' + col + '"]')[0];
    // Parse JSON
    let candidates = JSON.parse(location.dataset.candidates);
    // Remove value from candidates array
    candidates = candidates.filter(item => item !== value);
    // Convert back into JSON object
    let result = JSON.stringify(candidates);
    // Update data-candidates attribute at location
    document.querySelectorAll('[data-row="' + row + '"], [data-col="' + col + '"]')[0].dataset.candidates = result;
    
    // Debug log
    console.log(document.querySelectorAll('[data-row="' + row + '"], [data-col="' + col + '"]')[0]);
}

// Test code
removeCandidate(4, 4, 8);