function removeCandidate(e,t,a){let o=document.querySelector('[data-row="'+e+'"][data-col="'+t+'"]'),d=JSON.parse(o.dataset.candidates);d=d.filter(e=>e!==a);let c=JSON.stringify(d);document.querySelector('[data-row="'+e+'"][data-col="'+t+'"]').dataset.candidates=c,console.log("Removed candidate "+a+" at "+e+":"+t+"!")}function removeOtherCandidates(e,t){let a=document.querySelector('[data-row="'+e+'"][data-col="'+t+'"]').value;document.querySelector('[data-row="'+e+'"][data-col="'+t+'"]').dataset.candidates="["+a+"]",console.log("Emptied all but "+a+" at "+e+":"+t+"!"),console.log(document.querySelector('[data-row="'+e+'"][data-col="'+t+'"]'))}function solve(){for(i=1;i<=9;i++)for(j=1;j<=9;j++)isSolved(i,j)&&removeOtherCandidates(i,j);for(i=1;i<=9;i++)for(j=1;j<=9;j++)isSolved(i,j)||(checkForSingleCandidate(i,j),console.log("Solve attempted at "+i+":"+j+"!"))}function checkForSingleCandidate(e,t){let a=document.querySelector('[data-row="'+e+'"][data-col="'+t+'"]');candidates=JSON.parse(a.dataset.candidates),1==candidates.length&&(document.querySelector('[data-row="'+e+'"][data-col="'+t+'"]').value=candidates[0])}function isSolved(e,t){return!!document.querySelector('[data-row="'+e+'"][data-col="'+t+'"]').value}document.getElementById("solve").addEventListener("click",solve);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNjcmlwdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6InNjcmlwdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEV2ZW50IGxpc3RlbmVycyBmb3IgYnV0dG9uc1xyXG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc29sdmUnKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgc29sdmUpO1xyXG5cclxuLy8gUmVtb3ZlIHZhbHVlIGZyb20gY2FuZGlkYXRlcyBhdCBsb2NhdGlvbiAocm93L2NvbClcclxuZnVuY3Rpb24gcmVtb3ZlQ2FuZGlkYXRlKHJvdywgY29sLCB2YWx1ZSkge1xyXG4gICAgLy8gU2VsZWN0IGxvY2F0aW9uIGRlcGVuZGluZyBvbiByb3cgYW5kIGNvbFxyXG4gICAgbGV0IGxvY2F0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtcm93PVwiJyArIHJvdyArICdcIl1bZGF0YS1jb2w9XCInICsgY29sICsgJ1wiXScpO1xyXG4gICAgLy8gUGFyc2UgSlNPTlxyXG4gICAgbGV0IGNhbmRpZGF0ZXMgPSBKU09OLnBhcnNlKGxvY2F0aW9uLmRhdGFzZXQuY2FuZGlkYXRlcyk7XHJcbiAgICAvLyBSZW1vdmUgdmFsdWUgZnJvbSBjYW5kaWRhdGVzIGFycmF5XHJcbiAgICBjYW5kaWRhdGVzID0gY2FuZGlkYXRlcy5maWx0ZXIoaXRlbSA9PiBpdGVtICE9PSB2YWx1ZSk7XHJcbiAgICAvLyBDb252ZXJ0IGJhY2sgaW50byBKU09OIG9iamVjdFxyXG4gICAgbGV0IHJlc3VsdCA9IEpTT04uc3RyaW5naWZ5KGNhbmRpZGF0ZXMpO1xyXG4gICAgLy8gVXBkYXRlIGRhdGEtY2FuZGlkYXRlcyBhdHRyaWJ1dGUgYXQgbG9jYXRpb25cclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLXJvdz1cIicgKyByb3cgKyAnXCJdW2RhdGEtY29sPVwiJyArIGNvbCArICdcIl0nKS5kYXRhc2V0LmNhbmRpZGF0ZXMgPSByZXN1bHQ7XHJcbiAgICBcclxuICAgIC8vIERlYnVnIGxvZ1xyXG4gICAgY29uc29sZS5sb2coXCJSZW1vdmVkIGNhbmRpZGF0ZSBcIiArIHZhbHVlICsgXCIgYXQgXCIgKyByb3cgKyBcIjpcIiArIGNvbCArXCIhXCIpO1xyXG59XHJcblxyXG4vLyBSZW1vdmUgYWxsIGNhbmRpZGF0ZXMgYXQgbG9jYXRpb24gZXhjZXB0IHZhbHVlXHJcbmZ1bmN0aW9uIHJlbW92ZU90aGVyQ2FuZGlkYXRlcyhyb3csIGNvbCkge1xyXG4gICAgbGV0IHZhbHVlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtcm93PVwiJyArIHJvdyArICdcIl1bZGF0YS1jb2w9XCInICsgY29sICsgJ1wiXScpLnZhbHVlO1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtcm93PVwiJyArIHJvdyArICdcIl1bZGF0YS1jb2w9XCInICsgY29sICsgJ1wiXScpLmRhdGFzZXQuY2FuZGlkYXRlcyA9ICdbJyArIHZhbHVlICsgJ10nO1xyXG5cclxuICAgIC8vIERlYnVnIGxvZ1xyXG4gICAgY29uc29sZS5sb2coXCJFbXB0aWVkIGFsbCBidXQgXCIgKyB2YWx1ZSArIFwiIGF0IFwiICsgcm93ICsgXCI6XCIgKyBjb2wgK1wiIVwiKTtcclxuICAgIGNvbnNvbGUubG9nKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLXJvdz1cIicgKyByb3cgKyAnXCJdW2RhdGEtY29sPVwiJyArIGNvbCArICdcIl0nKSk7XHJcbn1cclxuXHJcbi8vIEl0ZXJhdGUgdGhyb3VnaCBpbnB1dHMgdHJ5aW5nIHRvIHNvbHZlXHJcbmZ1bmN0aW9uIHNvbHZlKCkge1xyXG4gICAgLy8gSXRlcmF0ZSB0aHJvdWdoIGdyaWQgcmVtb3ZpbmcgY2FsbCBjYW5kaWRhdGVzIGluIHNvbHZlZCBpbnB1dHNcclxuICAgIGZvcihpID0gMTsgaSA8PSA5OyBpKyspIHtcclxuICAgICAgICBmb3IoaiA9IDE7IGogPD0gOTsgaisrKSB7XHJcbiAgICAgICAgICAgIGlmKGlzU29sdmVkKGksIGopKSB7XHJcbiAgICAgICAgICAgICAgICByZW1vdmVPdGhlckNhbmRpZGF0ZXMoaSwgaik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvLyBJdGVyYXRlIHRocm91Z2ggZ3JpZCB0cnlpbmcgdG8gc29sdmUgdW5zb2x2ZWQgaW5wdXRzXHJcbiAgICBmb3IoaSA9IDE7IGkgPD0gOTsgaSsrKSB7XHJcbiAgICAgICAgZm9yKGogPSAxOyBqIDw9IDk7IGorKykge1xyXG4gICAgICAgICAgICBpZighaXNTb2x2ZWQoaSwgaikpIHtcclxuICAgICAgICAgICAgICAgIC8vIFRPRE8gcmVtb3ZlQ2FuZGlkYXRlc0luUm93KShpLCBqKTtcclxuICAgICAgICAgICAgICAgIC8vIFRPRE8gcmVtb3ZlQ2FuZGlkYXRlc0luQ29sKGksIGopO1xyXG4gICAgICAgICAgICAgICAgLy8gVE9ETyByZW1vdmVDYW5kaWRhdGVzSW5Hcm91cChpLCBqKTtcclxuICAgICAgICAgICAgICAgIGNoZWNrRm9yU2luZ2xlQ2FuZGlkYXRlKGksIGopO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIERlYnVnIGxvZ1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJTb2x2ZSBhdHRlbXB0ZWQgYXQgXCIgKyBpICsgXCI6XCIgKyBqICtcIiFcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbi8vIElmIHRoZXJlIGlzIG9ubHkgb25lIGNhbmRpZGF0ZSBhdCBsb2NhdGlvbiwgc2V0IHRoYXQgaW5wdXQncyB2YWx1ZSB0byB0aGUgY2FuZGlkYXRlXHJcbmZ1bmN0aW9uIGNoZWNrRm9yU2luZ2xlQ2FuZGlkYXRlKHJvdywgY29sKSB7XHJcbiAgICAvLyBTZWxlY3QgbG9jYXRpb24gZGVwZW5kaW5nIG9uIHJvdyBhbmQgY29sXHJcbiAgICBsZXQgbG9jYXRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1yb3c9XCInICsgcm93ICsgJ1wiXVtkYXRhLWNvbD1cIicgKyBjb2wgKyAnXCJdJyk7XHJcbiAgICAvLyBQYXJzZSBKU09OXHJcbiAgICBjYW5kaWRhdGVzID0gSlNPTi5wYXJzZShsb2NhdGlvbi5kYXRhc2V0LmNhbmRpZGF0ZXMpO1xyXG4gICAgaWYgKGNhbmRpZGF0ZXMubGVuZ3RoID09IDEpIHtcclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1yb3c9XCInICsgcm93ICsgJ1wiXVtkYXRhLWNvbD1cIicgKyBjb2wgKyAnXCJdJykudmFsdWUgPSBjYW5kaWRhdGVzWzBdO1xyXG4gICAgfVxyXG59XHJcblxyXG4vLyBSZXR1cm5zIHRydWUgaWYgaW5wdXQgaGFzIGEgbnVtZXJpY2FsIHZhbHVlXHJcbmZ1bmN0aW9uIGlzU29sdmVkKHJvdywgY29sKSB7XHJcbiAgICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtcm93PVwiJyArIHJvdyArICdcIl1bZGF0YS1jb2w9XCInICsgY29sICsgJ1wiXScpLnZhbHVlID8gdHJ1ZTogZmFsc2U7XHJcbn0iXX0=
