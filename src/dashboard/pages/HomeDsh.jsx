import React from "react";
import HomeCard from "../cards/HomeCard";
const HomeDsh = () => {
  return (
    <div className=" flex gap-4 mt-10 flex-wrap  max-h-screen   ">
      <HomeCard
        icon={"fa fa-user "}
        iconbg={"bg-blue-500"}
        title={"Today's Users"}
        nums={"2,300"}
        percent={"+3%"}
        percentdesc={"than last month"}
        shadowbg={"shadow-blue-600"}
      />
      <HomeCard
        icon={"fa fa-user "}
        iconbg={"bg-pink-500"}
        title={"Today's Users"}
        nums={"2,300"}
        percent={"+3%"}
        percentdesc={"than last month"}
        shadowbg={"shadow-pink-600"}
      />
      <HomeCard
        icon={"fa fa-user "}
        iconbg={"bg-blue-500"}
        title={"Today's Users"}
        nums={"2,300"}
        percent={"+3%"}
        percentdesc={"than last month"}
        shadowbg={"shadow-blue-600"}
      />
      <HomeCard
        icon={"fa fa-user "}
        iconbg={"bg-blue-500"}
        title={"Today's Users"}
        nums={"2,300"}
        percent={"+3%"}
        percentdesc={"than last month"}
        shadowbg={"shadow-blue-600"}
      />
    </div>
  );
};

export default HomeDsh;
