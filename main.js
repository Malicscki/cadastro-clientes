'use strict'

const openModal = () => document.getElementById('modal')
    .classList.add('active')

const closeModal = () => document.getElementById('modal')
    .classList.remove('active')

const tempClient = {
    nome: "Joao",
    email: "luiz.malicscki@gmail.com",
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

//Eventos
document.getElementById('cadastrarCliente')
    .addEventListener('click', openModal)

document.getElementById('modalClose')
    .addEventListener('click', closeModal)


    //https://www.youtube.com/watch?v=_HEIqE_qqbQ