const title = document.getElementById('title')
const createBtn = document.getElementById('create')
const listElement = document.getElementById('list')


const notes = ['xmmm', 'dfdfd']


function list(element){
    return `
    <li
      class="list-group-item d-flex justify-content-between align-items-center"
    >
      <span>${element}</span>
      <span>
        <span class="btn btn-small btn-success">&check;</span>
        <span class="btn btn-small btn-danger">&times;</span>
      </span>
    </li>
    
    `
    
}

function render(){
    // for(let i = 0; i < notes.length; i++){
    //     listElement.insertAdjacentHTML('beforeend', list(notes[i]))
    // }

    for (let note of notes){
        listElement.insertAdjacentHTML('beforeend', list(note))
    }
        
}
render()


createBtn.onclick = () =>{
    if(!title.value) {
        return
    }
    listElement.insertAdjacentHTML('beforeend', list(title.value))
    title.value = ''

}