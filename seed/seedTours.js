import Tour from "../models/Tour.js";
import tours from "./tours.js";

// Loads the sample tours on an empty database so the live demo has data
export const seedTours = async () => {
    if ((await Tour.estimatedDocumentCount()) > 0) return;
    await Tour.insertMany(tours);
    console.log(`Seeded ${tours.length} tours`);
};
