class Weather {
  constructor(city, state){
    this.apiKey = '80d0420c1b76cc4567cdaf82fee2b7d9';
    this.city = city;
    this.state = state;
  }
  // Fetch weather from API
  async getWeather() {
    const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.state}&APPID=${this.apiKey}`);

    const responseData = await response.json();
    return responseData.main;
  }

  // Change weather location
  changeLocation(city, state) {
    this.city = city;
    this.state = state;
  }
}