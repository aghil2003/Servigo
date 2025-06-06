import Worker from "../model/Worker.js";
import axios from 'axios';


export const addWorker =async (req, res) => {
  try {
    console.log(req.body,"body")
    const { username, email, password, photo, WorkeField, location } = req.body;

    if (!username || !email || !password || !WorkeField || !location) {
      return res.status(400).json({ message: "Please provide all required fields." });
    }

    const worker =  Worker({ username, email, password, photo, WorkeField, location });
    await worker.save();

    res.status(201).json({ message: "Worker added", worker });
    console.log("Worker data saved");
  } catch (error) {
    console.error("Error saving worker:", error);
    res.status(500).json({ message: "Something went wrong", error });
  }
}



export const serviceWorker = async (req, res) => {
  try {
    const { service } = req.params; 
    const lat = req.query.lat;
    const lon = req.query.lon;

    console.log("Lat, Lon:", lat, lon);

    if (!lat || !lon) {
      return res.status(400).json({ error: 'Latitude and longitude are required' });
    }

    if (!service) {
      return res.status(400).json({ error: "Service is required" });
    }

    let pin = "";       
    let district = "";   

    try {
      const response = await axios.get('https://nominatim.openstreetmap.org/reverse', {
        params: {
          format: 'json',
          lat,
          lon,
        },
        headers: {
          'User-Agent': 'reverse-geocode-app',
        },
      });

      pin = response.data.address.postcode;
      district = response.data.address.state_district;

      console.log("Reverse location → PIN:", pin, "District:", district);
    } catch (error) {
      console.error('Reverse geocoding error:', error.message);
      return res.status(500).json({ error: 'Failed to get location from coordinates' });
    }

    let workers = [];

if (pin) {
  workers = await Worker.find({ WorkeField: service, postcode: pin });
}

if (!workers.length && district) {
  workers = await Worker.find({ WorkeField: service, city: district });
}
console.log(workers)

res.status(200).json({ workers });
    res.status(200).json({ workers });
  } catch (error) {
    console.error("Error fetching workers:", error);
    res.status(500).json({ message: "Something went wrong", error });
  }
};
