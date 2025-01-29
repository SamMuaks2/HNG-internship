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

**Method:** `GET`

### Response Example
```json
{
  "email": "mohrimuakpo@gmail.com",
  "current_datetime": "2025-01-30T09:30:00Z",
  "github_url": "https://github.com/SamMuaks2/HNG-internship/tree/main/Backend/Stage%200"
}
