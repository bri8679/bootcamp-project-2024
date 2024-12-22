type IComment = {
  user: string;
  comment: string;
  time: Date;
};

type CommentProps = {
  comment: IComment;
};

{
  /* Modularizing code into seperate functions is useful.
		Makes your code look nicer and allows for better readability.
	*/
}
function parseCommentTime(time: Date | string): string {
  const date = typeof time === "string" ? new Date(time) : time;
  return date.toLocaleString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
}

function Comment({ comment }: CommentProps) {
  return (
    <div className="bg-gray-100 p-4 rounded-lg shadow-md mb-4">
      <h4 className="text-xl font-semibold">{comment.user} says:</h4>
      <p className="text-gray-700 mt-2">{comment.comment}</p>
      <span className="text-gray-500 text-sm mt-2 block">
        {parseCommentTime(comment.time)}
      </span>
    </div>
  );
}

export default Comment;
