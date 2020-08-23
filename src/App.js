import React, { useState } from "react";
import "./App.css";
import Articles from "./components/Articles.js";


const title = "React Sorting Articles";

function App({ articles }) {
    const [sortBy, setCriteria] = useState("upvotes");

    let upVoteBtn = () => {
        setCriteria("upvotes");
    };

    let recentBtn = () => {
        setCriteria("date");
    };

    let listItems = [...articles];

    switch (sortBy) {
        case "upvotes":
            listItems.sort((a, b) => b.upvotes - a.upvotes);
            break;

        case "date":
            listItems.sort((a, b) => new Date(b.date) - new Date(a.date));
            break;
        
        default:

    }

    return (
        <div className="App">
            <div>
                <label className = "App-header">
                    {title}
                </label>
                <button
                    data-testid="most-upvoted-link"
                    className="myButton"
                    onClick={upVoteBtn}
                    disabled={sortBy === 'upvotes'}
                >
                    Most Upvoted
                </button>
                <button
                    data-testid="most-recent-link"
                    className="myButton"
                    onClick={recentBtn}
                    disabled={sortBy === 'date'}
                >
                    Most Recent
                </button>
            </div>
            <div >
                <table id= "customers">
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Upvotes</th>
                            <th>Date</th>
                        </tr>
                    </thead>
                    {listItems.map((item) => (
                        <Articles
                            article={item}
                            key={item.title}
                            sortBy={sortBy}
                        />
                    ))}
                </table>
            </div>
        </div>
    );
}

export default App;
