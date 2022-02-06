import Head from "next/head";

function HeadInfo({ title, keyword, content }) {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta keyword={keyword} />
        <meta content={content} />
      </Head>
    </div>
  );
}

HeadInfo.defaultProps = {
  title: "My Blog",
  keyword: "Blog powered by next js",
  content: "practice next js",
};

export default HeadInfo;
