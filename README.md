# PackCheck AI - Legal Metrology Compliance Checker

An intelligent compliance checking platform for packaged commodities adhering to the **Legal Metrology (Packaged Commodities) Rules, 2011 (LMPC Rules, 2011)** for the Ministry of Consumer Affairs, Food & Public Distribution, Government of India.

---

## Features

- **Multi-Input Specimen Inspection**: Upload product packaging photos, high-resolution scans, or test specimens.
- **Web Patrol (E-Commerce Ingestion)**: Audit packaged commodity listings across major e-commerce marketplaces (Amazon, Flipkart, Blinkit, Zepto, etc.).
- **7-Stage PackCheck AI Pipeline**:
  1. Packaged Product Ingestion
  2. Scan / Upload Capture
  3. Label & Principal Display Panel (PDP) Area Detection
  4. Multimodal OCR & Vision Statutory Analysis
  5. Mandatory Declaration Extraction (MRP, Net Qty, Dates, Packer details)
  6. Rule Adjudication under LMPC Rules, 2011
  7. Compliance Determination & Statutory Penalty Ledger
- **Multi-Tier AI Rotation & Failover Architecture**:
  - **1st Priority**: Google Gemini Vision API (with automatic key rotation between Key #1 and Key #2 for load balancing & quota management).
  - **2nd Priority**: OpenRouter Multimodal Vision model (`google/gemma-4-26b-a4b-it:free` / `openrouter/free`).
  - **3rd Priority**: Offline Deterministic Rule Adjudication Engine.

---

## Getting Started

### 1. Clone the Repository
```bash
git clone https://github.com/DevSrivastava2508/PackCheck--Ai.git
cd PackCheck--Ai
```

### 2. Configure Environment Variables
Copy `.env.example` to `.env` and add your API keys:
```bash
cp .env.example .env
```
Populate your `.env` file:
```env
GEMINI_API_KEY=your_primary_gemini_api_key_here
GEMINI_API_KEY_2=your_secondary_gemini_api_key_here
OPENROUTER_API_KEY=your_openrouter_api_key_here
OPENROUTER_MODEL=google/gemma-4-26b-a4b-it:free
```

> **Security Note**: Never commit `.env` containing real credentials to Git. It is automatically ignored by `.gitignore`.

### 3. Run Locally
Serve the application with any static web server:

**Using Python:**
```bash
python -m http.server 8000
```
Open [http://localhost:8000](http://localhost:8000) in your browser.

**Using Node.js:**
```bash
npx serve .
```

---

## License
Statutory compliance tool designed for Legal Metrology enforcement and packaged commodity auditing.