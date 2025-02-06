import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class WeatherService {
  private readonly BASE_URL = 'https://api.open-meteo.com/v1/forecast';

  async getWeather(latitude: number, longitude: number) {
    try {
      const response = await axios.get(this.BASE_URL, {
        params: {
          latitude,
          longitude,
          hourly: 'temperature_2m',
        },
      });
      return response.data;
    } catch (error) {
      throw new HttpException('Failed to fetch weather data', HttpStatus.BAD_REQUEST);
    }
  }
}
