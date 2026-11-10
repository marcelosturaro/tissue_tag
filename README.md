# TissueTag

Tissue labels for samples — generates numbered labels with QR Codes for cryotubes.

Version 1.0 · 2026 · Marcelo José Sturaro · Cururu Lab (ICAQF, UNIFESP)

## Download

Go to the [Releases](../../releases/latest) page and download:

| System  | File |
|---------|------|
| Windows | `TissueTag-…-win-x64.exe` (installer) or the `portable` one |
| macOS   | `TissueTag-…-mac-arm64.dmg` (Apple Silicon) or `-mac-x64.dmg` (Intel) |
| Linux   | `TissueTag-…-linux-x86_64.AppImage` or `.deb` |

### First run notes
- **Windows:** if SmartScreen warns, click *More info → Run anyway*.
- **macOS:** the app is not signed. Right-click the app → *Open*. If it says "damaged", run in Terminal: `xattr -cr /Applications/TissueTag.app`
- **Linux:** for the AppImage, run `chmod +x TissueTag-*.AppImage` and double-click it.

## Run from source
```
npm install
npm start
```

## Build installers
```
npm run dist
```
