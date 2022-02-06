import React from "react";
import HeadInfo from "../components/HeadInfo";

function posts({ posts }) {
  return (
    <div>
      <HeadInfo title="My Blog Posts" />
      <ul>
        {posts.map((post) => {
          return <li key={post.id}>{post.title}</li>;
        })}
      </ul>
    </div>
  );
}

export default posts;

// build 때 미리 html 파일을 생성을 하고 나서, 보여주는 방식이며 그 이후에 계속 그 html을 재사용
export const getStaticProps = async () => {
  // const res = await fetch(
  //   "https://jsonplaceholder.typicode.com/posts?_start=0&_end=10"
  // );
  const res = await fetch("http://localhost:8080/api/posts");
  const posts = await res.json();

  return {
    props: {
      posts,
    },
    revalidate: 20, // 20초 지난 시점부터 (언재든) 접속이 일어나면, 다시 html 파일을 생성
  };
};

// getServerSideProps는 페이지 요청할 때마다, 실행해서 데이터를 받아오는 함수
// export const getServerSideProps = async () => {
//   // const res = await fetch(
//   //   "https://jsonplaceholder.typicode.com/posts?_start=0&_end=10"
//   // );
//   const res = await fetch("http://localhost:8080/api/posts");
//   const posts = await res.json();

//   return {
//     props: {
//       posts,
//     },
//   };
// };
