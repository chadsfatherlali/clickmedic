import flamelink from 'flamelink'
import { Plugin } from '@nuxt/types'

let firebaseApp
let flamelinkInstance: any

if (process.server) {
  const admin = require('firebase-admin')
  const serviceAccount = require('./../clickmedic-ecuador-firebase-adminsdk-zhioe-76f56a22cf.json')
  const firebaseConfig = {
    credential: admin.credential.cert(serviceAccount),
    databaseURL: 'https://clickmedic-ecuador.firebaseio.com',
    storageBucket: 'clickmedic-ecuador.appspot.com'
  }

  firebaseApp = admin.initializeApp(firebaseConfig, Date.now().toString())

  const config:any = {
    firebaseApp,
    isAdminApp: process.server,
    dbType: 'cf'
  }

  flamelinkInstance = flamelink(config)
}

declare module '@nuxt/types' {
  interface Context {
    $flamelink(message: string): void
  }
}

const flamelinkPlugin: Plugin = (context) => {
  context.$flamelink = flamelinkInstance
}

export default flamelinkPlugin
