import ErrorPage from "../components/ErrorPages";
import errorImg from "../assets/error401.png";

export default function Error401() {
    return (
        <ErrorPage
            code="401"
            message="Unauthorized"
            image={errorImg}
        />
    );
}