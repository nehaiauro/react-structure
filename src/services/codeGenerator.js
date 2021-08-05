import { CODE_GENERATOR_URL } from "./CONSTANTS";

export const getSourceCode = async (data, isAPICalled) => {
  {
    isAPICalled = true;
    const response = await fetch(CODE_GENERATOR_URL, {
      responseType: "blob",
    }).subscribe(
      (data) => {
        isAPICalled = false;
        console.log(data);
        const downloadUrl = URL.createObjectURL(data);

        const a = document.createElement("a");
        a.href = downloadUrl;
        a.download = this.myProjectDetails.name;
        a.click();
        window.URL.revokeObjectURL(downloadUrl);
        this.isAPICalled = false;
      },
      (error) => {
        console.log(error);
        this.isAPICalled = false;
      }
    );
  }
};
