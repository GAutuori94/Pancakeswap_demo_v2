# Pancakespaw.finance demo

The project aims at rewriting the pancakeswap.finance website, using the languages, libraries and frameworks studied during the Develhope course.

## Team members
$Giorgio Autuori <br>
$Andrea Barberio <br>
$Alessio Ilardi <br>
$Pietro Oss <br>
$Emanuele Simula <br>

<hr>

## Workflow
We have used the agile methodology mixed with our personal approach in order to develop the project. Each day, the organized videcall was divided in three phases: <br>
- Stand up: 5-10mins
- Resolutions of bugs, implementation of the main features: 1.30h
- Tickets creation: 5-10mins

The project repo is managed through Github. There's a "main" branch (used for deployment) and a "develop" branch (used for development). From the "develop" branch each team member creates a "feat" branch used to develop the assigned feature. When completed, the develop branch has to be merged on the feature branch to check if the code is stable and debug if needed. Then the completed "feat" branch is merged on "develop". <br>
We used Trello to manage the tickets.

First of all we started analyzing panckaswap.finance and creating a design system to identify all the colors, fonts (font-family, font-size, font-weight, ecc) and components. Then we divided the components in those shared between the website and those used only in certain pages. After assigning the components to the team members and creating the related tickets we started writing the code, trying to keep the logic part separated from the rendering part in order to achieve a sense of order and to allow an easy mainteinance of the web app. <br>

The "src" directory is divided into an "assets" directory with images/svgs and fonts; a "types" directory with the TS types used in the web app; a "style" directory containing Tailwindcss' index.css file; a "components" directory, subdivided in a directory for contexts, a directory for hooks, a directory for the actual web pages and a "shared" directory used for components which are used throughtout the website. <br>

<hr>

## Best practices

- "Branches" naming rules => all lowercase with underscores between words (Es. <strong>feat/name_of_the_branch</strong>)
- "Folders" naming rules => all lowercase with dashes between words (Es. <strong>/src/components</strong>)
- "Files" naming rules => camelCase (Es. <strong> useCustomHook.ts</strong>, <strong>cardComponent.tsx</strong>)
- "Components" naming rules => PascalCase (Es. <strong>RenderingComponent</strong>, <strong>FetchedDataRenderer</strong>)
- "Class names" naming rules => all lowercase with underscores dividing words. Children elements have their class name followed by two underscores and their parent class name (Es. <strong>.container</strong>, <strong> .card_base__container </strong>)

<hr>

## Install dependencies
```
npm install
```
We used a variety of packages and libraries (and their relative types for those who needed them). The complete list can be viwed in the package.json file.
<hr>



