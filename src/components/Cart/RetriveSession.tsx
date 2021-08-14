import React from "react";

export const RetrieveSession = () => {
  const [sessionData, setSessionData] = React.useState();

  React.useEffect(() => {
    const fetchSession = async () => {
      const session = await fetch(
        "https://tbc.tangodefinitions.com/api/retrieve-session"
      );
      const data = await session.json();
      setSessionData(data);
    };
    fetchSession();
  }, []);
  console.log("Session data:", sessionData);
  return (
    <>
      <div>Session</div>
    </>
  );
};
