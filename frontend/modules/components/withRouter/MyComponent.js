import { useNavigate, useParams } from "react-router-dom";

const withRouter = (MyComponent) => {
  const Wrapper = (props) => {
    const navigate = useNavigate();
    const params = useParams();

    return <MyComponent navigate={navigate} params={params} {...props} />;
  };

  return Wrapper;
};
export default withRouter;