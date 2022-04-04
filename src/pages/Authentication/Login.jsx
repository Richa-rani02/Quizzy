import "./Auth.css";
import {Link} from "react-router-dom";
export const Login=()=>{
    return(
        <>
        <div className="auth__container">
            <div className="auth__section">
            <form  className="auth-form top-gutter-lg flex-col">
                    <h4 className="bottom-gutter-sm">Login</h4>
                    <input type="email" name="email" value="" placeholder="Email" className="input-box"/>
                    <input type="password" name="password" value="" placeholder="Password" className="input-box" />
                    <div className="auth-links">
                    <p>forget your password <a href="#" className="link-text-primary">click here</a></p>
                    <p>don't have an account <Link to="/signup" className="link-text-primary">create new</Link></p>
                    </div>
                    
                    <button type="submit" className="btn btn-solid-primary btn-sm btn-rounded-5 top-gutter-md btn-md">Login</button>
                </form>
            </div>

        </div>
        </>
    )
}