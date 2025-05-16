# Run this script to build your demo and prepare for direct Vercel deployment

# Clean and prepare
echo "Cleaning previous builds..."
if (Test-Path -Path "./demo-dist") {
    Remove-Item "./demo-dist" -Recurse -Force
}

# Build the demo
echo "Building demo..."
npm run build:demo

# Check if the build was successful
if (Test-Path -Path "./demo-dist/index.html") {
    echo "✅ Build successful! The demo is ready to be deployed."
    echo ""
    echo "To deploy to Vercel, follow these steps:"
    echo ""
    echo "1. Install Vercel CLI (if not already installed):"
    echo "   npm install -g vercel"
    echo ""
    echo "2. Login to Vercel:"
    echo "   vercel login"
    echo ""
    echo "3. Deploy your site:"
    echo "   vercel --prod"
    echo ""
    echo "Or upload your demo-dist folder directly using Vercel's web interface at:"
    echo "https://vercel.com/new"
}
else {
    echo "❌ Build failed. Check for errors above."
}
