import React from "react";
import "../css/Favorites.css";

function Favorites() {
    return (
        <div className="favorites-empty">
            <h2>No Favorites Added</h2>
            <p>Browse movies and click on the heart icon to add them to your favorites.</p>
        </div>
    );
}

export default Favorites;