import { Link, Outlet, useParams } from "react-router-dom";

const Detail = () => {
    const {id} = useParams();
    return (
        <div>
            <h1>Halaman Detail</h1>
            <h2>Page : {id}</h2>
            <hr />
            <nav>
                <Link to={"post"}>Post</Link> | <Link to={"product"}>Product</Link>
            </nav>
            <Outlet />
        </div>
    );
};

export default Detail;