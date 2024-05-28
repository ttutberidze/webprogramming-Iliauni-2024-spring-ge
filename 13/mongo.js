const {MongoClient} = require('mongodb')

const uri = 'mongodb+srv://iliauni:iliauni@cluster0.8dd2xz5.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
const client = new MongoClient(uri)

const main = async () => {
    await client.connect()
    const db = await client.db('task-management')
    const users =  await db.collection('users')
    users.insertOne({
        skills: ['JS', 'NODE']
    })
}

main()