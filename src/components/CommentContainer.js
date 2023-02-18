import React from "react";
const commentsData = [
  {
    name: "Koushik Saha",
    text: "Lorem ipsum dolor sit amet, consectetur adip",
    replies: [],
  },
  {
    name: "Koushik Saha",
    text: "Lorem ipsum dolor sit amet, consectetur adip",
    replies: [
      {
        name: "Koushik Saha",
        text: "Lorem ipsum dolor sit amet, consectetur adip",
        replies: [],
      },
      {
        name: "Koushik Saha",
        text: "Lorem ipsum dolor sit amet, consectetur adip",
        replies: [
          {
            name: "Koushik Saha",
            text: "Lorem ipsum dolor sit amet, consectetur adip",
            replies: [
              {
                name: "Koushik Saha",
                text: "Lorem ipsum dolor sit amet, consectetur adip",
                replies: [
                  {
                    name: "Koushik Saha",
                    text: "Lorem ipsum dolor sit amet, consectetur adip",
                    replies: [
                      {
                        name: "Koushik Saha",
                        text: "Lorem ipsum dolor sit amet, consectetur adip",
                        replies: [],
                      },
                    ],
                  },
                  {
                    name: "Koushik Saha",
                    text: "Lorem ipsum dolor sit amet, consectetur adip",
                    replies: [],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "Koushik Saha",
    text: "Lorem ipsum dolor sit amet, consectetur adip",
    replies: [],
  },
  {
    name: "Koushik Saha",
    text: "Lorem ipsum dolor sit amet, consectetur adip",
    replies: [],
  },
  {
    name: "Koushik Saha",
    text: "Lorem ipsum dolor sit amet, consectetur adip",
    replies: [],
  },
];

const Comment = ({ data }) => {
  const { name, text } = data;
  return (
    <div className="flex gap-3 p-2 m-2">
      <img
        className="h-10"
        src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
        alt="user-icon"
      />
      <div>
        <h2 className="font-semibold">{name}</h2>
        <p>{text}</p>
      </div>
    </div>
  );
};
// const CommentsList = ({ comments }) => {
//   return comments.map((comment, index) => (
//     <div key={index} className=" my-2">
//       <Comment data={comment} />
//       {console.log(comment)}
//       <div className="ml-8 border my-2 bg-gray-200 border-l-black ">
//         {/* <CommentsList comments={comment.replies} /> */}
//         <CommentsList comments={comment.replies} />
//       </div>
//     </div>
//   ));
// };

const CommentsList = ({ comments }) => {
  // Disclaimer: Don't use indexes as keys
  return comments.map((comment, index) => (
    <div key={index}>
      <Comment data={comment} />
      <div className="pl-5 border border-l-black ml-5">
        <CommentsList comments={comment.replies} />
      </div>
    </div>
  ));
};
function CommentContainer() {
  return (
    <div className="m-5 p-2">
      <h1 className="text-2xl font-bold">Comments:</h1>
      <div className="py-2 px-5">
        <CommentsList comments={commentsData} />
      </div>
    </div>
  );
}

export default CommentContainer;
