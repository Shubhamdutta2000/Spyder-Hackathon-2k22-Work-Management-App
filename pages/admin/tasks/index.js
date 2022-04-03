import React from "react";

// layout for page
import Admin from "layouts/Admin.js";
import CardTable from "components/Cards/CardTable";

export default function AllTasks({ tableDataAllTasks }) {
    return (
        <>
            <CardTable tableData={tableDataAllTasks} color={'light'} tablePlatform={'All'} />
        </>
    );
}


export async function getServerSideProps(context) {

    return {
        props: {
            tableDataAllTasks: [
                {
                    "_id": "1",
                    "task_name": "Develop Login UI",
                    "assigned_by": "Bihaan",
                    "assigned_to": "Shubham",
                    "assigned_on": "2021-12-30T17:51:46.051Z",
                    "deadline": "2022-01-30T17:51:46.051Z",
                    "priority": "high"
                },
                {
                    "_id": "2",
                    "task_name": "Develop Register page UI",
                    "assigned_by": "Shubham",
                    "assigned_to": "Bihan",
                    "assigned_on": "2021-12-30T17:51:46.051Z",
                    "deadline": "2022-01-30T17:51:46.051Z",
                    "priority": "low"
                },
                {
                    "_id": "3",
                    "task_name": "Develop Home Page",
                    "assigned_by": "Amitrajit",
                    "assigned_to": "Shubham",
                    "assigned_on": "2021-12-30T17:51:46.051Z",
                    "deadline": "2022-01-30T17:51:46.051Z",
                    "priority": "Medium"
                },
                {
                    "_id": "4",
                    "task_name": "Develop About Us Page",
                    "assigned_by": "Bihaan",
                    "assigned_to": "Soumava",
                    "assigned_on": "2021-12-30T17:51:46.051Z",
                    "deadline": "2022-01-30T17:51:46.051Z",
                    "priority": "high"
                },
            ],
            tableDataMyTasks: [],
        },
    };
}


AllTasks.layout = Admin;
