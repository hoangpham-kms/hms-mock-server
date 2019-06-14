const API = [
  { url: '/api/any', method : 'get', result: './database/api/any/get_result.json', statusCode: 200},
  { url: '/api/any', method : 'post', result: './database/api/any/post_result.json', statusCode: 200},
  { url: '/api/any', method : 'put', result: './database/api/any/put_result.json', statusCode: 200},
  { url: '/booking', method : 'post', result: './database/api/booking/post_result.json', statusCode: 200},
  { url: '/booking/*', method : 'put', result: './database/api/booking/put_result.json', statusCode: 200},
]

module.exports = API