# React: Sorting Articles  

This repo is published at https://keerthilingu.github.io/react-table-sorting-app/.

The app must have the following functionalities:

- The list of articles is passed to the App component as a prop in the form of an array of objects.
- Each article has the following three properties:
  - title: The title of the article [STRING]
  - upvotes: The number of upvotes for an article [NUMBER]
  - date: The publish date for the article in the format YYYY-MM-DD [STRING]
- By default, the articles should be displayed in the table ordered by the number of upvotes in descending order.
- Clicking on the "Most Upvoted" button should reorder and display the articles by the number of upvotes in descending order.
- Clicking on the "Most Recent" button should reorder and display the articles by date in descending order.
- You can assume that each article has a unique publish date and number of upvotes.

The following data-testid attributes are required in the component for the tests to pass:

- The button to reorder and display the most upvoted articles must have the data-testid attribute "most-upvoted-link".
- The button to reorder and display the most recent articles must have the data-testid attribute "most-recent-link".
- Each article must be rendered inside a `<tr>` element that has the data-testid attribute "article".
- The title of each article must be rendered in a `<td>` element that has the data-testid attribute "article-title".
- The number of upvotes of each article must be rendered in a `<td>` element that has the data-testid attribute "article-upvotes".
- The publish date of each article must be rendered in a `<td>` element that has the data-testid attribute "article-date".

## Environment 

- React Version: 16.13.1
- Default Port: 8000

## Project Specifications 

**Read-Only Files**
- `src/App.test.js`

**Commands**
- run: 
```bash
npm start
```
- install: 
```bash
npm install
```
- test: 
```bash
npm test
```
