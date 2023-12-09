const TextBlocks = (props) => {
  return (
    <>
      <p className="font-semibold text-xl lg:text-3xl underline text-left">
        {props.title}
      </p>
      <p className="mb-4 text-left lg:text-xl"> {props.body}</p>
    </>
  );
};

export default TextBlocks;