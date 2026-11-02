# Memorium 🐠

**Bring your fish to life.**

Memorium turns your favorite fish photos into digital pets that swim around inside your own customizable aquarium. Add a photo, give your fish a home, and build a little underwater world of your own.

Your fish. Your aquarium. Your little underwater world.

## About this repository

This repository currently contains the **Memorium Desktop Widget**, an Electron-based desktop companion for the Memorium aquarium experience.

The desktop widget lets you open a selected aquarium in its own frameless, transparent, always-on-top window—so your digital pets can stay on your desktop while you work or browse.

## Desktop widget features

- Frameless aquarium window with no browser tabs or title bar
- Transparent background
- Always-on-top desktop widget
- Open a selected tank from Memorium using **Jadikan widget desktop**
- Move and resize the widget
- Right-click controls to toggle always-on-top or close the widget

## Run the desktop widget from source

### Requirements

- Windows 10 or Windows 11
- Node.js (LTS recommended)
- npm

### Start

1. Download or clone this repository.
2. Extract `desktop-widget-source.zip`.
3. Open a terminal inside the extracted `memorium-desktop` folder.
4. Install dependencies:

   ```bash
   npm install
   ```

5. Start the app:

   ```bash
   npm start
   ```

This repository currently provides the source project, not a packaged Windows installer.

## Troubleshooting

If Electron reports that it failed to install correctly, check whether `node_modules/electron/dist/electron.exe` exists. Some npm versions require install scripts to be explicitly approved:

```bash
npm install-scripts approve electron@33.2.1
npm rebuild electron --foreground-scripts
```

Then run `npm start` again.

## Current limitations

- The desktop widget is currently intended for Windows 10/11.
- Aquarium data in the Electron app is stored separately from a regular browser installation.
- Automatic data migration or synchronization between browser and desktop versions is not implemented yet.
- A packaged installer is not included yet.

## Contributing

Bug reports, ideas, and pull requests are welcome. When reporting a problem, include your Windows version, Node.js version, npm version, and the error output.

## License

A license has not been added yet. Until a license is selected and included, the source remains subject to its default copyright protections.
