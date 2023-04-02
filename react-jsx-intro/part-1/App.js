const App = () => {
    return (
        <div>
            <FirstComponent />
            <NamedComponent name="Mary Jane"/>
        </div>
    )
}

ReactDOM.render(<App/>, document.getElementById("root"));