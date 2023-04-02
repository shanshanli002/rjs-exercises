const Tweet = ({username, name, date, message}) => {
    return (
      <div>
        <h2>@{username}</h2>
        <h3>{name}</h3>
        <h3>{date}</h3>
        <p>{message}</p>
      </div>
    );
}