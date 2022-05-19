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
    // const config = {
    //   method: "get",
    //   url: `https://amjla.mn/api/4.0/livevideos?request_type=manage-json`,
    //   headers: {
    //     Authorization:
    //       "Basic Y2VvQGFheGVjby5tbjp5MVFtcTA1bm5NbDI5MDRHOHFkZ3A4MG01NzdkNjMxbQ==",
    //     Cookie:
    //       "sid_admin_d870d=16514c52dfae9901a2578733deb0b585-A; sid_admin_s_d870d=58ae681b960b3478d3e16304d8aa2a0e-A; sid_customer_d870d=54e2c8068a240b8b7ca8187adc17d799-C; sid_customer_s_d870d=1585d400dcf00f5162a946e82c7d64a9-C",
    //   },
    // };
    // axios(config).then(function (response) {
    //   // handle success
    //   setVideos(response.data);
    //   setLoader(false);
    // });

    const data = [
      {
        id: "1",
        url: "https://longbinarycity.com/live_streams/iFqKGUT6eKonkXM/hls.m3u8",
        hash: "iFqKGUT6eKonkXM",
        created_at: "2022-03-01 16:24:52.420",
        thumbnails:
          "https://longbinarycity.com/live_streams/iFqKGUT6eKonkXM/iFqKGUT6eKonkXM_240p.webp",
        front_status: "1",
        description:
          "qwqweqweqwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww",
      },
      {
        id: "2",
        url: "https://longbinarycity.com/live_streams/4Hu7FFtfe7CAXJn/hls.m3u8",
        hash: "4Hu7FFtfe7CAXJn",
        created_at: "2022-03-01 16:28:29.652",
        thumbnails:
          "https://longbinarycity.com/live_streams/4Hu7FFtfe7CAXJn/4Hu7FFtfe7CAXJn_240p.webp",
        front_status: "1",
        description: "12324asdasdqwweqwe",
      },
      {
        id: "3",
        url: "https://longbinarycity.com/live_streams/WCDjj81hb2KX3bc/hls.m3u8",
        hash: "WCDjj81hb2KX3bc",
        created_at: "2022-03-01 16:29:20.818",
        thumbnails:
          "https://longbinarycity.com/live_streams/WCDjj81hb2KX3bc/WCDjj81hb2KX3bc_240p.webp",
        front_status: "0",
        description: "qweqwrqweqwqweqwrqweqwrqwejkljklqwrr",
      },
      {
        id: "4",
        url: "https://longbinarycity.com/live_streams/Kyaiy3ICOIMb8iJ/hls.m3u8",
        hash: "Kyaiy3ICOIMb8iJ",
        created_at: "2022-03-01 16:29:38.438",
        thumbnails:
          "https://longbinarycity.com/live_streams/Kyaiy3ICOIMb8iJ/Kyaiy3ICOIMb8iJ_240p.webp",
        front_status: "0",
        description: "2354234125qwrqwrqqqqqqqqqq",
      },
      {
        id: "5",
        url: "https://longbinarycity.com/live_streams/Y2Yx5dITD0x0naQ/hls.m3u8",
        hash: "Y2Yx5dITD0x0naQ",
        created_at: "2022-03-01 16:29:52.289",
        thumbnails:
          "https://longbinarycity.com/live_streams/Y2Yx5dITD0x0naQ/Y2Yx5dITD0x0naQ_240p.webp",
        front_status: "0",
        description: "12412qwrqw31243w",
      },
      {
        id: "6",
        url: "https://longbinarycity.com/live_streams/J1JNl70TAAPqkRV/hls.m3u8",
        hash: "J1JNl70TAAPqkRV",
        created_at: "2022-03-01 16:30:10.867",
        thumbnails:
          "https://longbinarycity.com/live_streams/J1JNl70TAAPqkRV/J1JNl70TAAPqkRV_240p.webp",
        front_status: "0",
        description: "rtreterty",
      },
      {
        id: "7",
        url: "https://longbinarycity.com/live_streams/20LszAW2kVrAhTg/hls.m3u8",
        hash: "20LszAW2kVrAhTg",
        created_at: "2022-03-01 16:30:54.952",
        thumbnails:
          "https://longbinarycity.com/live_streams/20LszAW2kVrAhTg/20LszAW2kVrAhTg_240p.webp",
        front_status: "0",
        description: "",
      },
      {
        id: "21",
        url: "https://longbinarycity.com/live_streams/icsPQVKd8vH2Qh7/hls.m3u8",
        hash: "icsPQVKd8vH2Qh7",
        created_at: "2022-03-15 15:47:42.034",
        thumbnails:
          "https://longbinarycity.com/live_streams/icsPQVKd8vH2Qh7/icsPQVKd8vH2Qh7_240p.webp",
        front_status: "0",
        description: "",
      },
      {
        id: "22",
        url: "https://longbinarycity.com/live_streams/JxbL35fLsO7jWma/hls.m3u8",
        hash: "JxbL35fLsO7jWma",
        created_at: "2022-03-15 15:47:42.048",
        thumbnails:
          "https://longbinarycity.com/live_streams/JxbL35fLsO7jWma/JxbL35fLsO7jWma_240p.webp",
        front_status: "0",
        description: "",
      },
      {
        id: "24",
        url: "https://longbinarycity.com/live_streams/kZ5JOtfdtE6Xkbp/hls.m3u8",
        hash: "kZ5JOtfdtE6Xkbp",
        created_at: "2022-03-15 16:19:55.209",
        thumbnails:
          "https://longbinarycity.com/live_streams/kZ5JOtfdtE6Xkbp/kZ5JOtfdtE6Xkbp_240p.webp",
        front_status: "0",
        description: "",
      },
      {
        id: "28",
        url: "https://longbinarycity.com/live_streams/cVQ9wj1iOMV24cw/hls.m3u8",
        hash: "cVQ9wj1iOMV24cw",
        created_at: "2022-03-15 16:23:04.134",
        thumbnails:
          "https://longbinarycity.com/live_streams/cVQ9wj1iOMV24cw/cVQ9wj1iOMV24cw_240p.webp",
        front_status: "0",
        description: "",
      },
      {
        id: "29",
        url: "https://longbinarycity.com/live_streams/EbB3yolo3SxkQg9/hls.m3u8",
        hash: "EbB3yolo3SxkQg9",
        created_at: "2022-03-23 11:51:22.851",
        thumbnails:
          "https://longbinarycity.com/live_streams/EbB3yolo3SxkQg9/EbB3yolo3SxkQg9_240p.webp",
        front_status: "0",
        description: "",
      },
      {
        id: "100",
        url: "https://longbinarycity.com/live_streams/SkOPF74fryZk16s/hls.m3u8",
        hash: "SkOPF74fryZk16s",
        created_at: "2022-03-25 18:22:48.356",
        thumbnails:
          "https://longbinarycity.com/live_streams/SkOPF74fryZk16s/SkOPF74fryZk16s_240p.webp",
        front_status: "0",
        description: "",
      },
      {
        id: "101",
        url: "https://longbinarycity.com/live_streams/OLcHfhoaEf7xlMs/hls.m3u8",
        hash: "OLcHfhoaEf7xlMs",
        created_at: "2022-03-25 18:22:48.369",
        thumbnails:
          "https://longbinarycity.com/live_streams/OLcHfhoaEf7xlMs/OLcHfhoaEf7xlMs_240p.webp",
        front_status: "0",
        description: "",
      },
      {
        id: "102",
        url: "https://longbinarycity.com/live_streams/JC25FhMukZGBsY5/hls.m3u8",
        hash: "JC25FhMukZGBsY5",
        created_at: "2022-03-25 18:22:48.384",
        thumbnails:
          "https://longbinarycity.com/live_streams/JC25FhMukZGBsY5/JC25FhMukZGBsY5_240p.webp",
        front_status: "0",
        description: "",
      },
      {
        id: "103",
        url: "https://longbinarycity.com/live_streams/x6l3hzKcKYrerGL/hls.m3u8",
        hash: "x6l3hzKcKYrerGL",
        created_at: "2022-03-25 18:22:48.398",
        thumbnails:
          "https://longbinarycity.com/live_streams/x6l3hzKcKYrerGL/x6l3hzKcKYrerGL_240p.webp",
        front_status: "0",
        description: "",
      },
      {
        id: "198",
        url: "https://longbinarycity.com/live_streams/KWvqV5xGladNilx/hls.m3u8",
        hash: "KWvqV5xGladNilx",
        created_at: "2022-04-26 10:24:04.998",
        thumbnails:
          "https://longbinarycity.com/live_streams/KWvqV5xGladNilx/KWvqV5xGladNilx_240p.webp",
        front_status: "0",
        description: "",
      },
      {
        id: "199",
        url: "https://longbinarycity.com/live_streams/EISdpQRMLsyiny2/hls.m3u8",
        hash: "EISdpQRMLsyiny2",
        created_at: "2022-04-26 10:34:11.629",
        thumbnails:
          "https://longbinarycity.com/live_streams/EISdpQRMLsyiny2/EISdpQRMLsyiny2_240p.webp",
        front_status: "0",
        description: "",
      },
      {
        id: "200",
        url: "https://longbinarycity.com/live_streams/bt7OiFkqswdTUYo/hls.m3u8",
        hash: "bt7OiFkqswdTUYo",
        created_at: "2022-04-29 10:05:07.937",
        thumbnails:
          "https://longbinarycity.com/live_streams/bt7OiFkqswdTUYo/bt7OiFkqswdTUYo_240p.webp",
        front_status: "0",
        description: "",
      },
      {
        id: "201",
        url: "https://longbinarycity.com/live_streams/tbFEdvP4UADTCNR/hls.m3u8",
        hash: "tbFEdvP4UADTCNR",
        created_at: "2022-04-29 10:05:16.195",
        thumbnails:
          "https://longbinarycity.com/live_streams/tbFEdvP4UADTCNR/tbFEdvP4UADTCNR_240p.webp",
        front_status: "0",
        description: "",
      },
      {
        id: "202",
        url: "https://longbinarycity.com/live_streams/0Dg18cgvkFjGdNK/hls.m3u8",
        hash: "0Dg18cgvkFjGdNK",
        created_at: "2022-04-29 10:41:12.365",
        thumbnails:
          "https://longbinarycity.com/live_streams/0Dg18cgvkFjGdNK/0Dg18cgvkFjGdNK_240p.webp",
        front_status: "0",
        description: "",
      },
      {
        id: "203",
        url: "https://longbinarycity.com/live_streams/iydgUkDq5vMvtQE/hls.m3u8",
        hash: "iydgUkDq5vMvtQE",
        created_at: "2022-05-02 11:27:48.749",
        thumbnails:
          "https://longbinarycity.com/live_streams/iydgUkDq5vMvtQE/iydgUkDq5vMvtQE_240p.webp",
        front_status: "0",
        description: "",
      },
      {
        id: "204",
        url: "https://longbinarycity.com/live_streams/viWVlrTSixJBWiv/hls.m3u8",
        hash: "viWVlrTSixJBWiv",
        created_at: "2022-05-02 11:27:56.595",
        thumbnails:
          "https://longbinarycity.com/live_streams/viWVlrTSixJBWiv/viWVlrTSixJBWiv_240p.webp",
        front_status: "0",
        description: "",
      },
      {
        id: "205",
        url: "https://longbinarycity.com/live_streams/xt4dW9jCapSVANr/hls.m3u8",
        hash: "xt4dW9jCapSVANr",
        created_at: "2022-05-02 14:57:28.278",
        thumbnails:
          "https://longbinarycity.com/live_streams/xt4dW9jCapSVANr/xt4dW9jCapSVANr_240p.webp",
        front_status: "0",
        description: "",
      },
      {
        id: "207",
        url: "https://longbinarycity.com/live_streams/bzUvl0FQ7c1tHOp/hls.m3u8",
        hash: "bzUvl0FQ7c1tHOp",
        created_at: "2022-05-05 10:12:19.352",
        thumbnails:
          "https://longbinarycity.com/live_streams/bzUvl0FQ7c1tHOp/bzUvl0FQ7c1tHOp_240p.webp",
        front_status: "0",
        description: "",
      },
      {
        id: "208",
        url: "https://longbinarycity.com/live_streams/SDGIJLbLfMBn8n0/hls.m3u8",
        hash: "SDGIJLbLfMBn8n0",
        created_at: "2022-05-05 10:12:19.355",
        thumbnails:
          "https://longbinarycity.com/live_streams/SDGIJLbLfMBn8n0/SDGIJLbLfMBn8n0_240p.webp",
        front_status: "0",
        description: "",
      },
      {
        id: "210",
        url: "https://longbinarycity.com/live_streams/FKjOEj1Vi28wEMh/hls.m3u8",
        hash: "FKjOEj1Vi28wEMh",
        created_at: "2022-05-09 10:27:15.037",
        thumbnails:
          "https://longbinarycity.com/live_streams/FKjOEj1Vi28wEMh/FKjOEj1Vi28wEMh_240p.webp",
        front_status: "0",
        description: "",
      },
      {
        id: "219",
        url: "https://longbinarycity.com/live_streams/gY4UP4GYTqWdKUX/hls.m3u8",
        hash: "gY4UP4GYTqWdKUX",
        created_at: "2022-05-11 17:15:32.488",
        thumbnails:
          "https://longbinarycity.com/live_streams/gY4UP4GYTqWdKUX/gY4UP4GYTqWdKUX_240p.webp",
        front_status: "0",
        description: "",
      },
      {
        id: "220",
        url: "https://longbinarycity.com/live_streams/qBZtg7uAlCHcQ6E/hls.m3u8",
        hash: "qBZtg7uAlCHcQ6E",
        created_at: "2022-05-11 17:15:47.373",
        thumbnails:
          "https://longbinarycity.com/live_streams/qBZtg7uAlCHcQ6E/qBZtg7uAlCHcQ6E_240p.webp",
        front_status: "0",
        description: "",
      },
      {
        id: "221",
        url: "https://longbinarycity.com/live_streams/q1CfWQAjKZb8LMo/hls.m3u8",
        hash: "q1CfWQAjKZb8LMo",
        created_at: "2022-05-13 19:58:50.075",
        thumbnails:
          "https://longbinarycity.com/live_streams/q1CfWQAjKZb8LMo/q1CfWQAjKZb8LMo_240p.webp",
        front_status: "0",
        description: "",
      },
      {
        id: "222",
        url: "https://longbinarycity.com/live_streams/9XaB21UpREO8x6z/hls.m3u8",
        hash: "9XaB21UpREO8x6z",
        created_at: "2022-05-13 20:00:03.590",
        thumbnails:
          "https://longbinarycity.com/live_streams/9XaB21UpREO8x6z/9XaB21UpREO8x6z_240p.webp",
        front_status: "0",
        description: "",
      },
      {
        id: "223",
        url: "https://longbinarycity.com/live_streams/MczKXKCSm0qXJ0T/hls.m3u8",
        hash: "MczKXKCSm0qXJ0T",
        created_at: "2022-05-16 08:59:32.949",
        thumbnails:
          "https://longbinarycity.com/live_streams/MczKXKCSm0qXJ0T/MczKXKCSm0qXJ0T_240p.webp",
        front_status: "0",
        description: "",
      },
      {
        id: "224",
        url: "https://longbinarycity.com/live_streams/BNaPQb3002y7yXb/hls.m3u8",
        hash: "BNaPQb3002y7yXb",
        created_at: "2022-05-17 17:21:41.529",
        thumbnails:
          "https://longbinarycity.com/live_streams/BNaPQb3002y7yXb/BNaPQb3002y7yXb_240p.webp",
        front_status: "0",
        description: "",
      },
      {
        id: "225",
        url: "https://longbinarycity.com/live_streams/NHgavJcvFhQxdhf/hls.m3u8",
        hash: "NHgavJcvFhQxdhf",
        created_at: "2022-05-18 10:28:38.192",
        thumbnails:
          "https://longbinarycity.com/live_streams/NHgavJcvFhQxdhf/NHgavJcvFhQxdhf_240p.webp",
        front_status: "0",
        description: "",
      },
    ];
    setVideos(data);
    setLoader(false);
  }, []);
  const [open, setOpen] = React.useState(false);
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
    color: "#4848d3",
    padding: "20px",
    textDecoration: "none",

    // background:
  };
  const loaderStyle = {
    top: "50%",
    left: "50%",
  };
  const custom_card = {
    // border: "1px solid black",
    backgroundColor: "#D4E6F1",
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
                <Card sx={{ maxWidth: 600 }} style={custom_card}>
                  <CardActionArea>
                    <CardMedia
                      // sx={{ back }}
                      component="img"
                      width="600"
                      height="400"
                      image={row.thumbnails}
                      alt="green iguana"
                      onClick={handleOpen}
                    />
                    <CardContent>
                      <Typography
                        gutterBottom
                        variant="h5"
                        component="div"
                      ></Typography>
                      <Typography variant="body2" color="text.secondary">
                        {row.description.substring(0, 50)}...
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
                  <a href="https://izi.mn" style={moreStyle}>
                    Дэлгэрэнгүй
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
