import { Helmet } from "react-helmet-async";

const PageTitle = ({ title }) => {
  return (
    <Helmet>
      <title>{title} | RAMFLIEX</title>
    </Helmet>
  );
};

export default PageTitle;
