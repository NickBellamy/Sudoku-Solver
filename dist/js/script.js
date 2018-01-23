function removeCandidate(e,t,a){let d=document.querySelector('[data-row="'+e+'"][data-col="'+t+'"]'),o=JSON.parse(d.dataset.candidates);o=o.filter(e=>e!==a);let n=JSON.stringify(o);document.querySelector('[data-row="'+e+'"][data-col="'+t+'"]').dataset.candidates=n,console.log("Removed candidate "+a+" at "+e+":"+t+"!")}function solve(){for(i=1;i<=9;i++)for(j=1;j<=9;j++)isSolved(i,j)&&removeOtherCandidates(i,j);for(i=1;i<=9;i++)for(j=1;j<=9;j++)isSolved(i,j)||(checkForSingleCandidate(i,j),console.log("Solve attempted at "+i+":"+j+"!"))}function checkForSingleCandidate(e,t){let a=document.querySelector('[data-row="'+e+'"][data-col="'+t+'"]');candidates=JSON.parse(a.dataset.candidates),1==candidates.length&&(document.querySelector('[data-row="'+e+'"][data-col="'+t+'"]').value=candidates[0])}function isSolved(e,t){return!!document.querySelector('[data-row="'+e+'"][data-col="'+t+'"]').value}document.getElementById("solve").addEventListener("click",solve),document.querySelectorAll("input[type=number]").forEach(function(e){e.addEventListener("change",function(){this.dataset.candidates="["+this.value+"]",console.log(this)})});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNjcmlwdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6InNjcmlwdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEV2ZW50IGxpc3RlbmVycyBmb3IgaW5wdXRzXHJcbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzb2x2ZScpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBzb2x2ZSk7XHJcbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2lucHV0W3R5cGU9bnVtYmVyXScpLmZvckVhY2goZnVuY3Rpb24oaW5wKSB7XHJcbiAgICBpbnAuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgdGhpcy5kYXRhc2V0LmNhbmRpZGF0ZXMgPSAnWycgKyB0aGlzLnZhbHVlICsgJ10nO1xyXG5cclxuICAgICAgICAvLyBEZWJ1ZyBsb2dcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzKTtcclxuICAgIH0pO1xyXG59KTtcclxuXHJcblxyXG4vLyBSZW1vdmUgdmFsdWUgZnJvbSBjYW5kaWRhdGVzIGF0IGxvY2F0aW9uIChyb3cvY29sKVxyXG5mdW5jdGlvbiByZW1vdmVDYW5kaWRhdGUocm93LCBjb2wsIHZhbHVlKSB7XHJcbiAgICAvLyBTZWxlY3QgbG9jYXRpb24gZGVwZW5kaW5nIG9uIHJvdyBhbmQgY29sXHJcbiAgICBsZXQgbG9jYXRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1yb3c9XCInICsgcm93ICsgJ1wiXVtkYXRhLWNvbD1cIicgKyBjb2wgKyAnXCJdJyk7XHJcbiAgICAvLyBQYXJzZSBKU09OXHJcbiAgICBsZXQgY2FuZGlkYXRlcyA9IEpTT04ucGFyc2UobG9jYXRpb24uZGF0YXNldC5jYW5kaWRhdGVzKTtcclxuICAgIC8vIFJlbW92ZSB2YWx1ZSBmcm9tIGNhbmRpZGF0ZXMgYXJyYXlcclxuICAgIGNhbmRpZGF0ZXMgPSBjYW5kaWRhdGVzLmZpbHRlcihpdGVtID0+IGl0ZW0gIT09IHZhbHVlKTtcclxuICAgIC8vIENvbnZlcnQgYmFjayBpbnRvIEpTT04gb2JqZWN0XHJcbiAgICBsZXQgcmVzdWx0ID0gSlNPTi5zdHJpbmdpZnkoY2FuZGlkYXRlcyk7XHJcbiAgICAvLyBVcGRhdGUgZGF0YS1jYW5kaWRhdGVzIGF0dHJpYnV0ZSBhdCBsb2NhdGlvblxyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtcm93PVwiJyArIHJvdyArICdcIl1bZGF0YS1jb2w9XCInICsgY29sICsgJ1wiXScpLmRhdGFzZXQuY2FuZGlkYXRlcyA9IHJlc3VsdDtcclxuICAgIFxyXG4gICAgLy8gRGVidWcgbG9nXHJcbiAgICBjb25zb2xlLmxvZyhcIlJlbW92ZWQgY2FuZGlkYXRlIFwiICsgdmFsdWUgKyBcIiBhdCBcIiArIHJvdyArIFwiOlwiICsgY29sICtcIiFcIik7XHJcbn1cclxuXHJcbi8qIHJlbW92ZU90aGVyQ2FuZGlkYXRlcygpIG5vdCBjdXJyZW50bHkgbmVlZGVkXHJcbmJ1dCBJJ20gbGVhdmluZyB0aGUgY29kZSBpbiBoZXJlIGluIGNhc2UgSSBuZWVkIGl0IGxhdGVyISAqL1xyXG5cclxuLy8gLy8gUmVtb3ZlIGFsbCBjYW5kaWRhdGVzIGF0IGxvY2F0aW9uIGV4Y2VwdCB2YWx1ZVxyXG4vLyBmdW5jdGlvbiByZW1vdmVPdGhlckNhbmRpZGF0ZXMocm93LCBjb2wpIHtcclxuLy8gICAgIGxldCB2YWx1ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLXJvdz1cIicgKyByb3cgKyAnXCJdW2RhdGEtY29sPVwiJyArIGNvbCArICdcIl0nKS52YWx1ZTtcclxuLy8gICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLXJvdz1cIicgKyByb3cgKyAnXCJdW2RhdGEtY29sPVwiJyArIGNvbCArICdcIl0nKS5kYXRhc2V0LmNhbmRpZGF0ZXMgPSAnWycgKyB2YWx1ZSArICddJztcclxuXHJcbi8vICAgICAvLyBEZWJ1ZyBsb2dcclxuLy8gICAgIGNvbnNvbGUubG9nKFwiRW1wdGllZCBhbGwgYnV0IFwiICsgdmFsdWUgKyBcIiBhdCBcIiArIHJvdyArIFwiOlwiICsgY29sICtcIiFcIik7XHJcbi8vICAgICBjb25zb2xlLmxvZyhkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1yb3c9XCInICsgcm93ICsgJ1wiXVtkYXRhLWNvbD1cIicgKyBjb2wgKyAnXCJdJykpO1xyXG4vLyB9XHJcblxyXG4vLyBJdGVyYXRlIHRocm91Z2ggaW5wdXRzIHRyeWluZyB0byBzb2x2ZVxyXG5mdW5jdGlvbiBzb2x2ZSgpIHtcclxuICAgIC8vIEl0ZXJhdGUgdGhyb3VnaCBncmlkIHJlbW92aW5nIGNhbGwgY2FuZGlkYXRlcyBpbiBzb2x2ZWQgaW5wdXRzXHJcbiAgICBmb3IoaSA9IDE7IGkgPD0gOTsgaSsrKSB7XHJcbiAgICAgICAgZm9yKGogPSAxOyBqIDw9IDk7IGorKykge1xyXG4gICAgICAgICAgICBpZihpc1NvbHZlZChpLCBqKSkge1xyXG4gICAgICAgICAgICAgICAgcmVtb3ZlT3RoZXJDYW5kaWRhdGVzKGksIGopO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLy8gSXRlcmF0ZSB0aHJvdWdoIGdyaWQgdHJ5aW5nIHRvIHNvbHZlIHVuc29sdmVkIGlucHV0c1xyXG4gICAgZm9yKGkgPSAxOyBpIDw9IDk7IGkrKykge1xyXG4gICAgICAgIGZvcihqID0gMTsgaiA8PSA5OyBqKyspIHtcclxuICAgICAgICAgICAgaWYoIWlzU29sdmVkKGksIGopKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBUT0RPIHJlbW92ZUNhbmRpZGF0ZXNJblJvdykoaSwgaik7XHJcbiAgICAgICAgICAgICAgICAvLyBUT0RPIHJlbW92ZUNhbmRpZGF0ZXNJbkNvbChpLCBqKTtcclxuICAgICAgICAgICAgICAgIC8vIFRPRE8gcmVtb3ZlQ2FuZGlkYXRlc0luR3JvdXAoaSwgaik7XHJcbiAgICAgICAgICAgICAgICBjaGVja0ZvclNpbmdsZUNhbmRpZGF0ZShpLCBqKTtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBEZWJ1ZyBsb2dcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiU29sdmUgYXR0ZW1wdGVkIGF0IFwiICsgaSArIFwiOlwiICsgaiArXCIhXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4vLyBJZiB0aGVyZSBpcyBvbmx5IG9uZSBjYW5kaWRhdGUgYXQgbG9jYXRpb24sIHNldCB0aGF0IGlucHV0J3MgdmFsdWUgdG8gdGhlIGNhbmRpZGF0ZVxyXG5mdW5jdGlvbiBjaGVja0ZvclNpbmdsZUNhbmRpZGF0ZShyb3csIGNvbCkge1xyXG4gICAgLy8gU2VsZWN0IGxvY2F0aW9uIGRlcGVuZGluZyBvbiByb3cgYW5kIGNvbFxyXG4gICAgbGV0IGxvY2F0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtcm93PVwiJyArIHJvdyArICdcIl1bZGF0YS1jb2w9XCInICsgY29sICsgJ1wiXScpO1xyXG4gICAgLy8gUGFyc2UgSlNPTlxyXG4gICAgY2FuZGlkYXRlcyA9IEpTT04ucGFyc2UobG9jYXRpb24uZGF0YXNldC5jYW5kaWRhdGVzKTtcclxuICAgIGlmIChjYW5kaWRhdGVzLmxlbmd0aCA9PSAxKSB7XHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtcm93PVwiJyArIHJvdyArICdcIl1bZGF0YS1jb2w9XCInICsgY29sICsgJ1wiXScpLnZhbHVlID0gY2FuZGlkYXRlc1swXTtcclxuICAgIH1cclxufVxyXG5cclxuLy8gUmV0dXJucyB0cnVlIGlmIGlucHV0IGhhcyBhIG51bWVyaWNhbCB2YWx1ZVxyXG5mdW5jdGlvbiBpc1NvbHZlZChyb3csIGNvbCkge1xyXG4gICAgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLXJvdz1cIicgKyByb3cgKyAnXCJdW2RhdGEtY29sPVwiJyArIGNvbCArICdcIl0nKS52YWx1ZSA/IHRydWU6IGZhbHNlO1xyXG59Il19
