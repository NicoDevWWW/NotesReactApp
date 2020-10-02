/**
 * @author Nicolas SQUEREN <nicosqueren@gmail.fr>
 * @copyright Copyright (c) 2020 Moulinroty (https://www.moulinroty.com)
 * @link https://www.moulinroty.com
 */
import jwt_decode from "jwt-decode";
const URL = 'https://api.myidea.fr/v1/'
var globalparams = {
	cache: 'default',
	headers: {
		'Content-Type': 'application/json; charset=UTF-8'
	}
}



export function getNotes () {
	return new Promise((resolve, reject) => {
		window.fetch(URL + 'notes')
			.then((response) => response.json())
			.then((result) => {
				console.log('Réponse API getNotes', result)
				resolve(result)
			})
			.catch((error) => {
				console.error(error)
				reject(error)
			})
	})
}

export function createNote(note){
	return new Promise((resolve, reject) => {
		if (note.title && note.description){
			var body = {
				title : note.title,
				description: note.description
			}
			var params = { method: 'POST',
				mode: 'cors',
				...globalparams,
				body: JSON.stringify(body)
			};
			fetch('https://api.myidea.fr/v1/notes', params)
				.then(response => {
					console.log(response)
					resolve()
					setTimeout(window.location.reload(), 200)
				})
				.catch(error => reject(error))
		}else{
			reject('Informations manquantes')
		}
	})
}

export function DeleteNote (id){
	const params = {
		...globalparams,
		method: 'DELETE'

	};
	return new Promise((resolve, reject) => {
			fetch(URL + "notes/" + id, params)
				.then(response => {
					console.log(response)
					resolve()
					setTimeout(window.location.reload(), 200)
				})
				.catch(error => reject(error))
	})
}

export function updateNote (note){
	return new Promise((resolve, reject) => {
		if (note){
			var noteId = note.id
			delete note.id
			var body = {
				title: note.title,
				description: note.description
			}
			var params = {
				...globalparams,
				method: 'PATCH',
				body: JSON.stringify(body)
			}
			return new Promise((resolve, reject) => {
				fetch(URL + "notes/" + noteId, params)
					.then(response => {
						console.log(response)
						resolve()
						setTimeout(window.location.reload(), 200)
					})
					.catch(error => reject(error))
			})
		}else{
			reject('Note manquante')
		}
	})
}
export function FavoriteNote (note) {
	return new Promise((resolve, reject) =>{
		if (note){
			var noteId = note.id
			var body = {
				isFavorite: note.isFavorite
			}
			var params = {
				...globalparams,
				method: 'PATCH',
				mode: 'cors',
				body: JSON.stringify(body)
			}
			return new Promise((resolve, reject) => {
				fetch(URL + "notes/" + noteId, params)
					.then(response => {
						console.log(response)
						console.log(note)
						setTimeout(window.location.reload(), 200)
					})
					.catch(error => reject(error))
			})
		}else{
			reject('Note manquante')
		}
	})
}
export function registerUser (user) {
	return new Promise((resolve, reject ) => {
		if (user.username && user.email && user.password){
			var body = {
				name: user.username,
				password: user.password,
				email: user.email
			}
			var params = {
				...globalparams,
				method: 'POST',
				mode: 'cors',
				body: JSON.stringify(body)
			}
			fetch(URL + 'auth/register', params )
				.then(response => response.json())
				.then(response => {
					resolve(response)
					// setTimeout(window.location.reload(), 200)
				})
				.catch(error => reject(error))
		}else{
			reject('Informastions manquantes')
		}

	})
}
export function login (credentials) {
	return new Promise((resolve, reject ) => {
		if (credentials.email && credentials.password){
			var body = {
				password: credentials.password,
				email: credentials.email
			}
			var params = {
				...globalparams,
				method: 'POST',
				mode: 'cors',
				body: JSON.stringify(body)
			}
			fetch(URL + 'auth/login', params )
				.then(response => response.json())
				.then(response => {
					if (response.tokens &&
						response.tokens.access &&
						response.tokens.access.token){
						localStorage.setItem('token', response.tokens.access.token)
					}
					resolve(response)
					// setTimeout(window.location.reload(), 200)
				})
				.catch(error => reject(error))
		}else{
			reject('Informastions manquantes')
		}

	})
}
export function getProfil (){
	return new Promise((resolve, reject) => {
		const token = localStorage.getItem('token')
		if (token){
			const decoded = jwt_decode(token)
			const Userid = decoded.sub
			var params = {
				...globalparams,
				method: 'GET',
				headers: {
					...globalparams.headers,
					'Authorization': 'Bearer ' + token
				}
			}
			fetch(URL + 'users/' + Userid, params)
				.then(response => response.json())
				.then(result => {
					resolve(result)
				})
		}else{
			console.log('Sorry No token')
			reject('No TOKEN')
		}

	})
}
