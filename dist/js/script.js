function removeCandidate(e,t,a){let o=document.querySelector('[data-row="'+e+'"][data-col="'+t+'"]'),d=JSON.parse(o.dataset.candidates);d=d.filter(e=>e!==a);let c=JSON.stringify(d);document.querySelector('[data-row="'+e+'"][data-col="'+t+'"]').dataset.candidates=c,console.log(document.querySelector('[data-row="'+e+'"][data-col="'+t+'"]'))}function solve(){for(i=1;i<=9;i++)for(j=1;j<=9;j++)isSolved(i,j)||(checkForSingleCandidate(i,j),console.log(i.toString()+":"+j.toString()))}function checkForSingleCandidate(e,t){let a=document.querySelector('[data-row="'+e+'"][data-col="'+t+'"]');candidates=JSON.parse(a.dataset.candidates),1==candidates.length&&(document.querySelector('[data-row="'+e+'"][data-col="'+t+'"]').value=candidates[0])}function isSolved(e,t){return!!document.querySelector('[data-row="'+e+'"][data-col="'+t+'"]').value}document.getElementById("solve").addEventListener("click",solve);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNjcmlwdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoic2NyaXB0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi8vIFJlbW92ZSB2YWx1ZSBmcm9tIGNhbmRpZGF0ZXMgYXQgbG9jYXRpb24gKHJvdy9jb2wpXHJcbmZ1bmN0aW9uIHJlbW92ZUNhbmRpZGF0ZShyb3csIGNvbCwgdmFsdWUpIHtcclxuICAgIC8vIFNlbGVjdCBsb2NhdGlvbiBkZXBlbmRpbmcgb24gcm93IGFuZCBjb2xcclxuICAgIGxldCBsb2NhdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLXJvdz1cIicgKyByb3cgKyAnXCJdW2RhdGEtY29sPVwiJyArIGNvbCArICdcIl0nKTtcclxuICAgIC8vIFBhcnNlIEpTT05cclxuICAgIGxldCBjYW5kaWRhdGVzID0gSlNPTi5wYXJzZShsb2NhdGlvbi5kYXRhc2V0LmNhbmRpZGF0ZXMpO1xyXG4gICAgLy8gUmVtb3ZlIHZhbHVlIGZyb20gY2FuZGlkYXRlcyBhcnJheVxyXG4gICAgY2FuZGlkYXRlcyA9IGNhbmRpZGF0ZXMuZmlsdGVyKGl0ZW0gPT4gaXRlbSAhPT0gdmFsdWUpO1xyXG4gICAgLy8gQ29udmVydCBiYWNrIGludG8gSlNPTiBvYmplY3RcclxuICAgIGxldCByZXN1bHQgPSBKU09OLnN0cmluZ2lmeShjYW5kaWRhdGVzKTtcclxuICAgIC8vIFVwZGF0ZSBkYXRhLWNhbmRpZGF0ZXMgYXR0cmlidXRlIGF0IGxvY2F0aW9uXHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1yb3c9XCInICsgcm93ICsgJ1wiXVtkYXRhLWNvbD1cIicgKyBjb2wgKyAnXCJdJykuZGF0YXNldC5jYW5kaWRhdGVzID0gcmVzdWx0O1xyXG4gICAgXHJcbiAgICAvLyBEZWJ1ZyBsb2dcclxuICAgIGNvbnNvbGUubG9nKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLXJvdz1cIicgKyByb3cgKyAnXCJdW2RhdGEtY29sPVwiJyArIGNvbCArICdcIl0nKSk7XHJcbn1cclxuXHJcbi8vIEV2ZW50IGxpc3RlbmVycyBmb3IgYnV0dG9uc1xyXG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc29sdmUnKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgc29sdmUpO1xyXG5cclxuXHJcbi8vIEl0ZXJhdGUgdGhyb3VnaCBpbnB1dHMgdHJ5aW5nIHRvIHNvbHZlXHJcbmZ1bmN0aW9uIHNvbHZlKCkge1xyXG4gICAgZm9yKGkgPSAxOyBpIDw9IDk7IGkrKykge1xyXG4gICAgICAgIGZvcihqID0gMTsgaiA8PSA5OyBqKyspIHtcclxuICAgICAgICAgICAgaWYoIWlzU29sdmVkKGksIGopKSB7XHJcbiAgICAgICAgICAgIC8vcmVtb3ZlQ2FuZGlkYXRlc0luUm93KShpLCBqKTtcclxuICAgICAgICAgICAgLy9yZW1vdmVDYW5kaWRhdGVzSW5Db2woaSwgaik7XHJcbiAgICAgICAgICAgIC8vcmVtb3ZlQ2FuZGlkYXRlc0luR3JvdXAoaSwgaik7XHJcbiAgICAgICAgICAgIGNoZWNrRm9yU2luZ2xlQ2FuZGlkYXRlKGksIGopO1xyXG5cclxuICAgICAgICAgICAgLy8gRGVidWcgbG9nXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGkudG9TdHJpbmcoKSArIFwiOlwiICsgai50b1N0cmluZygpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLy8gSWYgdGhlcmUgaXMgb25seSBvbmUgY2FuZGlkYXRlIGF0IGxvY2F0aW9uLCBzZXQgdGhhdCBpbnB1dCdzIHZhbHVlIHRvIHRoZSBjYW5kaWRhdGVcclxuZnVuY3Rpb24gY2hlY2tGb3JTaW5nbGVDYW5kaWRhdGUocm93LCBjb2wpIHtcclxuICAgIC8vIFNlbGVjdCBsb2NhdGlvbiBkZXBlbmRpbmcgb24gcm93IGFuZCBjb2xcclxuICAgIGxldCBsb2NhdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLXJvdz1cIicgKyByb3cgKyAnXCJdW2RhdGEtY29sPVwiJyArIGNvbCArICdcIl0nKTtcclxuICAgIC8vIFBhcnNlIEpTT05cclxuICAgIGNhbmRpZGF0ZXMgPSBKU09OLnBhcnNlKGxvY2F0aW9uLmRhdGFzZXQuY2FuZGlkYXRlcyk7XHJcbiAgICBpZiAoY2FuZGlkYXRlcy5sZW5ndGggPT0gMSkge1xyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLXJvdz1cIicgKyByb3cgKyAnXCJdW2RhdGEtY29sPVwiJyArIGNvbCArICdcIl0nKS52YWx1ZSA9IGNhbmRpZGF0ZXNbMF07XHJcbiAgICB9XHJcbn1cclxuXHJcbi8vIFJldHVybnMgdHJ1ZSBpZiBpbnB1dCBoYXMgYSBudW1lcmljYWwgdmFsdWVcclxuZnVuY3Rpb24gaXNTb2x2ZWQocm93LCBjb2wpIHtcclxuICAgIHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1yb3c9XCInICsgcm93ICsgJ1wiXVtkYXRhLWNvbD1cIicgKyBjb2wgKyAnXCJdJykudmFsdWUgPyB0cnVlOiBmYWxzZTtcclxufSJdfQ==
