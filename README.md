# Translation Helps Print Preview

## The Need(s)

1. Developers need an easy to use way to render Translation Helps resources as PDFs.
2. Developers need an easy to use way to render Translation Helps resources in their apps that create a printed PDF.

___
___

## The Solution

1. Create a single solution to rendering to screen and PDF.
1. Create an RCL that renders resources that are passed into it to screen compatible with a page layout.
1. Use Paged.js to generate a PDF preview of the rendered resources.
1. Use the browser's print function to create PDF file.

___
___

## Separation of Concerns

The rendering of resources should not be convoluted by the fetching of resources. The fetching of data and rendering should be discrete layers. Applications may already have all the data required to render and just need to render it. Ie. translationCore Create, Gateway Edit, Gateway Admin. This also allows an app to include this funcitonality and be completely offline without fetching data.

___

### Application

This includes Reference Implementation or other Apps.

1. Use permalinks to get owner/repository/language/branch.
1. Fetch required resources via Gitea React Toolkit or future Gitea React Hooks.
1. Load resources offline from filesystem/indexedDB.
1. Import React Component/Hook Library to render Print Preview.
1. Pass resources to be rendered into Print Preview component/hook.
1. Choose where to render Print Preview on screen in another component such as full page, modal, or new window/tab.

___

### Print Preview React Component/Hook Library

The Print Preview React Component/Hook Library is focused on breaking down Resources into pieces and rendering them via Translation Helps RCL in a Layout that is a Print Preview via Paged.js.

1. Import Translation Helps RCL for rendering pieces of resources.
1. Use resources passed into library to render components in the Layout.
1. Split resource content into pieces that Translation Helps RCL Components need to render.
1. Use Paged.js to render Print Preview.

___

### Translation Helps RCL

Translation Helps RCL is focused on rendering individual pieces of resources as React Components and providing necessary data for doing so.

1. Render portions of a resource as a React component.
1. Use props passed in to render.
1. Provide hook to get a GL quote from OL quote and related scripture data.

___
___

## Repository Structure

This repository is broken down into two parts:
1. The React Component Library (React Styleguidist) that is published to NPM.
1. The Reference Implementation (Create React App) that is deployed to Netlify.
