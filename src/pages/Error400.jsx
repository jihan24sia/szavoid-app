import ErrorPage from "../components/ErrorPages";
import errorImg from "../assets/error400.png";

export default function Error400() {
    return (
        <ErrorPage
            code="400"
            message="Bad Request"
            image={errorImg}
        />
    );
}