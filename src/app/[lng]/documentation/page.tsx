import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Image from "next/image";
import EventLoop from "../../../../public/images/event-loop-javascript.png";
import classes from "./documentation.module.scss";

const PageDocumentation = () => {
  return (
    <div>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>Memory Heap</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>sdds</Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header">
          <Typography>
            Event Loop{" "}
            <a
              href="https://www.youtube.com/watch?v=8aGhZQkoFbQ&ab_channel=JSConf"
              target="_blank">
              Source
            </a>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <div className="">
              <Image
                className={classes.rotate}
                src={EventLoop}
                width={400}
                height={400}
                alt="Event Loop"
              />
            </div>
            The Call Stack. One thread === One Call Stack === One thing at a
            time.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};
export default PageDocumentation;
