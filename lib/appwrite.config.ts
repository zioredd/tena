import dotenv from "dotenv";

import * as sdk from "node-appwrite";

dotenv.config();
export const {
  PROJECT_ID,
  API_KEY,
  DATABASE_ID,
  PATIENT_COLLECTION_ID,
  DOCTOR_COLLECTION_ID,
  APPOINTMENT_COLLECTION_ID,
  NEXT_PUBLIC_BUCKET_ID: BUCKET_ID,
  NEXT_PUBLIC_ENDPOINT: ENDPOINT,
} = process.env;

console.log({
  PROJECT_ID,
  API_KEY,
  DATABASE_ID,
  PATIENT_COLLECTION_ID,
  DOCTOR_COLLECTION_ID,
  APPOINTMENT_COLLECTION_ID,
  BUCKET_ID,
  ENDPOINT,
});

const client = new sdk.Client();

client
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject("66af274e0007e141c297")
  .setKey(
    "baa3b7de5967efd6b9ec1cea289148eab2777a6064954621ea237a65f905027aa93aeeb1b34f96d87c8d2673140b9499400b48cd0a1565f8f09c535f81f32e691f50f6e939f11dcbabebd9cbf6781ff80addb7fc258f52c8fa552d0c0c450568d449a0a97c743fbf275126dd5763e5dbd3f968f2d67efbeef5ff92b1c93d5cc2"
  );

export const databases = new sdk.Databases(client);
export const storage = new sdk.Storage(client);
export const messaging = new sdk.Messaging(client);
export const users = new sdk.Users(client);
