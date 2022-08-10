'use strict'     //https://www.youtube.com/watch?v=_HEIqE_qqbQ

const openModal = () => document.getElementById('modal')
    .classList.add('active')

const closeModal = () =>  {
    clearFields()
    document.getElementById('modal').classList.remove('active')
}

//CRUD - create read update delete

const getLocalStorage = () => JSON.parse(localStorage.getItem('db_client')) ?? [] //transformar em objeto primeiro e o ?? é para verificar se for nulo trazer um array vazio
const setLocalStorage = (dbClient) => localStorage.setItem ("db_client", JSON.stringify(dbClient))//enviar dados para o LocalStorage (setItem). Depois precisa transformar o objeto em uma string

//CRUD - CREAT
const createClient = (client) => {
    const dbClient = getLocalStorage()
    dbClient.push (client) //push para adicionar elementos dentro do array
    setLocalStorage(dbClient)
    }

//CRUD - READ
const readClient = () => getLocalStorage()

//CRUD - UPDATE
const updateClient = (index, client) => {
    const dbClient = readClient()
    dbCLient[index] = client
    setLocalStorage(dbClient)
}

//CRUD - DELETE
const deleteClient = (index) => {
    const dbClient = readClient()
    dbClient.splice(index,1)
    setLocalStorage(dbClient)
}

const isValidFields = () => {
    return document.getElementById('form').reportValidity()

}

const clearFields = () =>{
    const fields = document.querySelectorAll('.modal-field')
    fields.forEach(field => field.value = "") //forEach faz uma varredura em todos campos do form e a continuaçao da const é pra deixar em branco
}

// INTERAÇAO COM O LAYOUT
const saveClient = () => {
    if (isValidFields()) {
        const client ={
            nome: document.getElementById('nome').value,
            email: document.getElementById('email').value,
            celular: document.getElementById('celular').value,
            cidade: document.getElementById('cidade').value
        }
        createClient(client)
        updateTable()
        closeModal()
    }

}

const createRow = (client, index) => {
    const newRow = document.createElement('tr')
    newRow.innerHTML = `
        <td>${client.nome}</td>
        <td>${client.email}</td>
        <td>${client.celular}</td>
        <td>${client.cidade}</td>
        <td>
            <button type="button" class="button green" id="edit-${index}">Editar</button>
            <button type="button" class="button red" id="delete-${index}">Excluir</button>
        </td>
    `
    document.querySelector('#tableClient>tbody').appendChild(newRow)
}

const clearTable = () => {
    const rows = document.querySelectorAll('#tableClient>tbody tr')
    rows.forEach(row => row.parentNode.removeChild(row))
}
const updateTable = () => {
    const dbClient = readClient()
    clearTable()
    dbClient.forEach(createRow) //forEach para pegar cada um dos clientes
}

const fillFields = (client) => {
    document.getElementById('nome').value = client.nome
    document.getElementById('email').value = client.email
    document.getElementById('celular').value = client.celular
    document.getElementById('cidade').value = client.cidade
 }

const editClient = (index) => {
    const client = readClient()[index]
    fillFields(client)
    openModal()
}

const editDelete = (event) => {
    if (event.target.type == 'button') {
        const [action, index] = event.target.id.split('-')

        if (action == 'edit') {
            editClient(index)
        } else {
            console.log("deletando clientes")
        }        
    }
}
updateTable()

//Eventos
document.getElementById('cadastrarCliente')
    .addEventListener('click', openModal)

document.getElementById('modalClose')
    .addEventListener('click', closeModal)

document.getElementById('salvar')
    .addEventListener('click', saveClient)

document.querySelector('#tableClient>tbody')
    .addEventListener('click', editDelete)









