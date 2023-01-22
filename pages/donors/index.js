
import { ToolBar } from "../../components/common/tool-bar";

import { V1YEBBButton } from "../../components/common/V1YEBBButton";
import api from "../../utils/api";

import Table from "./Table";

const Page = (props) => {
  return (
    <>
      <ToolBar title=" المتبرعين" sx={{marginBottom:20 }}>
        <V1YEBBButton title="إضافة متبرع" />
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
