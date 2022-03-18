

export default function TweetCard(props) {
  const lastModifiedAt = new Date(props.lastModifiedAt);
  
  return (
    <div
      style={{
        padding: "1rem",
        border: "solid 1px",
        marginBottom: "1rem"
      }}
    >
      <p>{props.author} <span style={{color: 'gray'}}>on {lastModifiedAt.getFullYear()}-{lastModifiedAt.getMonth()}-{lastModifiedAt.getDate()}</span></p>
      <p>{props.content}</p>
    </div>
  );
}