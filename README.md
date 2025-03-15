# Article Management App

A functional and user-friendly React-based application to manage and publish articles. This project was created using vanilla JavaScript and React. It includes features to view, add, and manage articles seamlessly.

## Features

1. **Article Display**
   - On the main page, all articles are displayed as cards.
   - Each card includes:
     - Feature Image
     - Title
     - Summary
   - Articles are fetched from a local database API using `Axios`.

2. **Single Article View**
   - Clicking on an article's title redirects to a dedicated page for that article.
   - The page displays the main content of the selected article.

3. **Publish Articles**
   - A dedicated page with a form for users to publish a new article.
   - Users can input:
     - Article Title
     - Content
     - Feature Image URL (or upload, if applicable)
   - Upon submitting, the new article is added to the local database and displayed on the main page.

4. **Routing**
   - Implemented with `React Router DOM` for easy navigation:
     - Main Page (Articles List)
     - Single Article Page
     - Publish Article Page

5. **Data Handling**
   - `Axios` is used for:
     - Fetching articles from the local database API.
     - Posting new articles to the local database.
     ```javascript
  axios.get('http://localhost:4000/data').then(
    Result=>{setArticle(Result.data);
    }).catch(Error=>{console.error(Error)})   
     //or
      axios.post('http://localhost:4000/data',newArticle)
  .then(alert('Article Published in App')).catch(console.error('error accured',error))
     ```

6. **Local Database**
   - A simple local database is used as the backend API for storing and managing articles.

## Setup Instructions

1. `Clone the repository`:
   git clone https://github.com/Amir-Bagheri-FE/reactArticle
2. `run local API service`:
npx json-server --watch ./DATABASE/db.json --port 4000 
3.`start the application`
npm start 

