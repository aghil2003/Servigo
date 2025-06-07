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
    const { lat, lon, page  } = req.query;
    const  limit = 4

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
        params: { format: 'json', lat, lon },
        headers: { 'User-Agent': 'reverse-geocode-app' },
      });

      pin = response.data?.address?.postcode || "";
      district = response.data?.address?.state_district || "";

      console.log("Reverse location → PIN:", pin, "District:", district);
    } catch (error) {
      console.error('Reverse geocoding error:', error.message);
      return res.status(500).json({ error: 'Failed to get location from coordinates' });
    }

    let filter = {};

    if (pin) {
      filter = { WorkeField: service, postcode: pin };
    }

    const pinWorkersCount = await Worker.countDocuments(filter);
    if (!pinWorkersCount && district) {
      filter = { WorkeField: service, city: district };
    }

    const skip = (parseInt(page) - 1) * parseInt(limit);
    const total = await Worker.countDocuments(filter);
    const workers = await Worker.find(filter).skip(skip).limit(parseInt(limit));

    console.log(`Workers found: ${workers.length}`);

    return res.status(200).json({
      workers,
      page: parseInt(page),
      totalPages: Math.ceil(total / limit),
      totalResults: total,
    });

  } catch (error) {
    console.error("Error fetching workers:", error);
    return res.status(500).json({ message: "Something went wrong", error });
  }
};
  

export const searchWorker = async (req, res) => {
  try {
    const { service, search } = req.params; // from route
    const lat = req.query.lat;
    const lon = req.query.lon;
    const page = parseInt(req.query.page || 1);
    const limit = 4;

  
    if (!lat || !lon) {
      return res.status(400).json({ error: "Latitude and longitude are required" });
    }

    if (!service) {
      return res.status(400).json({ error: "Service is required" });
    }

    let pin = "";
    let district = "";

    try {
      const response = await axios.get("https://nominatim.openstreetmap.org/reverse", {
        params: { format: "json", lat, lon },
        headers: { "User-Agent": "reverse-geocode-app" },
      });

      pin = response.data.address.postcode;
      district = response.data.address.state_district;
    } catch (error) {
      console.error("Reverse geocoding error:", error.message);
      return res.status(500).json({ error: "Failed to get location from coordinates" });
    }

    let userfilter = {};

    if (pin) {
      userfilter = {
        WorkeField: service,
        username: { $regex: new RegExp(search, "i") },
        postcode: pin,
      };
    }

    const pinWorkersCount = await Worker.countDocuments(userfilter);
    if (!pinWorkersCount && district) {
      userfilter = {
        WorkeField: service,
        username: { $regex: new RegExp(search, "i") },
        city: district,
      };
    }
  console.log(userfilter,"userfilter");
  
    const skip = (page - 1) * limit;
    const total = await Worker.countDocuments(userfilter);
    const workers = await Worker.find(userfilter).skip(skip).limit(limit);

    return res.status(200).json({
      workers,
      page,
      totalPages: Math.ceil(total / limit),
      totalResults: total,
    });
  } catch (error) {
    console.error("Error fetching workers:", error);
    res.status(500).json({ message: "Something went wrong", error });
  }
};
