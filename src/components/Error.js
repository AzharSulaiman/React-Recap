import { useRouteError } from "react-router-dom";

const Error = () => {
    const err = useRouteError();
    return (
        <h1>404 Not Found</h1>
    )
}

export default Error;