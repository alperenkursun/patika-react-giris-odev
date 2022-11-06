import axios from "axios";

const getData = async (number) => {
  const { data: user } = await axios(
    `https://jsonplaceholder.typicode.com/users/${number}`
  );
  const { data: userposts } = await axios(
    `https://jsonplaceholder.typicode.com/posts?userId=${number}`
  );

  user.posts = userposts;
  console.log(user);
};

export default getData;
