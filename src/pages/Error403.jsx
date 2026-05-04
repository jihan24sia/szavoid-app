import ErrorPage from "../components/ErrorPages";
import errorImg from "../assets/error403.png";

export default function Error403() {
    return (
        <ErrorPage
            code="403"
            message="Forbidden"
            image={errorImg}
        />
    );
}