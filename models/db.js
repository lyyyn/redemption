const mongoose = require('mongoose');
const MONGO_SERVER = process.env.MONGO_SERVER || 'mongodb+srv://dbLina:jBdf48k6DlIEp3ZK@clstrlin001-ldhm1.mongodb.net/tohtonku?retryWrites=true&w=majority';

module.exports = {
    async connect() {
        try {
            await mongoose.connect(
                `${MONGO_SERVER}`, {
                    useNewUrlParser: true
                }
            )
            console.log(`Connecting to db on ${MONGO_SERVER}`);
        } catch {
            console.log(`Error connecting to db: ${err}`);
        }
    },
    disconnect() {
        return mongoose.connection.close(() => {
            console.log('Database connection closed');
        })
    }
}