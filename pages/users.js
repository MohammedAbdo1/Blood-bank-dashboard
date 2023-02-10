import { ToolBar } from "../components/common/tool-bar";
import Table from "../components/users/Table";
import Modal from "../components/users/modal";

const Page = (props) => {
  return (
    <>
      <ToolBar title="المستخدمين">
        <Modal />
      </ToolBar>
      <Table />
    </>
  );
};

export default Page;
