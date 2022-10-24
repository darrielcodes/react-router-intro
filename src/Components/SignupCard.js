import {useOutletContext, useParams} from "react-router-dom";

const SignupCard = () => {

    const params = useParams();
    const [signupList] = useOutletContext();
    const foundSignup = signupList.find((signup) => {
        if (signup.email === params.email)
        return true
    });

    return (
        <div>
            {foundSignup && <p>{foundSignup.firstName}</p>}
            {foundSignup && <p>{foundSignup.lastName}</p>}
            {foundSignup && <p>{foundSignup.email}</p>}
        </div>
    )
};

export default SignupCard;