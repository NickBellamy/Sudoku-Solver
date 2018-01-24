function solve(){for(i=1;i<=9;i++)for(j=1;j<=9;j++)isSolved(i,j)||(checkForSingleCandidate(i,j),console.log("Solve attempted at "+i+":"+j+"!"))}function removeCandidate(e,t,a){let d=document.querySelector('[data-row="'+e+'"][data-col="'+t+'"]'),o=JSON.parse(d.dataset.candidates);o=o.filter(e=>e!==a);let n=JSON.stringify(o);document.querySelector('[data-row="'+e+'"][data-col="'+t+'"]').dataset.candidates=n,console.log("Removed candidate "+a+" at "+e+":"+t+"!")}function checkForSingleCandidate(e,t){let a=document.querySelector('[data-row="'+e+'"][data-col="'+t+'"]');candidates=JSON.parse(a.dataset.candidates),1==candidates.length&&(document.querySelector('[data-row="'+e+'"][data-col="'+t+'"]').value=candidates[0])}function isSolved(e,t){return!!document.querySelector('[data-row="'+e+'"][data-col="'+t+'"]').value}document.getElementById("solve").addEventListener("click",solve),document.querySelectorAll("input[type=number]").forEach(function(e){e.addEventListener("change",function(){this.dataset.candidates="["+this.value+"]",console.log(this)})});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNjcmlwdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6InNjcmlwdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIEV2ZW50IGxpc3RlbmVycyBmb3IgaW5wdXRzICovXHJcblxyXG4vLyBFdmVudCBsaXN0ZW5lciBmb3IgXCJTdWJtaXRcIiBidXR0b25cclxuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NvbHZlJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzb2x2ZSk7XHJcblxyXG4vLyBFdmVudCBsaXN0ZW5lciBmb3IgYWxsIGlucHV0c1xyXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdpbnB1dFt0eXBlPW51bWJlcl0nKS5mb3JFYWNoKGZ1bmN0aW9uKGlucCkge1xyXG4gICAgaW5wLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIC8vIFNldCB0aGlzIGlucHV0J3MgY2FuZGlkYXRlcyB0byBvbmx5IHRoaXMgaW5wdXQncyB2YWx1ZVxyXG4gICAgICAgIHRoaXMuZGF0YXNldC5jYW5kaWRhdGVzID0gJ1snICsgdGhpcy52YWx1ZSArICddJztcclxuXHJcbiAgICAgICAgLy8gRGVidWcgbG9nXHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcyk7XHJcbiAgICB9KTtcclxufSk7XHJcblxyXG4vLyBJdGVyYXRlIHRocm91Z2ggaW5wdXRzIHRyeWluZyB0byBzb2x2ZVxyXG5mdW5jdGlvbiBzb2x2ZSgpIHtcclxuICAgIC8vIEl0ZXJhdGUgdGhyb3VnaCBncmlkIHRyeWluZyB0byBzb2x2ZSB1bnNvbHZlZCBpbnB1dHNcclxuICAgIGZvcihpID0gMTsgaSA8PSA5OyBpKyspIHtcclxuICAgICAgICBmb3IoaiA9IDE7IGogPD0gOTsgaisrKSB7XHJcbiAgICAgICAgICAgIGlmKCFpc1NvbHZlZChpLCBqKSkge1xyXG4gICAgICAgICAgICAgICAgLy8gVE9ETyByZW1vdmVDYW5kaWRhdGVzSW5Sb3cpKGksIGopO1xyXG4gICAgICAgICAgICAgICAgLy8gVE9ETyByZW1vdmVDYW5kaWRhdGVzSW5Db2woaSwgaik7XHJcbiAgICAgICAgICAgICAgICAvLyBUT0RPIHJlbW92ZUNhbmRpZGF0ZXNJbkdyb3VwKGksIGopO1xyXG4gICAgICAgICAgICAgICAgY2hlY2tGb3JTaW5nbGVDYW5kaWRhdGUoaSwgaik7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gRGVidWcgbG9nXHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnU29sdmUgYXR0ZW1wdGVkIGF0ICcgKyBpICsgJzonICsgaiArJyEnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLy8gUmVtb3ZlIHZhbHVlIGZyb20gY2FuZGlkYXRlcyBhdCBsb2NhdGlvbiAocm93L2NvbClcclxuZnVuY3Rpb24gcmVtb3ZlQ2FuZGlkYXRlKHJvdywgY29sLCB2YWx1ZSkge1xyXG4gICAgLy8gU2VsZWN0IGxvY2F0aW9uIGRlcGVuZGluZyBvbiByb3cgYW5kIGNvbFxyXG4gICAgbGV0IGxvY2F0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtcm93PVwiJyArIHJvdyArICdcIl1bZGF0YS1jb2w9XCInICsgY29sICsgJ1wiXScpO1xyXG4gICAgLy8gUGFyc2UgSlNPTlxyXG4gICAgbGV0IGNhbmRpZGF0ZXMgPSBKU09OLnBhcnNlKGxvY2F0aW9uLmRhdGFzZXQuY2FuZGlkYXRlcyk7XHJcbiAgICAvLyBSZW1vdmUgdmFsdWUgZnJvbSBjYW5kaWRhdGVzIGFycmF5XHJcbiAgICBjYW5kaWRhdGVzID0gY2FuZGlkYXRlcy5maWx0ZXIoaXRlbSA9PiBpdGVtICE9PSB2YWx1ZSk7XHJcbiAgICAvLyBDb252ZXJ0IGJhY2sgaW50byBKU09OIG9iamVjdFxyXG4gICAgbGV0IHJlc3VsdCA9IEpTT04uc3RyaW5naWZ5KGNhbmRpZGF0ZXMpO1xyXG4gICAgLy8gVXBkYXRlIGRhdGEtY2FuZGlkYXRlcyBhdHRyaWJ1dGUgYXQgbG9jYXRpb25cclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLXJvdz1cIicgKyByb3cgKyAnXCJdW2RhdGEtY29sPVwiJyArIGNvbCArICdcIl0nKS5kYXRhc2V0LmNhbmRpZGF0ZXMgPSByZXN1bHQ7XHJcbiAgICBcclxuICAgIC8vIERlYnVnIGxvZ1xyXG4gICAgY29uc29sZS5sb2coJ1JlbW92ZWQgY2FuZGlkYXRlICcgKyB2YWx1ZSArICcgYXQgJyArIHJvdyArICc6JyArIGNvbCArJyEnKTtcclxufVxyXG5cclxuLy8gSWYgdGhlcmUgaXMgb25seSBvbmUgY2FuZGlkYXRlIGF0IGxvY2F0aW9uLCBzZXQgdGhhdCBpbnB1dCdzIHZhbHVlIHRvIHRoZSBjYW5kaWRhdGVcclxuZnVuY3Rpb24gY2hlY2tGb3JTaW5nbGVDYW5kaWRhdGUocm93LCBjb2wpIHtcclxuICAgIC8vIFNlbGVjdCBsb2NhdGlvbiBkZXBlbmRpbmcgb24gcm93IGFuZCBjb2xcclxuICAgIGxldCBsb2NhdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLXJvdz1cIicgKyByb3cgKyAnXCJdW2RhdGEtY29sPVwiJyArIGNvbCArICdcIl0nKTtcclxuICAgIC8vIFBhcnNlIEpTT05cclxuICAgIGNhbmRpZGF0ZXMgPSBKU09OLnBhcnNlKGxvY2F0aW9uLmRhdGFzZXQuY2FuZGlkYXRlcyk7XHJcbiAgICBpZiAoY2FuZGlkYXRlcy5sZW5ndGggPT0gMSkge1xyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLXJvdz1cIicgKyByb3cgKyAnXCJdW2RhdGEtY29sPVwiJyArIGNvbCArICdcIl0nKS52YWx1ZSA9IGNhbmRpZGF0ZXNbMF07XHJcbiAgICB9XHJcbn1cclxuXHJcbi8vIFJldHVybnMgdHJ1ZSBpZiBpbnB1dCBoYXMgYSBudW1lcmljYWwgdmFsdWVcclxuZnVuY3Rpb24gaXNTb2x2ZWQocm93LCBjb2wpIHtcclxuICAgIHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1yb3c9XCInICsgcm93ICsgJ1wiXVtkYXRhLWNvbD1cIicgKyBjb2wgKyAnXCJdJykudmFsdWUgPyB0cnVlOiBmYWxzZTtcclxufVxyXG5cclxuXHJcbi8qIHJlbW92ZU90aGVyQ2FuZGlkYXRlcygpIG5vdCBjdXJyZW50bHkgbmVlZGVkXHJcbmJ1dCBJJ20gbGVhdmluZyB0aGUgY29kZSBpbiBoZXJlIGluIGNhc2UgSSBuZWVkIGl0IGxhdGVyISAqL1xyXG5cclxuLy8gLy8gUmVtb3ZlIGFsbCBjYW5kaWRhdGVzIGF0IGxvY2F0aW9uIGV4Y2VwdCB2YWx1ZVxyXG4vLyBmdW5jdGlvbiByZW1vdmVPdGhlckNhbmRpZGF0ZXMocm93LCBjb2wpIHtcclxuLy8gICAgIGxldCB2YWx1ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLXJvdz1cIicgKyByb3cgKyAnXCJdW2RhdGEtY29sPVwiJyArIGNvbCArICdcIl0nKS52YWx1ZTtcclxuLy8gICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLXJvdz1cIicgKyByb3cgKyAnXCJdW2RhdGEtY29sPVwiJyArIGNvbCArICdcIl0nKS5kYXRhc2V0LmNhbmRpZGF0ZXMgPSAnWycgKyB2YWx1ZSArICddJztcclxuXHJcbi8vICAgICAvLyBEZWJ1ZyBsb2dcclxuLy8gICAgIGNvbnNvbGUubG9nKCdFbXB0aWVkIGFsbCBidXQgJyArIHZhbHVlICsgJyBhdCAnICsgcm93ICsgJzonICsgY29sICsnIScpO1xyXG4vLyAgICAgY29uc29sZS5sb2coZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtcm93PVwiJyArIHJvdyArICdcIl1bZGF0YS1jb2w9XCInICsgY29sICsgJ1wiXScpKTtcclxuLy8gfSJdfQ==
