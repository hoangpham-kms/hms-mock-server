# hms-mock-server
This is mock server for back end API Restful

# Start server: npm start

http://192.168.59.125:3000/

# Add an API endpoint:   configure url and json file as the result, for example

\public.api.js

      const API = [
        { url: '/booking', method : 'post', result: './database/api/booking/post_result.json', statusCode: 200},
        { url: '/booking/*', method : 'put', result: './database/api/booking/put_result.json', statusCode: 200},
      ]

\database\api\booking\put_result.json

      {
        "isSuccess": true,
        "data": {
          "isPutOk": "yes"
        }
      }


THAT's ALL.
