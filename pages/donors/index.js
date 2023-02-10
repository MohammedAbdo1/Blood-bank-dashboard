import { ToolBar } from "../../components/common/tool-bar";
import api from "../../utils/api";
import Table from "../../components/donors/Table";
import Modal from "../../components/donors/modal";

const Page = (props) => {
  return (
    <>
      <ToolBar title=" المتبرعين">
        <Modal />
      </ToolBar>
      <Table />
    </>
  );
};

export const getServerSideProps = async (ctx) => {
  const data = await api.getAllDoners().then((data) => data);
  return {
    props: {
      data,
    },
  };
};
export default Page;
