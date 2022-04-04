import {Link} from "react-router-dom";
export const Signup=()=>{
    return(
        <>
        <div className="auth__container">
            <div className="auth__section">
            <form  className="auth-form top-gutter-md flex-col">
                    <h4 className="bottom-gutter-sm">Signup</h4>
                    <input type="text" name="name" value="" placeholder="Name" className="input-box"/>
                    <input type="email" name="email" value="" placeholder="Email" className="input-box"/>
                    <input type="password" name="password" value="" placeholder="Password" className="input-box" />
                    <input type="password" name="confirmpassword" value="" placeholder="confirm Password" className="input-box" />
                    <div className="auth-links">
                    <p>Already have an account <Link to="/login" className="link-text-primary">login</Link></p>
                    </div>
                    
                    <button type="submit" className="btn btn-solid-primary btn-sm btn-rounded-5 top-gutter-md btn-md">SignUp</button>
                </form>
            </div>

        </div>
        </>
    )
}