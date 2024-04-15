import { useLocation, useParams, useSearchParams } from "react-router-dom";

const UserPage = () => {
    const params = useParams()
    const location = useLocation()
    const [searchParams, setSearchParams] = useSearchParams()
    console.log(params, location, searchParams.get('name'))
    return (
        <div>User Page for ID: {params.userId}</div>
    )
}
export default UserPage;