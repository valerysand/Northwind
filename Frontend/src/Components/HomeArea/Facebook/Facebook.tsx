import css from "./Facebook.module.css";

function Facebook(): JSX.Element {

    return (
        <div className={css.BackColor + " Box"}>
            <p className={css.LargeText}>
                Facebook Page:
                <a href="https://www.facebook.com/northwind">https://www.facebook.com/northwind</a>
            </p>
        </div>
    );
}

export default Facebook;
