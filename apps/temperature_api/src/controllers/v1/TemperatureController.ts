import { JsonController, Get, QueryParam } from 'routing-controllers';
import 'reflect-metadata';
import { dataSource } from '../../db/dataSource';
import { Sensor } from '../../db/entity/Sensor';

const repository = dataSource.getRepository(Sensor)

const getRandomTemperature = (): number => {
  return Math.ceil(Math.random() * 27);
}

@JsonController('/api/v1')
export class TemperatureController {
  @Get('/temperature')
  async getTemperature (@QueryParam('location') location?: string, @QueryParam('sensorId') sensorId?: string) {
    console.log('Requested location %s, requested sensor %s', location ?? '-', sensorId ?? '-');
    
    if (!location) {
      switch (sensorId) {
        case "1":
          location = "Living Room"
          break;
        case "2":
          location = "Bedroom"
          break;
        case "3":
          location = "Kitchen"
          break;
        default:
          location = "Unknown"
          break;
      }
    }

    if (!sensorId) {
      switch (location) {
        case "Living Room":
          sensorId = "1"
        case "Bedroom":
          sensorId = "2"
        case "Kitchen":
          sensorId = "3"
        default:
          sensorId = "0"
      }
    }

    const data = await repository.findOne({
      where: { id: +sensorId, location }
    })

    return {
      ...data,
      temperature: getRandomTemperature(),
    };
  }
}