var xhr = new XMLHttpRequest();
xhr.open('GET', 'pets.json', true);
xhr.onreadystatechange = function() {
if (xhr.readyState === 4 && xhr.status === 200) {
var petObject = JSON.parse(xhr.responseText);
var petTable = `<center><table id="petsInfo">
<tr>
<th>Name</th>
<th>Animal Type</th>
<th>Gender</th>
<th>Age</th>
<th>Weight</th>
<th>Favorite Food</th>
</tr>`;
for (var i=0; i<petObject.pets.length; i++){
petTable+='<tr> <td>'+petObject.pets[i].fname+'</td>';
petTable+='<td>'+petObject.pets[i].type+'</td>';
petTable+='<td>'+petObject.pets[i].gender+'</td>';
petTable+='<td>'+petObject.pets[i].age+'</td>';
petTable+='<td>'+petObject.pets[i].weight+'</td>';
petTable+='<td>'+petObject.pets[i].favoritefood+'</td>
</tr>';
      }
petTable+='</table></center>';
document.getElementById('content').innerHTML=petTable;
   }
}
xhr.send();
