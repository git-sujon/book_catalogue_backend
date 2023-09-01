import app from './app'
import { Server } from 'http'
import config from './config'
const port = config.port

process.on('uncaughtException', error => {
  console.log('Error', error)
  process.exit(1)
})

let server: Server

async function connectToServer() {
  try {

    server = app.listen(port, () => {
      console.log(`listening on port ${port}`)
    })

    if (server) {
        server.close(() => {
          console.log('Server closed');
        });
      }
      process.exit(1);
    


  } catch (error) {
    console.error('Database connection Error:', error)
  }

  process.on('unhandledRejection', error => {
    console.log('unhandledRejection , Server is closed...')
    if (server) {
      server.close(() => {
        console.log('Error', error)
      })
    }
  })
}

connectToServer().catch(err => console.error(err))

process.on('SIGTERM', () => {
  console.log('SIGTERM is received')
  if (server) {
    server.close()
  }
})
