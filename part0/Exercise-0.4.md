# Exercise 0.4: New note diagram

```mermaid
sequenceDiagram
    participant browser
    participant server
    participant database

    Note right of browser: The user writes a note and clicks the Save button

    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note
    
    server->>database: notes.push({ content: req.body.note, date: new Date() })
    server-->>browser: HTTP 302 (Redirect to /notes)
    

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/notes
    
    server-->>browser: HTML document
   

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.css
    server-->>browser: main.css
    

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.js
    
    server-->>browser: main.js
    
    Note right of browser: The browser starts executing the JavaScript code that fetches the JSON from the server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/data.json
    
    server-->>browser: [{ "content": "HTML is easy", "date": "2023-1-1" }, ... ]
    

    Note right of browser: The browser executes the callback function that renders the notes
```