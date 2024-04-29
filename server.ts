import { config } from './config/config';
import app from './src/app';

const startServer = () =>{
    const port = config.port || 3020;

    app.listen(port,()=>{
        console.log(`listening to port ${port}`)
    })
}

startServer();
