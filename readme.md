<<<<<<< HEAD
# File Converter PaxAI

An all-in-one file converter built with Next.js and React. Convert images, documents, and PDFs seamlessly in your browser.

## Features

### ✅ Image Conversion (Completed)
- **Supported Input Formats**: PNG, JPG, JPEG, WebP, GIF, BMP, ICO, TIFF
- **Supported Output Formats**: PNG, JPG, JPEG, WebP, GIF, BMP, ICO, TIFF
- **Batch Processing**: Convert up to 100 files at once
- **Drag & Drop Interface**: Easy file uploading
- **Download Options**: Individual files or bulk download

### 🚧 Upcoming Features
- **Document Conversion**: DOCX to PDF, HTML, PNG
- **PDF Conversion**: PDF to Word, HTML, PNG
- **Advanced Settings**: Quality control, resize options
- **Zip Download**: Proper zip file creation with JSZip

## Getting Started

### Prerequisites
- Node.js 18.0 or later
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/mikeschecht/file_converter_paxai.git
cd file_converter_paxai
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Usage

### Image Conversion
1. **Upload Images**: Drag and drop image files or click to browse
2. **Select Format**: Choose your desired output format from the dropdown
3. **Convert**: Click the convert button to process all files
4. **Download**: Download files individually or all at once

## Project Structure

```
file_converter_paxai/
├── src/
│   ├── app/
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   └── globals.css
│   └── components/
│       └── ImageConverter.tsx
├── public/
├── package.json
├── tailwind.config.js
├── next.config.js
└── README.md
```

## Technologies Used

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **File Processing**: HTML5 Canvas API
- **Future**: JSZip for zip file creation

## Development Roadmap

### Phase 1: Foundation (✅ Completed)
- [x] Project setup with Next.js and TypeScript
- [x] Image converter component
- [x] Drag & drop interface
- [x] Basic file management
- [x] Multiple format support

### Phase 2: Document Processing (🚧 In Progress)
- [ ] DOCX converter implementation
- [ ] PDF converter implementation
- [ ] File type detection and routing

### Phase 3: Enhanced Features (📋 Planned)
- [ ] JSZip integration for proper zip downloads
- [ ] Progress bars and better UX
- [ ] Image quality settings
- [ ] Resize and crop options
- [ ] Batch processing optimizations

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Support

If you encounter any issues or have questions, please open an issue on GitHub.

---

Built with ❤️ using Next.js and React
=======
# file_converter_paxai
>>>>>>> branch 'main' of https://github.com/mikeschecht/file_converter_paxai.git
