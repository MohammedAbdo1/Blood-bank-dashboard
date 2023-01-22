import React from "react";

import MUIDataTable from "mui-datatables";

const table = () => {
  const columns = ["الاسم", "رقم الهاتف", "الصلاحيات", "الحالة"];

  const data = [
    ["محمد ", "775163208", "-", "-"],
    ["علي", "775163208", "-", "-"],
  ];

  const options = {
    textLabels: {
      body: {
        noMatch: "لا توجد بيانات في الجدول",

        columnHeaderTooltip: (column) => ` ${column.label}`,
      },
      pagination: {
        next: "الصفحة التالية",
        previous: "Previous Page",
        rowsPerPage: "صفحة :",
        displayRows: "الى",
      },
      toolbar: {
        search: "ابحث",
        downloadCsv: "تنزيل CSV",
        print: "طباعة",
        viewColumns: "التحكم في الاعمدة",
        filterTable: " اختيار ادمن",
      },
      filter: {
        all: "الكل",
        title: "المرشح",
        reset: "اعادة تعيين",
      },
      viewColumns: {
        title: "اظهار كل الاعمدة",
      },
      selectedRows: {
        text: "  .... تم تحديد ",
        delete: "حذف",
      },
    },
  };

  return (
    <MUIDataTable
      title="جدول المستخدمين "
      data={data}
      columns={columns}
      options={options}
    />
  );
};

export default table;
