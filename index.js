const app = require('./src/app.js');

app.listen(app.get('port'), () => {
    console.log("servidor iniciado", app.get("port"));
});