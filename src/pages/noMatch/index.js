import "./noMatch.css";

function NoMatch() {
  return (
    <div className="nomatch-wrapper">
      <div className="nomatch-card">
        <h1 className="nomatch-title">Oops...</h1>
        <h2 className="nomatch-subtitle">
          You seem to have reached a non-existing page.
        </h2>

        <a href="/" className="nomatch-home-btn">
          Go Back Home
        </a>
      </div>
    </div>
  );
}

export default NoMatch;
