import React from "react";
import { useSession } from "next-auth/react";

// components

export default function CardProfile() {
  const { data, status } = useSession();
  
  return (
    <>
      {status === "loading" && <h3>loading...</h3>}

      {status === "unauthenticated" && <h3>Not authenticated</h3>}

      <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg mt-16">
        <div className="px-6">
          <div className="flex flex-wrap justify-center">
            <div className="w-full px-4 flex justify-center">
              <div className="relative">
                <img
                  alt="..."
                  src={
                    data?.user ? data?.user?.image : "/img/team-2-800x800.jpg"
                  }
                  className="shadow-xl rounded-full h-auto align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-150-px"
                />
               
              </div>
            
            </div>
            <div className="mt-16 relative text-2xl">{data?.user?.name}</div>
            <div className="w-full px-4 text-center mt-20">
              <div className="flex justify-center py-4 lg:pt-4 pt-8">
                <div className="mr-4 p-3 text-center">
                  <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                    11
                  </span>
                  <span className="text-sm text-blueGray-400">Payments</span>
                </div>
                <div className="mr-4 p-3 text-center">
                  <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                    6
                  </span>
                  <span className="text-sm text-blueGray-400">Discord</span>
                </div>
                <div className="lg:mr-4 p-3 text-center">
                  <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                    5
                  </span>
                  <span className="text-sm text-blueGray-400">Slack</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
