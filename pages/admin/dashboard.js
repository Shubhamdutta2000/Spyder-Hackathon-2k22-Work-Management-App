import React from "react";

import CardLineChart from "components/Cards/CardLineChart.js";
import CardBarChart from "components/Cards/CardBarChart.js";

// layout for page

import Admin from "layouts/Admin.js";
import CardTable from "components/Cards/CardTable";

export default function Dashboard({ tableDataDiscord, tableDataSlack }) {
  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4">
          <CardLineChart />
        </div>
        <div className="w-full xl:w-4/12 px-4">
          <CardBarChart />
        </div>
      </div>

    </>
  );
}

export async function getServerSideProps(context) {

  return {
    props: {
      tableDataDiscord: [],
      tableDataSlack: [],
    },
  };
}

Dashboard.layout = Admin;
