const users = [{
    fullname: 'John Doe',
    age: 30,
    email: 'admin@admin.com',
    id: '1',
    active: true,
    password: 'admin',
    bornDate: 725846400000,
    location: 'La Luna',
    image: 'https://oyster.ignimgs.com/mediawiki/apis.ign.com/mario-kart-for-wii-u/7/71/Mk8iconyoshi.png?width=1280',
    role: 'ADMIN_ROLE'
  },
  {
    fullname: 'Jane Doe',
    age: 25,
    email: 'jane.doe@example.com',
    id: '2',
    active: false,
    password: 'password456',
    bornDate: new Date('1998-05-05').getTime(),
    location: 'Mendoza',
    image: 'https://oyster.ignimgs.com/mediawiki/apis.ign.com/mario-kart-for-wii-u/f/f5/Mk8icondaisy.png?width=1280',
    role: 'CLIENT_ROLE'
  },
  {
    fullname: 'Alice Johnson',
    age: 35,
    email: 'alice.johnson@example.com',
    id: '3',
    active: true,
    password: 'password789',
    bornDate: new Date('1988-08-08').getTime(),
    location: 'Mendoza',
    image: 'https://oyster.ignimgs.com/mediawiki/apis.ign.com/mario-kart-for-wii-u/1/1d/Mk8icontoadette.png?width=325'
  },
  {
    fullname: 'Michael Smith',
    age: 40,
    email: 'michael.smith@example.com',
    id: '4',
    active: false,
    password: 'password101',
    bornDate: new Date('1983-04-10').getTime(),
    location: 'San Luis',
    image: 'https://oyster.ignimgs.com/mediawiki/apis.ign.com/mario-kart-for-wii-u/d/d1/Mk8iconrosalina.png?width=1280'
  },
  {
    fullname: 'Emily Johnson',
    age: 28,
    email: 'emily.johnson@example.com',
    id: '5',
    active: true,
    password: 'password202',
    bornDate: new Date('1995-02-15').getTime(),
    location: 'CÃ³rdoba',
    image: 'https://oyster.ignimgs.com/mediawiki/apis.ign.com/mario-kart-for-wii-u/5/59/Mk8iconpeach.png?width=325'
  },
  {
    fullname: 'Daniel Lee',
    age: 34,
    email: 'daniel.lee@example.com',
    id: '6',
    active: false,
    password: 'password303',
    bornDate: new Date('1989-07-07').getTime(),
    location: 'Buenos Aires',
    image: 'https://oyster.ignimgs.com/mediawiki/apis.ign.com/mario-kart-for-wii-u/b/bf/Mk8iconmario.png?width=325'
  },
];



const tableHTML=document.getElementById("table-container");
console.log(tableHTML.innerHTML);

const tableBodyHTML=document.getElementById
("table-body");

// console.dir(tableBodyHTML);

function renderUsers(arrayUsers){ 

//cada vez que llamamos la funcion renderusers linpiamos el body y volvemos a pintar

tableBodyHTML.innerHTML= '';

arrayUsers.forEach((user) =>{
   tableBodyHTML.innerHTML += `<tr>
                      <td class="user-image">
                          <img src= "${user.image}" alt="${user.image} avatar">
                      </td>
                      <td class="user-name">${user.fullname}</td>
                      <td class="user-email">${user.email}</td>
                      <td class="user-location">${user.location}</td>
                      <td class="user-actions"></td>
                    </tr>`
})

}

renderUsers(users)

function inputsearch(evt){
      //tenemos que tomar lo que la persona a escrito en el input
      console.log(evt.target.value)
      const search=evt.target.value.toLowercase()
      //luego deberiamos recorer el arrayy filtrar por todosaquellos usuarioscuyo nombre coisidan con la busqueda
      //deveriamos pintar la tabla de nuevo con los resultados de la busqueda
      const filteredUsers=users.filter((urs)=>{
        //filrter para devolver un usuario yo tengo que asegurarme de retornar un true bajo sierta condicion
        if (usr.fullname.toLowercase.includes(search)) {
          return true;
        }
        return false;
        
      })
      renderUsers(filteredUsers)
}

function sortAsc(){
  const collador=new Intl.collador(undefined,{sensitivity:"base"})
// metodo 2
  user.sort((a,b) =>{
    return collador.compare(b.fullname, a.fullname)


    function sortAsc(){
      const collador=new Intl.collador(undefined,{sensitivity:"base"})
    // metodo 2
      user.sort((a,b) =>{ 
        return collador.compare(a.fullname, b.fullname)
      }
      )}
     
    

    // // metodo 1

    // if (b.fullname.toLowercase() < b.fullname.toLowercase()){
    //   return 1;
    // }

    // if (a.fullname.toLowercase() < a.fullname.toLowercase()){
    //   return -1;
    // }

    // return 0
  })
}






