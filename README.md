# mail-api
An easy mail client exposing a mail send functionality over a RESTful interface.

# Setup
Start the server with 
```
node server
```

The mail API is configured to listen on port 3030. 
You can easily change that in the `server.js` or add a `PORT` variable to the environment.

# Run it
The mail-api server is accessible under `localhost:3030/api/email` and expects an object with the following structure:
```
{
  "name": "Sender Name",
  "email: "sender@your-domain.com",
  "subject": "I want to tell you something",
  "message": "This was sent by my mail-api"
}
```