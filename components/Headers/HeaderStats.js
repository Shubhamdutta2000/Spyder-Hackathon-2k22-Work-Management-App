import React from "react";

// components

import CardStats from "components/Cards/CardStats.js";

export default function HeaderStats() {
  return (
    <>
      {/* Header */}
      <div className="relative bg-purple-500 md:pt-32 pb-32 pt-12">
        <div className="px-4 md:px-10 mx-auto w-full">
          <div>
            {/* Card stats */}
            <div className="flex flex-wrap">
              <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                <CardStats
                  statSubtitle="No. of Employees"
                  statTitle="1000"
                  statArrow="up"
                  statPercent="3.48"
                  statPercentColor="text-emerald-500"
                  statDescripiron="Since last month"
                  statIconName="fas fa-user"
                  statIconColor="bg-indigo-500"
                />
              </div>
              <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                <CardStats
                  statSubtitle="Task Success Rate"
                  statTitle="200"
                  statArrow="up"
                  statPercent="7.48"
                  statPercentColor="text-emerald-500"
                  statDescripiron="Since last week"
                  statIconName="fas fa-check"
                  statIconColor="bg-emerald-500"
                />
              </div>
              <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                <CardStats
                  statSubtitle="Task Pending Rate"
                  statTitle="10"
                  statArrow="down"
                  statPercent="1.3"
                  statPercentColor="text-emarald-500"
                  statDescripiron="Since last day"
                  statIconName="fas fa-tasks"
                  statIconColor="bg-orange-500"
                />
              </div>
              <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                <CardStats
                  statSubtitle="Deadline missed"
                  statTitle="6"
                  statArrow="up"
                  statPercent="1.01"
                  statPercentColor="text-red-500"
                  statDescripiron="Since last week"
                  statIconName="fas fa-exclamation-triangle"
                  statIconColor="bg-red-600"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
