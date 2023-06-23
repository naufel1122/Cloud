
import express from 'express'
import cors from 'cors';

const app = express()
app.use(cors())

//http://192.168.1.106:3000
app.get('/', (req, res) => {
  console.log('Hello World!', new Date());
  res.send('Hello World!' + new Date());
})
app.get('/profile', (req, res) => {
  console.log('This is Profile!', new Date());
  res.send('This is Profile!' + new Date());
})
app.get('/weather/:CityName', (req, res) => {
  console.log('This is Profile!', new Date());

  let weatherData = {
    karachi: {
      temp: 30,
      humidity: 50,
      pressure: 90,
      wind: 80,
      clouds: 900
    },
    Lahore: {
      temp: 35,
      humidity: 50,
      pressure: 70,
      wind: 80,
      clouds: 60
    }
  }

  let userInputCityName = req.params.CityName.toLowerCase();
console.log("userInputCityName :", userInputCityName);
  let weatherDataToSend = weatherData.userInputCityName

  if (weatherDataToSend) {
    res.send(weatherDataToSend);
  }
  else {
    res.status(404).send(`Weather Data is not available for ${req.params.CityName}`);
  }

  res.send();
})

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
  console.log(`Example server listening on port ${PORT}`)
})