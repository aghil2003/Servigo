// import express from 'express';
// const router = express.Router();
// import OpenAI from 'openai';
// import stringSimilarity from 'string-similarity';
// import Worker from "../model/Worker"

// const openai = new OpenAI({
//   apiKey: process.env.OPENAI_API_KEY, // Add this in your .env file
// });

// const SERVICE_QUESTIONS = [
//   "what services do you have",
//   "what services are available",
//   "your services",
//   "list of services",
//   "tell me services",
//   "services you offer"
// ];

// router.post('/chat', async (req, res) => {
//   const { message,location } = req.body;

//   if (!message) {
//     return res.status(400).json({ error: 'No message provided.' });
//   }

//   // Convert message to lowercase for easier matching
//   const lowerMessage = message.toLowerCase();
  
//   const match = stringSimilarity.findBestMatch(lowerMessage, SERVICE_QUESTIONS);
//   const bestMatch = match.bestMatch;
//   // Check if the message is asking about available services
//  if (bestMatch.rating > 0.6) { // confidence threshold
//     try {
//       const services = [
//         "cleaning",
//         "carpentry",
//         "electrical",
//         "painting",
//         "plumbing",
//         "ac repair",
//         "gardening",
//         "construction"
//       ];

//       const reply = `We currently offer ${services.length} services: ${services.join(', ')}. Let us know if you want to book any!`;

//       return res.json({ reply });
//        if (location) {
//     try {
//       const { city, place } = location;

//       const workers = await Worker.find({
//         "location.city": city,
//         "location.place": place,
//       });

//       if (!workers.length) {
//         return res.json({ reply: "Sorry, no workers found at this location." });
//       }

//       const workerNames = workers.map(w => w.name).join(', ');
//       return res.json({
//         reply: `Here are the available workers in ${place}, ${city}: ${workerNames}`,
//         workers: workers.map(w => ({
//           id: w._id,
//           name: w.name,
//           skill: w.skill,
//           experience: w.experience,
//         }))
//       });

//     } catch (err) {
//       console.error("Service fetch error:", err);
//       return res.status(500).json({ reply: "Sorry, couldn't fetch services now." });
//     }
//   }

//   // If it's not a services-related question, fallback to ChatGPT
//   try {
//     const chatResponse = await openai.chat.completions.create({
//       model: 'gpt-3.5-turbo',
//       messages: [{ role: 'user', content: message }],
//     });

//     const reply = chatResponse.choices[0]?.message?.content?.trim();
//     res.json({ reply });
//   } catch (error) {
//     console.error('OpenAI API Error:', error);
//     res.status(500).json({ reply: 'Something went wrong with AI.' });
//   }
// });

// export default router;


//   const { message } = req.body;

//   if (!message) {
//     return res.status(400).json({ error: 'No message provided.' });
//   }

//   try {
//     const chatResponse = await openai.chat.completions.create({
//       model: 'gpt-3.5-turbo',
//       messages: [{ role: 'user', content: message }],
//     });

//     const reply = chatResponse.choices[0]?.message?.content?.trim();
//     res.json({ reply });
//   } catch (error) {
//     console.error('OpenAI API Error:', error);
//     res.status(500).json({ error: 'Something went wrong with AI.' });
//   }
// });




// import express from 'express';
// const router = express.Router();
// import OpenAI from 'openai';
// import stringSimilarity from 'string-similarity';
// import Worker from "../model/Worker.js";

// const openai = new OpenAI({
//   apiKey: process.env.OPENAI_API_KEY,
// });

// const SERVICE_QUESTIONS = [
//   "what services do you have",
//   "what services are available",
//   "your services",
//   "list of services",
//   "tell me services",
//   "services you offer"
// ];

// router.post('/chat', async (req, res) => {
//   const { message, location } = req.body;

//   if (!message) {
//     return res.status(400).json({ error: 'No message provided.' });
//   }

//   const lowerMessage = message.toLowerCase();
//   const match = stringSimilarity.findBestMatch(lowerMessage, SERVICE_QUESTIONS);
//   const bestMatch = match.bestMatch;

//   // Check if it's a service-related question
//   if (bestMatch.rating > 0.6) {
//     const services = [
//       "cleaning",
//       "carpentry",
//       "electrical",
//       "painting",
//       "plumbing",
//       "ac repair",
//       "gardening",
//       "construction"
//     ];

