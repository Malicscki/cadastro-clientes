'use strict'     //https://www.youtube.com/watch?v=_HEIqE_qqbQ

const openModal = () => document.getElementById('modal')
    .classList.add('active')

const closeModal = () => document.getElementById('modal')
    .classList.remove('active')

const tempClient = {
    nome: "Nicolas",
    email: "nnicolas@gmail.com",
    celular: "47984759767",
    cidade: "Blumenau SC"
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
        clearFields()
        closeModal()
    }

}


//Eventos
document.getElementById('cadastrarCliente')
    .addEventListener('click', openModal)

document.getElementById('modalClose')
    .addEventListener('click', closeModal)

document.getElementById('salvar')
    .addEventListener('click', saveClient)









