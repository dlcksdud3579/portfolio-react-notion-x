import { NotionRenderer, BlockMapType } from "react-notion";
import Head from "next/head";
import Link from "next/link";
import fetch from "node-fetch";

export async function getStaticProps() {
  const data: BlockMapType = await fetch(
    "https://notion-api.splitbee.io/v1/page/c21c68f4f56a45d3974824913639d3a0"
  ).then(res => res.json());

  return {
    props: {
      blockMap: data
    },
    revalidate: 1
  };
}

const Home = ({ blockMap }) => (
  <div>
    <Head>
      <style>{`body { margin: 0;}`}</style>
      <title>react-notion example</title>
    </Head>
    <NotionRenderer
      blockMap={blockMap}
      fullPage
      hideHeader
      customBlockComponents={{
        page: ({ blockValue, renderComponent }) => (
          <Link href={`/${blockValue.id}`}>{renderComponent()}</Link>
        )
      }}
    />
  </div>
);

export default Home;
