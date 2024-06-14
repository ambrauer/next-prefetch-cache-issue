import Nav from "../components/nav";
import { GetStaticProps, GetStaticPaths } from "next";

export default function Dynamic({ id }: { id: string }) {
  return (
    <>
      <main>
        <Nav />
        <h1>Page {id}</h1>
      </main>
    </>
  );
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  return {
    props: {
      id: params!.id,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [{ params: { id: "1" } }, { params: { id: "2" } }],
    fallback: false,
  };
};
