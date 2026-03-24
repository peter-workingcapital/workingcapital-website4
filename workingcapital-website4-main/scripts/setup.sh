#!/bin/bash

# WorkingCapital Website Setup Script

echo "🚀 Setting up WorkingCapital Website..."

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js 18+ first."
    echo "Visit: https://nodejs.org/"
    exit 1
fi

# Check Node.js version
NODE_VERSION=$(node -v | cut -d'v' -f2 | cut -d'.' -f1)
if [ "$NODE_VERSION" -lt 18 ]; then
    echo "❌ Node.js version 18+ is required. Current version: $(node -v)"
    exit 1
fi

echo "✅ Node.js $(node -v) detected"

# Install dependencies
echo "📦 Installing dependencies..."
npm install

if [ $? -eq 0 ]; then
    echo "✅ Dependencies installed successfully"
else
    echo "❌ Failed to install dependencies"
    exit 1
fi

# Create .env.local file
echo "🔧 Creating environment file..."
cat > .env.local << EOF
# WorkingCapital Website Environment Variables
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_CONTACT_EMAIL=peter@workingcapitalou.com
NEXT_PUBLIC_CONTACT_PHONE=+34627717137
EOF

echo "✅ Environment file created"

# Run development server
echo "🎉 Setup complete! Starting development server..."
echo "📱 Open http://localhost:3000 in your browser"
echo "🛑 Press Ctrl+C to stop the server"

npm run dev