//     const reply = `We currently offer ${services.length} services: ${services.join(', ')}. Let us know if you want to book any!`;
//     return res.json({ reply });
//   }

//   // Check if user sent location for booking
//   if (location) {
//     try {
//       const { city, place } = location;

//       const workers = await Worker.find({
//         "location.city": city,
//         "location.place": place,
//       });

//       if (!workers.length) {
//         return res.json({ reply: "Sorry, no workers found at this location." });
//       }

//       const workerNames = workers.map(w => w.name).join(', ');
//       return res.json({
//         reply: `Here are the available workers in ${place}, ${city}: ${workerNames}`,
//         workers: workers.map(w => ({
//           id: w._id,
//           name: w.name,
//           skill: w.skill,
//           experience: w.experience,
//         }))
//       });
//     } catch (err) {
//       console.error("Worker fetch error:", err);
//       return res.status(500).json({ reply: "Sorry, couldn't fetch workers now." });
//     }
//   }

//   // Fallback to OpenAI
//   try {
//     const chatResponse = await openai.chat.completions.create({
//       model: 'gpt-3.5-turbo',
//       messages: [{ role: 'user', content: message }],
//     });

//     const reply = chatResponse.choices[0]?.message?.content?.trim();
//     res.json({ reply });
//   } catch (error) {
//     console.error('OpenAI API Error:', error);
//     res.status(500).json({ reply: 'Something went wrong with AI.' });
//   }
// });

// export default router;


import express from 'express';
const router = express.Router();
import OpenAI from 'openai';
import stringSimilarity from 'string-similarity';
import Worker from "../model/Worker.js";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const SERVICE_QUESTIONS = [
  "what services do you have",
  "what services are available",
  "your services",
  "list of services",
  "tell me services",
  "services you offer"
];

const SERVICES = [
  "cleaning",
  "carpentry",
  "electrical",
  "painting",
  "plumbing",
  "ac repair",
  "gardening",
  "construction"
];

router.post('/chat', async (req, res) => {
  const { message, location } = req.body;

  if (!message) {
    return res.status(400).json({ error: 'No message provided.' });
  }

  const lowerMessage = message.toLowerCase();
  const match = stringSimilarity.findBestMatch(lowerMessage, SERVICE_QUESTIONS);
  const bestMatch = match.bestMatch;

  // 1. Respond with service list
  if (bestMatch.rating > 0.6) {
    const reply = `We currently offer ${SERVICES.length} services: ${SERVICES.join(', ')}. Let us know if you'd like to book one.`;
    return res.json({ reply });
  }

  // 2. Fetch workers by location
  if (location?.city && location?.place) {
    try {
      // First, search by place + city
      let workers = await Worker.find({
        city: location.city,
        place: location.place,
      });

      if (!workers.length) {
        // Fallback: search by city only
        workers = await Worker.find({
          city: location.city,
        });

        if (!workers.length) {
          return res.json({ reply: `Sorry, no workers found in ${location.city}.` });
        }

        const reply = `No workers found in ${location.place}, but here are some available in ${location.city}:`;
        const workerList = workers.map(w => ({
          name: w.username,
          skill: w.WorkeField,
          location: `${w.place}, ${w.city}`,
        }));

        return res.json({ reply, workers: workerList });
      }

      // Found in place
      const reply = `Here are the available workers in ${location.place}, ${location.city}:`;
      const workerList = workers.map(w => ({
        name: w.username,
        location: `${w.place}, ${w.city}`,
      }));

      return res.json({ reply, workers: workerList });

    } catch (err) {
      console.error("Worker fetch error:", err);
      return res.status(500).json({ reply: "Sorry, couldn't fetch workers now." });
    }
  }

  // 3. Fallback to OpenAI for other queries
  try {
    const chatResponse = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: [{ role: 'user', content: message }],
    });

    const reply = chatResponse.choices[0]?.message?.content?.trim();
    return res.json({ reply });
  } catch (error) {
    console.error('OpenAI API Error:', error);
    return res.status(500).json({ reply: 'Something went wrong with the chatbot.' });
  }
});

export default router;
