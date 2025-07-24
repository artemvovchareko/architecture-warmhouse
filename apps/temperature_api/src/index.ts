import { createExpressServer } from 'routing-controllers';
import { dataSource } from './db/dataSource';
import { TemperatureControllerV1 } from './controllers';

const app = createExpressServer({
  controllers: [TemperatureControllerV1],
});

const port = process.env.TEMPERATURE_API_PORT;

app.listen(port, async () => {
  console.log(`Env variables: `, process.env)
  
  await dataSource.initialize();
  console.log(`Running on port ${port}`)
});
