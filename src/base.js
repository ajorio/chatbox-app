import Rebase from 're-base'
import firebase from 'firebase/app'
import 'firebase/database'

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCiHqSjqNhxnFg-Z7-zFSLKZBfgfFIxH2M",
    authDomain: "chatbox-app-55bdb.firebaseapp.com",
    databaseURL: "https://chatbox-app-55bdb.firebaseio.com"
})

const base = Rebase.createClass(firebase.database())

export { firebaseApp }

export default base
