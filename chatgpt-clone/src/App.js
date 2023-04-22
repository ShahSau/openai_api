import SendIcon from '@mui/icons-material/Send';
const  App = () => {
  return (
    <div className="app">
      <section className="side-bar">
        <button>+ New chat</button>
        <ul className="history">
          <li>
            hhh
            </li>
        </ul>
        <nav>
          <p> created by shah</p>
        </nav>
      </section>
      <section className="main">
        <h1>GPT</h1>
        <ul className="feed">

        </ul>
        <div className="bottom-section">
          <div className="input-container">
            <input />
            <div id="submit"><SendIcon /></div>
          </div>
          <p className="info">
            ChatGPT Mar 23 Version. Free Research Preview. 
            ChatGPT may produce inaccurate information about people, places, or facts.
          </p>
        </div>
      </section>
    </div>
  );
}

export default App;
