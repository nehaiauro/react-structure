import React, { useEffect } from "react";
import Header from "../components/Header/HeaderComponent";
import { getSourceCode } from "../services/codeGenerator";

function HomeContainer() {
  useEffect(() => {
    let isApiCalled = false;
    let data = {
      name: "",
      type: "",
      modules: [
        {
          name: "API calling",
          isEnable: true,
        },
      ],
      components: [
        {
          name: "Header",
          isEnable: true,
        },
        {
          name: "Sidebar",
          isEnable: true,
        },
        {
          name: "Login",
          isEnable: true,
        },
      ],
    };

    // getSourceCode(data, isApiCalled).then((response) => {
    //   if (response.statusCode === 200) {
    //     console.log(response);
    //   }
    // });
  }, []);

  return (
    <div>
      Inside container
      <Header />
    </div>
  );
}

export default HomeContainer;
