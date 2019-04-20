
// import { API_URL_DEV, API_URL_PROD } from './Urls'

// class Rest {
// 	constructor() {
// 		this.API_URL = API_URL_DEV
// 	}

// 	withQuery(url, params) {
// 		let query = Object.keys(params)
// 			.filter(k => !!params[k])
// 			.map(k => `${encodeURIComponent(k)}=${encodeURIComponent(params[k])}`)
// 			.join('&')
// 		url += (url.indexOf('?') === -1 ? '?' : '&') + query
// 		return url
// 	}


// 	async cache(auth, update, path, method) {
// 		const cacheData = sessionStorage.getItem(path)
// 		if (cacheData && !update) {
// 			return JSON.parse(cacheData)
// 		}

// 		const data = await this.send(auth, path, method)
// 		sessionStorage.setItem(path, JSON.stringify(data))
// 		return data
// 	}

// 	async send(auth, sid, path, method, body, params) {
// 		const startTime = (new Date()).getTime()
// 		const headers = {}
// 		headers['Accept'] = 'application/json'
// 		headers['Content-Type'] = 'application/json'
// 		if (auth && UserStore.getToken) {
// 			headers['JWT'] = UserStore.getToken
// 		}
// 		if (auth && UserStore.agent_token && path.includes('agent')) {
// 			headers['JWT'] = UserStore.agent_token
// 		}
// 		let url = `${this.API_URL}${path ? path : ''}`
// 		if (params) {
// 			url = this.withQuery(url, params)
// 		}
// 		try {
// 			let sId = UserStore.getSid
// 			let response = await fetch(url, {
// 				method: method,
// 				headers: headers,
// 				body: body != null ? JSON.stringify(sid ? { ...body, sId } : body) : sid ? { sId } : null,
// 				timeout: 10000
// 			})

// 			const endTime = (new Date()).getTime()
// 			cpnsole.log('endTime', endTime)

// 			if (response.status == 401) {
// 				return Promise.reject(response)
// 			}
// 			if (response.status == 400) {
// 				return Promise.reject(response)
// 			}
// 			if (response.status == 404) {
// 				return Promise.reject(response)
// 			}
// 			if (response.status == 500) {
// 				return Promise.reject(response)
// 			}
// 			if (response.status == 502) {
// 				return Promise.reject(response)
// 			}
// 			let responseJson = response.headers.map['content-type'].includes('application/json') ? await response.json() : response.statusText

// 			return responseJson
// 		} catch (error) {
// 			console.log(error)
// 		}
// 	}
// }

// const rest = new Rest()

// export default rest