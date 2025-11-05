#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const projectName = process.argv[2] || 'my-next-app';
const currentDir = process.cwd();
const projectDir = path.join(currentDir, projectName);

console.log(`\n🚀 Creating Next Hero Starter project: ${projectName}\n`);

// Create project directory
if (fs.existsSync(projectDir)) {
  console.error(`❌ Error: Directory "${projectName}" already exists.`);
  process.exit(1);
}

fs.mkdirSync(projectDir, { recursive: true });

// Copy all files from the template
const templateDir = path.join(__dirname, '..');
const filesToCopy = [
  'src',
  'public',
  'README.md',
  'LICENSE',
  'package.json',
  'tsconfig.json',
  'tailwind.config.ts',
  'next.config.ts',
  'postcss.config.mjs',
  'eslint.config.mjs',
  'hero.ts',
  'next-env.d.ts'
];

console.log('📁 Copying template files...');

function copyRecursive(src, dest) {
  if (fs.statSync(src).isDirectory()) {
    fs.mkdirSync(dest, { recursive: true });
    fs.readdirSync(src).forEach(file => {
      copyRecursive(path.join(src, file), path.join(dest, file));
    });
  } else {
    fs.copyFileSync(src, dest);
  }
}

filesToCopy.forEach(file => {
  const srcPath = path.join(templateDir, file);
  const destPath = path.join(projectDir, file);
  
  if (fs.existsSync(srcPath)) {
    copyRecursive(srcPath, destPath);
    console.log(`  ✓ ${file}`);
  }
});

// Copy gitignore separately (renamed from template.gitignore)
const gitignoreSrc = path.join(templateDir, 'template.gitignore');
const gitignoreDest = path.join(projectDir, '.gitignore');
if (fs.existsSync(gitignoreSrc)) {
  fs.copyFileSync(gitignoreSrc, gitignoreDest);
  console.log(`  ✓ .gitignore`);
}

console.log('\n📦 Installing dependencies...');
console.log('This might take a few minutes.\n');

try {
  execSync('npm install', { cwd: projectDir, stdio: 'inherit' });
} catch (error) {
  console.error('❌ Failed to install dependencies');
  process.exit(1);
}

console.log('\n✅ Success! Your Next Hero Starter project is ready.\n');
console.log('To get started:');
console.log(`  cd ${projectName}`);
console.log('  npm run dev\n');
console.log('Happy coding! 🎉\n');
