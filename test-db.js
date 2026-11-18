const sequelize = require('./src/db/sequelize');

sequelize.authenticate()
    .then(() => console.log('Kapcsolat OK'))
    .catch((error) => console.log('Hiba', error.message))
    .finally(() => sequelize.close());