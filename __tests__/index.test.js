const request = require('supertest')
const app = require('../app')

test('it should work', done => {
  request(app)
    .get('/')
    .then(response => {
      expect(response.status).toBe(200)
      expect(response.text).toBe('OK')
      done()
    })
})
