const App = () => {
  return (
    <div>
      <Person
        hobbies={["running", "swimming", "cooking"]}
        age={30}
        name="Marry"
      />
      <Person name="Kyle" age={17} hobbies={["tennis", "soccer"]} />
      <Person
        name="Marryjanelauralee"
        age={5}
        hobbies={["ping pong", "soccer"]}
      />
    </div>
  );
};

ReactDOM.render(<App/>, document.getElementById("root"));
