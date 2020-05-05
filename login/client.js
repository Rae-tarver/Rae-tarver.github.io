var form = document.querySelector('#form');

form.addEventListener('submit', (e)=>{
    e.preventDefault();
    const data = new FormData(form)
    const name = data.get('name');
    const pass = data.get('password');
    alert('Hi !!! ' +  name)
})