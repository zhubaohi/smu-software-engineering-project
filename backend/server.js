// Author: Md Golam Fardin, Rwanyange Kelly Prince, Tenisha Bajagain
// Purpose: Express server to handle file uploads, form submissions, and serve static files for the Woodland Conservation Site

// New image uploads for the moment, will be stored in temp uploads direcotry and will not be shown on the website.

const express = require("express");
const cors = require("cors");
const ExcelJS = require("exceljs");
const multer = require("multer");
const fs = require("fs");
const path = require("path");
const bodyParser = require("body-parser");

const app = express();

// Enable CORS for your frontend domain
// The frontend domain (localhost:3022) is allowed to make requests to this server.
app.use(
  cors({
    origin: "http://localhost:3022", // Adjust this for your production domain
  })
);

// Serve Static Files for images (uploads)
app.use("/uploads", express.static(path.join(__dirname, "../src/uploads"))); // Serve uploaded files

// Serve the built React app
app.use(express.static(path.join(__dirname, "../build"))); // Serve the React app build

// Middleware to parse JSON and URL-encoded request bodies
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// ----------------------
// Multer Configuration for file upload
// ----------------------
const uploadPath = path.join(__dirname, "../src/uploads");
if (!fs.existsSync(uploadPath)) {
  fs.mkdirSync(uploadPath, { recursive: true }); // Ensure the upload directory exists
}

// Set up the multer storage configuration for saving uploaded files
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadPath); // Specify the directory for file storage
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, `${uniqueSuffix}-${file.originalname}`); // Unique file names
  },
});

const upload = multer({ storage });

// ----------------------
// POST: File Upload Route
// ----------------------
app.post("/upload", upload.single("file"), (req, res) => {
  console.log("Handling file upload...");

  try {
    const { photographer, email, description } = req.body;
    const file = req.file;

    if (!file) {
      console.error("No file uploaded.");
      return res.status(400).json({ message: "No file uploaded" });
    }

    console.log("File uploaded successfully:", file.originalname);

    // Prepare metadata for the uploaded file
    const uploadData = {
      filePath: file.path,
      fileName: file.originalname,
      photographer,
      email,
      description,
      uploadTime: new Date().toISOString(),
    };

    console.log("Metadata received:", uploadData);

    // Save metadata to a JSON file
    const dataPath = path.join(uploadPath, "uploads.json");
    let data = [];
    if (fs.existsSync(dataPath)) {
      console.log("Reading existing metadata file.");
      data = JSON.parse(fs.readFileSync(dataPath, "utf-8"));
    }
    data.push(uploadData);
    fs.writeFileSync(dataPath, JSON.stringify(data, null, 2));

    console.log("Metadata saved successfully.");
    res.status(200).json({
      message: "File uploaded successfully",
      data: uploadData,
    });
  } catch (error) {
    console.error("Error during file upload:", error);
    res.status(500).json({
      message: "An error occurred during file upload",
      error: error.message,
    });
  }
});

// ----------------------
// POST: Form Submission Route
// ----------------------
app.post("/formSubmit", async (req, res) => {
  const filePath = path.join(__dirname, "../src/data/messages.xlsx");
  console.log("Excel File Path:", filePath);

  // Initialize the Excel file if it doesn't exist
  if (!fs.existsSync(filePath)) {
    console.log("Initializing new Excel file...");
    const workbook = new ExcelJS.Workbook();
    const sheet = workbook.addWorksheet("Submissions");
    sheet.columns = [
      { header: "Full Name", key: "fullName", width: 30 },
      { header: "Last Name", key: "lastName", width: 30 },
      { header: "Email", key: "email", width: 30 },
      { header: "Phone Number", key: "phone", width: 15 },
      { header: "Message", key: "message", width: 50 },
      { header: "Timestamp", key: "timestamp", width: 30 },
    ];
    try {
      await workbook.xlsx.writeFile(filePath);
      console.log("Excel file initialized successfully.");
    } catch (error) {
      console.error("Error initializing Excel file:", error);
      return res.status(500).send("Error initializing Excel file.");
    }
  }

  console.log("Received form data:", req.body);

  try {
    // Read the existing Excel file
    const workbook = new ExcelJS.Workbook();
    await workbook.xlsx.readFile(filePath);

    const sheet = workbook.getWorksheet("Submissions");
    if (!sheet) {
      console.error("Worksheet 'Submissions' not found.");
      return res.status(500).send("Worksheet not found.");
    }

    // Add a new row to the sheet
    sheet.addRow([
      req.body.fullName,
      req.body.lastName,
      req.body.email,
      req.body.phone,
      req.body.message,
      new Date().toISOString(),
    ]);

    // Save the updated Excel file
    await workbook.xlsx.writeFile(filePath);
    console.log("Excel file successfully updated.");

    res.status(201).send("Form submitted successfully!");
  } catch (error) {
    console.error("Error writing to Excel file:", error);
    res.status(500).send("An error occurred while saving the form data.");
  }
});

// ----------------------
// GET: Fetch Image Metadata
// ----------------------
app.get("/images", (req, res) => {
  const imgJsonPath = path.join(__dirname, "../src/uploads/uploads.json");

  // Read the JSON file contents
  fs.readFile(imgJsonPath, "utf-8", (err, data) => {
    if (err) {
      console.error("Error reading uploads.json:", err);
      return res.status(500).json({ error: "Failed to read image metadata." });
    }

    try {
      const jsonData = JSON.parse(data); // Parse the file contents as JSON

      // Convert file paths to URLs served by the backend
      const urlData = jsonData.map((image_data) => {
        const fileName = path.basename(image_data.filePath); // Extract just the file name
        return `/uploads/${fileName}`; // Construct a public URL
      });

      console.log("URL data:", urlData);
      res.json(urlData); // Send the array of public URLs to the frontend
    } catch (parseErr) {
      console.error("Error parsing JSON:", parseErr);
      res.status(500).json({ error: "Failed to parse image metadata." });
    }
  });
});

// For any route that doesn't match, serve the React app
// This handles navigation within the React app when accessing any unmatched route
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../build", "index.html"));
});

// Start the server
const PORT = 6789;
app.listen(PORT, () => {
  console.log(`Backend server is running on port ${PORT}`);
});