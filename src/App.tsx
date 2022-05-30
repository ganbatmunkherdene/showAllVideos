import React, { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import { experimentalStyled as styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { Button, CardActionArea, CardActions } from "@mui/material";
import ReactPlayer from "react-player";
import EditIcon from "@mui/icons-material/Edit";
import { bgcolor, border } from "@mui/system";
const Item = styled(Paper)(({ theme }) => ({
  // backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  // ...theme.typography.body2,
  padding: theme.spacing(0),

  // textAlign: "center",
  // width: 600,
  // height: 400,
  // color: theme.palette.text.secondary,
}));

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 1000,
  height: 600,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
function App() {
  const [videos, setVideos] = useState<any>();
  const [loader, setLoader] = useState<boolean>(true);

  useEffect(() => {
    const config = {
      method: "get",
      url: `/api/4.0/livevideos&request_type=manage-json`,
      headers: {
        Authorization:
          "Basic Y2VvQGFheGVjby5tbjoxeDNvOTAwSDg5OTN6TDVrdHFBOUNBelU0NTJ6RVcyMQ==",
      },
    };
    axios(config).then(function (response) {
      // handle success
      setVideos(response.data);
      setLoader(false);
    });
  }, []);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const description_style = {
    display: "flex",
    fontSize: "14px",
    color: "gray",
    paddingLeft: "10px",
    paddingRight: "5px",
    justifyContent: "space-between",
    // background:
  };
  const moreStyle = {
    display: "flex",
    fontSize: "14px",
    color: "#428bca",
    padding: "20px",
    textDecoration: "none",
    boxShadow: "1px 1px 6px -1px",
    borderRadius: "5px",
    // background:
  };
  const loaderStyle = {
    top: "50%",
    left: "50%",
  };
  const custom_card = {
    // border: "1px solid black",
    boxShadow:
      "rgb(0 0 0 / 20%) 8px 8px 4px -3px, rgb(0 0 0 / 14%) 0px 1px 1px 0px, rgb(0 0 0 / 12%) 0px 1px 3px 0px",
    backgroundColor: "#eeeeef",
    padding: "10px",
  };

  if (loader) {
    return (
      <>
        <Box sx={{ display: "center" }} style={loaderStyle}>
          <CircularProgress />
        </Box>
      </>
    );
  }

  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {Object.values(videos).map((row: any, index: number) => (
            <Grid item xs={2} sm={4} md={4} key={index}>
              <Item>
                <Modal
                  open={open}
                  onClose={handleClose}
                  aria-labelledby="modal-modal-title"
                  aria-describedby="modal-modal-description"
                >
                  <Box sx={style}>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                      <ReactPlayer
                        url={row.url}
                        controls={true}
                        width="800"
                        height="600"
                        top="50%"
                        left="50%"
                      />
                    </Typography>
                  </Box>
                </Modal>
                <Card sx={{ maxWidth: 600, height: 400 }} style={custom_card}>
                  <CardActionArea>
                    <CardMedia
                      sx={{
                        width: "auto",
                        height: 250,
                        aspectRatio: "None",
                        borderRadius: "8px",
                      }}
                      image={row.thumbnails}
                      onClick={handleOpen}
                    />
                    <CardContent>
                      <Typography
                        gutterBottom
                        variant="h5"
                        component="div"
                      ></Typography>
                      <Typography variant="body2" color="text.secondary">
                        {row.description.length > 50
                          ? `${row.description.substring(0, 50)}...`
                          : row.description}
                      </Typography>
                    </CardContent>

                    {/* <div style={description_style}>
                      {row.description.substring(0, 30)}
                      ....{" "}
                      <a href="" style={moreStyle}>
                        дэлгэрэнгүй
                      </a>
                    </div> */}
                  </CardActionArea>
                  <a
                    href={`/index.php?dispatch=Videos.live_page&hash=${row.hash}`}
                    style={moreStyle}
                  >
                    <b>Дэлгэрэнгүй</b>
                  </a>
                </Card>
              </Item>
            </Grid>
          ))}
        </Grid>
      </Box>
    </div>
  );
}

export default App;
