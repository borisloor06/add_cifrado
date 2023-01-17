import { connectToDatabase } from "../lib/db";

export default async function handler(request, response) {
    
    const { text, encrypt } = request.query;
    const { database } = await connectToDatabase();
    const collection = database.collection(process.env.NEXT_ATLAS_COLLECTION);

    const results = await collection.insertOne({textoPlano: text, textoCifrado: encrypt});

    response.status(200).json(results);

}