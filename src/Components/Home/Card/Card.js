import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";

// featured reports cards
const useStyles1 = makeStyles({
  card: {
    maxWidth: 270
  },
  media: {
    height: 130
  }
});

export default function MediaCard() {
  const classes = useStyles1();

  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60"
          title=""
        />
        <CardContent style={{ padding: 6 }}>
          <Typography
            gutterBottom
            variant="h6"
            component="h6"
            style={{ fontFamily: "Montserrat", fontSize: 16 }}
          >
            Title of the read
          </Typography>
          <Typography
            variant="body2"
            color="textSecondary"
            component="p"
            style={{ fontFamily: "Montserrat", fontSize: 12 }}
          >
            A small description of the read of what you will gain from this
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions style={{ justifyContent: "space-between", padding: 0 }}>
        <CardContent style={{ padding: 5 }}>
          <Typography
            variant="body2"
            component="p"
            style={{
              color: "#9d9283",
              fontFamily: "Montserrat",
              fontSize: 10.7
            }}
          >
            Author name in Category
          </Typography>
        </CardContent>

        <IconButton
          aria-label="more"
          aria-controls="long-menu"
          aria-haspopup="true"
        >
          <MoreVertIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}
// featured collection cards
const useStyles2 = makeStyles({
  media: {
    height: 90
  }
});

export function VideoCard() {
  const classes = useStyles2();

  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60"
          title=""
        />
        <CardContent style={{ padding: 6 }}>
          <Typography
            gutterBottom
            variant="h6"
            component="h6"
            style={{ fontSize: 15, margin: 0, fontFamily: "Montserrat" }}
          >
            Title of the read
          </Typography>
          <Typography
            variant="body3"
            color="textSecondary"
            component="p"
            style={{ fontFamily: "Montserrat", margin: 0 }}
          >
            Author name
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions style={{ justifyContent: "space-between", padding: 0 }}>
        <CardContent style={{ padding: 5 }}>
          <Typography
            variant="body5"
            component="p"
            style={{
              color: "#9d9283",
              fontFamily: "Montserrat",
              margin: 0,
              fontSize: 8.5
            }}
          >
            07 May | 5 mins
          </Typography>
        </CardContent>

        <IconButton
          aria-label="more"
          aria-controls="long-menu"
          aria-haspopup="true"
          style={{ margin: 0, padding: 5 }}
        >
          <BookmarkBorderIcon />
          <MoreVertIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}
