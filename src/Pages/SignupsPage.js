import { Outlet, useOutletContext, useNavigate } from "react-router-dom";

const SignupsPage = () => {
    const navigate = useNavigate();
    const [signupList] = useOutletContext();

    return (
        <div>
            <h1>Signups Page</h1>
            <select onChange={(e) => {
                navigate(`/signups/${e.target.value}`)
            }}>
            <option></option>
            {signupList.map((signUp) => {
                return (
                <option value={signUp.email}>{signUp.firstName}</option>
                )
            })}
            </select>
            <Outlet context={[signupList]}/>
        </div>
    )
};

export default SignupsPage;