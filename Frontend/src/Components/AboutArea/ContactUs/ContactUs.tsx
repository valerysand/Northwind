import "./ContactUs.css";
import { Typography, TextField, Button, ButtonGroup, FormControlLabel, Checkbox } from "@material-ui/core";
import { MailOutline, Send, Clear } from "@material-ui/icons";

function ContactUs(): JSX.Element {
    return (
        <div className="ContactUs Box">

            <Typography variant="h3" className="Header">
                <MailOutline />
                Contact Us
            </Typography>

            <form>

                <TextField label="Name" variant="outlined" className="TextBox" />

                <TextField label="Email" variant="outlined" className="TextBox" type="email" />

                <TextField label="Message" variant="outlined" className="TextBox" />

                <FormControlLabel label="Send me promotional emails" control={<Checkbox />} />

                <ButtonGroup variant="contained" fullWidth>
                    <Button color="primary" startIcon={<Send />}>Send</Button>
                    <Button color="secondary" startIcon={<Clear />}>Clear</Button>
                </ButtonGroup>

            </form>

        </div>
    );
}

export default ContactUs;
