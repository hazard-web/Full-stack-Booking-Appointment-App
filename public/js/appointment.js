



  
window.addEventListener('DOMContentLoaded', () => {
  fetchData();
  
});

async function fetchData() {
   
 await axios.get('http://localhost:8000/user/get-users')
    .then(responses => {
      console.log(responses);
      const appointments = responses.data.allUsers;
      console.log(appointments[0])
      for (let i = 0; i < appointments.length; i++) {
        addAppointmentToList(appointments[i]);
      }
    })
    .catch(error => {
      console.log(error);
    });
}

function addAppointmentToList(appointment) {
  const { name, email, phone } = appointment;

  const liEle = document.getElementById('items');
  const li = document.createElement('li');
  li.appendChild(document.createTextNode(name));
  li.appendChild(document.createTextNode(" "));
  li.appendChild(document.createTextNode(email));
  li.appendChild(document.createTextNode(" "));
 
 
  // Delete button
  const btnn = document.createElement('button');
  btnn.className = "btn btn-danger";
  btnn.appendChild(document.createTextNode('Delete'));
  li.appendChild(btnn);

  li.appendChild(document.createTextNode(" "));

  // Edit button
  const edit = document.createElement('button');
  edit.className = "btn btn-primary";
  edit.appendChild(document.createTextNode('Edit'));
  li.appendChild(edit);

  liEle.appendChild(li);

  // Remove element function
  btnn.addEventListener('click', removeAppointment);

  function removeAppointment() {

   let id = appointment.id;
  
    axios.delete('http://localhost:8000/user/delete-user/'+`${id}`)
     .then(response => console.log(response))
     .catch(err => console.log(err))
        liEle.removeChild(li);
  }

  edit.addEventListener('click', editAppointment);

  function editAppointment() {

      let id = appointment.id;
      
    document.getElementById('name').value = name;
    document.getElementById('mail').value = email;
    document.getElementById('teln').value = phone;

    axios.delete('http://localhost:8000/user/delete-user/'+`${id}`)
     .then(response => console.log(response))
     .catch(err => console.log(err))


   
    liEle.removeChild(li);
  }
}




     




     
