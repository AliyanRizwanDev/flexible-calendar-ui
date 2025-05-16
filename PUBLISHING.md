# Step-by-Step Guide to Publishing Your Flexible Calendar UI Package

This guide walks you through the process of preparing, testing, and publishing your 'flexible-calendar-ui' package to npm.

## Prerequisites

1. Node.js (v14.x or higher) installed
2. npm account (create one at https://www.npmjs.com/signup if you don't have one)

## Step 1: Finalize Your Package

Ensure your package is properly configured:

1. Update author information in package.json:
   ```json
   "author": "Your Name <your.email@example.com>",
   ```

2. Verify the license (default is MIT):
   ```json
   "license": "MIT",
   ```

3. Check that all dependencies are correctly listed in package.json.

## Step 2: Test Your Package Locally

Before publishing, it's crucial to test your package:

1. Build your package:
   ```bash
   cd flexible-calendar-ui
   npm run build
   ```

2. Run the demo app to verify functionality:
   ```bash
   # Install a local server if you don't have one
   npm install -g parcel-bundler
   
   # Start the demo
   parcel demo.html
   ```

3. Test with npm link (optional but recommended):
   ```bash
   # In the package directory
   npm link
   
   # Create a test project elsewhere
   mkdir ~/test-calendar
   cd ~/test-calendar
   npm init -y
   npm install react react-dom
   npm link flexible-calendar-ui
   
   # Test using the package in your test project
   ```

## Step 3: Prepare for Publishing

1. Clean up unnecessary files:
   ```bash
   # Remove any build artifacts or temp files
   npm run clean
   ```

2. Update version (if needed):
   ```bash
   # For patch updates (bug fixes)
   npm version patch
   
   # For minor updates (new features)
   npm version minor
   
   # For major updates (breaking changes)
   npm version major
   ```

## Step 4: Publish to npm

1. Login to npm:
   ```bash
   npm login
   # Enter your username, password, and email
   ```

2. Publish your package:
   ```bash
   npm publish
   ```

3. Verify your package is published:
   - Visit https://www.npmjs.com/package/flexible-calendar-ui
   - Or run `npm view flexible-calendar-ui`

## Step 5: Post-Publish

1. Create a git tag for the version:
   ```bash
   git tag v1.0.0
   git push origin v1.0.0
   ```

2. Announce the release on relevant channels.

## Common Issues and Solutions

- **Package name already exists**: Choose a different name
- **Version conflict**: Ensure you're incrementing the version number
- **Publish fails**: Check npm authentication and package visibility settings
- **Missing files in published package**: Verify your `files` array in package.json

## Publishing Updates

To publish updates to your package:

1. Make your changes
2. Run tests
3. Update version (`npm version patch/minor/major`)
4. Build (`npm run build`)
5. Publish (`npm publish`)

## Scoped Packages (Optional)

If you want to publish under your username or organization:

1. Change package name in package.json:
   ```json
   "name": "@yourusername/flexible-calendar-ui",
   ```

2. Publish with public access:
   ```bash
   npm publish --access=public
   ```
