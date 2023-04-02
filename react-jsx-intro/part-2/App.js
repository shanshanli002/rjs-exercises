const App = () => {
    return (
      <div>
        <Tweet username="SpencerTheChicken" name="Spencer" date={new Date().toDateString()} message="Trying to break free from the chicken coop" />
        <Tweet username="SpikeyChicken" name="Spike" date={new Date().toDateString()} message="Spencer was unsuccessful" />
        <Tweet username="RebelChicken" name="Patty" date={new Date().toDateString()} message="I think Spikey ate Spencer ..." />
      </div>
    );
}

ReactDOM.render(<App />, document.getElementById("root"));
