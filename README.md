# UMFS

English (US) | [Türkçe](README.tr.md)

UMFS is the Universal Massive File System for the amassivus datacenter suite.

This repository contains the public-facing UMFS website: a focused, responsive page that introduces the project, explains its intended place in the amassivus platform, compares its stated scope with familiar file systems, and publishes the project license. The page is written to be clear about what is known here and what belongs in the UMFS source and technical documentation.

## What is here

- A responsive landing page for Universal Massive File System.
- A Bootstrap 5.3.3 navigation bar with mobile collapse behavior.
- A hero section with a UMFS command-line-style presentation.
- An overview of UMFS as a file-system component of the amassivus datacenter suite.
- A comparison table covering Windows, Apple, Google, Linux, and BSD storage systems.
- GNU Affero General Public License v3.0-or-later information.
- A LibreJS page (`jslicense.html`) that lists JavaScript licenses and embeds the `main.js` source.
- Links to the UMFS source project at [source.masscollabs.xyz/umfs](https://source.masscollabs.xyz/umfs).

This website does not implement a file system, storage service, API, or datacenter control plane. Those capabilities should be verified in the project source and technical documentation before making deployment or compatibility claims.

## Run it locally

No build step is required. Serve this directory with any static web server, or open `index.html` directly in a browser.

For a quick local server with Python installed:

```bash
python3 -m http.server 8000
```

Then open [http://localhost:8000](http://localhost:8000).

The page loads Bootstrap 5.3.3 from jsDelivr, so the navigation controls need network access when the page is opened in a browser. The page currently references the Bootstrap CSS at `https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css` and the Bootstrap bundle at `https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js`. The local CSS and JavaScript are kept in `assets/css/styles.css` and `assets/js/main.js`.

## Project layout

```text
.
├── index.html
├── jslicense.html
├── LICENSE
├── ChangeLog
├── README.md
├── README.tr.md
└── assets
    ├── css
    │   └── styles.css
    └── js
        └── main.js
```

## Development notes

The site uses semantic HTML, Bootstrap layout utilities, and a small custom stylesheet in [assets/css/styles.css](assets/css/styles.css). The JavaScript in [assets/js/main.js](assets/js/main.js) currently handles one focused interaction: it closes the responsive navigation menu after a navigation link is selected.

When updating the page:

1. Keep the project name as **Universal Massive File System (UMFS)**.
2. Keep statements about architecture, performance, interoperability, and deployment aligned with the actual UMFS source and documentation.
3. Preserve the existing AGPL-3.0-or-later notices unless the copyright or licensing terms officially change.
4. Record user-visible changes in `ChangeLog`.
5. Check the page at desktop and mobile widths after layout or content changes.

## License

Copyright (C) 2026-2027 UMFS Authors

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU Affero General Public License as published
by the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU Affero General Public License for more details.

You should have received a copy of the GNU Affero General Public License
along with this program.  If not, see <https://www.gnu.org/licenses/>.

The website footer links to the original GNU AGPL-3.0-or-later text, to the LibreJS page (`jslicense.html`, which embeds the JavaScript source), and to the [source code](https://codeberg.org/umfstr/webfs).
