const admin = require("firebase-admin");
const serviceAccount = require("./serviceAccount.json");

if (!serviceAccount.project_id) throw new Error('Falta data de el proyecto.')

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const auth = admin.auth()

auth
  .setCustomUserClaims('id', { admin: true })
  .then(res => {
    console.log(res)
  })

// auth.getUser('id')
// .then((user) => {
//   console.log(user.customClaims['admin'])
// })