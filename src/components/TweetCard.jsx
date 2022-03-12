

export default function TweetCard(props) {
  const lastModifiedAt = new Date(props.lastModifiedAt);
  
  return (
    <div
      style={{
        border: "solid 1px",
        padding: "1rem"
      }}
    >
      <p>{props.author} <span style={{color: 'gray'}}>on {lastModifiedAt.getFullYear()}-{lastModifiedAt.getMonth()}-{lastModifiedAt.getDate()}</span></p>
      <p>{props.content}</p>
    </div>
  );
}