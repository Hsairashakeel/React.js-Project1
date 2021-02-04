import React from 'react'
import ReservationSideBar from '../reservation/reservationSideBar'
import Info from './Info'
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography'
import ReservationForm from './ReservationForm'
import Confirmation from './Confirmation'
const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
    },
    backButton: {
        marginRight: theme.spacing(1),
    },
    instructions: {
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(1),
    },
    iconContainer: { // define styles for icon container
        transform: 'scale(3)',
    }
}));

function getSteps() {
    return ['Check Available Rooms', 'Choose Room', 'Make A reservation'];
}

function getStepContent(stepIndex) {
    switch (stepIndex) {
        case 0:
            return (<ReservationSideBar />);
        case 1:
            return (<ReservationForm />);
        case 2:
            return (<Confirmation />);
        default:
            return 'Unknown stepIndex';
    }
}

function Reservation() {
    const classes = useStyles();
    const [activeStep, setActiveStep] = React.useState(0);
    const steps = getSteps();

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleReset = () => {
        setActiveStep(0);
    };

    return (
        <div>
            <Info />
            <div className={classes.root}>
                <Stepper activeStep={activeStep} alternativeLabel>
                    {steps.map((label) => (
                        <Step key={label}>
                            <StepLabel classes={{ // apply this style
                                iconContainer: classes.iconContainer
                            }}>{label}</StepLabel>
                        </Step>
                    ))}
                </Stepper>
                <div>
                    {activeStep === steps.length ? (
                        <div>
                            <Typography className={classes.instructions}>All steps completed</Typography>
                            <Button onClick={handleReset} className="awe-btn awe-btn-13">Reset</Button>
                        </div>
                    ) : (
                            <div>
                                <Typography className={classes.instructions}>{getStepContent(activeStep)}</Typography>
                                <div style={{ marginBottom: "1em" }}>
                                    <Button
                                        style={{ width: "20%" }}
                                        disabled={activeStep === 0}
                                        onClick={handleBack}
                                        className={classes.backButton}
                                    >
                                        Back
                                    </Button>
                                    <Button style={{ width: "20%" }} className="awe-btn awe-btn-13" variant="contained" color="primary" onClick={handleNext}>
                                        {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                                    </Button>
                                </div>
                            </div>
                        )}
                </div>
            </div>
        </div>
    );
}
export default Reservation;
