import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import "./Home/Home.css";
import img from "./Home/placeholder/img.svg";
import threeDotNav from "./Home/3dotnav/3_dot_nav.svg";

import Player from "./MaxPlayer/MaxPlayer";

const useStyles = makeStyles(theme => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  paper: {
    backgroundColor: "white",
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3)
  }
}));

export default function TransitionsModal() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <div className="trending" onClick={handleOpen}>
        <h3>Trending</h3>
        <div className="trending_contents">
          <div className="item">
            <img src={img} alt="img" />
            <div className="item_content">
              <h4>Title to the read</h4>
              <p>
                It is a long established fact that a reader will be distracted.{" "}
              </p>
              <h6>Author name in Category</h6>
            </div>
            <div className="more">
              <img src={threeDotNav} />
            </div>
          </div>
        </div>
      </div>

      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 200
        }}
      >
        <Fade in={open}>
          <Player handleClose={handleClose} />
        </Fade>
      </Modal>
    </div>
  );
}
