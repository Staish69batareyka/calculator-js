const title = document.getElementById('title')
const createBtn = document.getElementById('create')
const listElement = document.getElementById('list')


const notes = [
    {
        title: 'xmmm',
        completed: false
    }, 
    {
        title: 'dgdggdgd',
        completed: true
    }]


listElement.onclick = (e) =>{
    if(e.target.dataset.index) {
        const index = parseInt(e.target.dataset.index)
        const type = e.target.dataset.type
        if (type === 'toggle'){
            notes[index].completed = !notes[index].completed
        } else if (type === 'remove'){
            notes.splice(index, 1)
        }
        render()
    }
    
}

function list(element, ind){
    return `
    <li
      class="list-group-item d-flex justify-content-between align-items-center"
    >
      <span class="${element.completed ? 'text-decoration-line-through' : ''}">${element.title}</span>
      <span>
        <span class="btn btn-small btn-${element.completed ? "warning" : "success"}" data-type="toggle" data-index="${ind}">&check;</span>
        <span class="btn btn-small btn-danger" data-type="remove" data-index="${ind}">&times;</span>
      </span>
    </li>
    
    `  
}

function render(){
    listElement.innerHTML = ''
    for (let i = 0; i < notes.length; i++){
        listElement.insertAdjacentHTML('beforeend', list(notes[i], i))
    }
        
}
render()


createBtn.onclick = () =>{
    if(!title.value) {
        return
    }
    const newNote = {
        title: title.value,
        completed: false
    }
    notes.push(newNote)
    render()
    title.value = ''

}