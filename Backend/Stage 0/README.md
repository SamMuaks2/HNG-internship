# Public API for Basic Information

This is a public API that returns basic information in JSON format, including:
- Registered email address.
- Current datetime in ISO 8601 format.
- GitHub URL of the project's codebase.

## Features
- Lightweight and fast.
- Handles CORS appropriately.
- Fully dynamic datetime generation.

## Endpoint
**URL:** [<your-deployed-url>](#)


### Request Format
This API does not require any request parameters or authentication. Simply send a `GET` request to the endpoint.


**Method:** `GET`

### Response Example
json
{
  "email": "mohrimuakpo@gmail.com",
  "current_datetime": "2025-01-30T09:30:00Z",
  "github_url": "https://github.com/SamMuaks2/HNG-internship/tree/main/Backend/Stage%200"
}


# Setup Instructions

## Prerequisites
- Node.js installed on your machine (version 14 or later).

## Steps to Run Locally
1. Clone the Repository
###   git clone https://github.com/SamMuaks2/HNG-internship/tree/main/Backend/Stage%200
###   cd public-api

2. Install Dependencies
   npm install

3. Run the Server
   npm start

4. The API will be available at `http://localhost:3000`.


### Example Usage

#### Using `curl`:
curl <your-deployed-url>

#### Using JavaScript (fetch):
javascript
fetch('<your-deployed-url>')
  .then((response) => response.json())
  .then((data) => console.log(data));


## Related Link
[Hire Node.js Developers](https://hng.tech/hire/nodejs-developers)
