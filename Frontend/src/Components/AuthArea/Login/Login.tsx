import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import CredentialsModel from "../../../Models/CredentialsModel";
import authService from "../../../Services/AuthService";
import notifyService from "../../../Services/NotifyService";
import "./Login.css";

function Login(): JSX.Element {

    const navigator = useNavigate();
    const { register, handleSubmit } = useForm<CredentialsModel>();

    async function submit(credentials: CredentialsModel) {
        try {
            await authService.login(credentials);
            notifyService.success("You are now logged in");
            navigator("/home");
        }
        catch(err: any) {
            notifyService.error(err);
        }
    }

    return (
        <div className="Login Box">
			
            <h2>Login</h2>

            <form onSubmit={handleSubmit(submit)}>

                <label>Username: </label>
                <input type="text" {...register("username")} />

                <label>Password: </label>
                <input type="password" {...register("password")} />

                <button>Login</button>

            </form>

        </div>
    );
}

export default Login;
