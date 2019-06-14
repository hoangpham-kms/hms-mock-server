const fs = require('fs')
const cheerio = require('cheerio')

const bookingAPI = fs.readFileSync('booking.html')
const $ = cheerio.load(bookingAPI)//const $ = cheerio.load('<ul id="fruits">...</ul>')

const firstAPI = $('#operations-Booking-UpdateBooking').text()
console.log(`firstAPI=${firstAPI}`)